import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app/app.module';
import { PrismaService } from '../app/prisma/prisma.service';
import * as pactum from "pactum";
import { UserSignUp } from '@sounds-of-teyvat/dto';

describe("App-e2e", () => {
    let app: INestApplication;
    let prisma: PrismaService
    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleRef.createNestApplication();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        await app.init();
        await app.listen(3333);
        prisma = app.get(PrismaService);
        pactum.request.setBaseUrl(`http://localhost:3333/${globalPrefix}`);
        await prisma.cleanDb();
    });

    afterAll(() => {
        app.close();
    });

    describe("Auth", () => {
        const dto: UserSignUp = {
            email: "test@gmail.com",
            password: "123",
            userName: "test",
        }
        describe("Signup", () => {
            it("should throw exception if field is empty", () => {
                return pactum.spec().post("/auth/signup")
                .expectStatus(400);
            })


            it("should signup", () => {
                return pactum.spec().post("/auth/signup")
                .withBody(dto).expectStatus(201);
            })
        })

        describe("SignIn", () => {
            it("should throw exception if field is empty", () => {
                return pactum.spec().post("/auth/signin")
                .expectStatus(400);
            })


            it("should signin", () => {
                return pactum.spec().post("/auth/signin")
                .withBody(dto).expectStatus(200).stores('userAt', 'access_token');
            })
        })
    })

    describe("User", () => {
        describe("Get me", () => {
            it("should get current user", () => {
                return pactum.spec().get("/users/me")
                .expectStatus(200).withHeaders("Authorization", "Bearer $S{userAt}");
            })

        })

        describe("Edit user", () => {
            it.todo("should return a token");

        })
    })

    it.todo("should pass");
})