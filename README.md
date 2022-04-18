# Sounds of Teyvat

This project allows users to store and upload Genshin Impact music covers on the Windsong Lyre and other in-game instruments.

This project is a monorepo built on [Nx](https://nx.dev). The server is built with [NestJS](https://nestjs.com) and the frontend is built with [Angular](https://angular.io).

[![CodeFactor](https://www.codefactor.io/repository/github/amytho/sounds-of-teyvat/badge/main)](https://www.codefactor.io/repository/github/amytho/sounds-of-teyvat/overview/main)

## Features

- Upload Genshin Impact music covers for in-game instruments.
- - Includes notes for playing the piece!
- Comment and upvote covers.

## Contributing

Anyone is welcome (and encouraged) to contribute to the project! All skill levels are welcome. While we are primarily looking for programmers, everyone is welcome to help out in any way you can.

### Installation

To build the project you will need to install the below items:

- Supported version of [NodeJS](https://nodejs.org/en/) 14+
- [Docker](https://www.docker.com) to run the database. If you don't want a container you can run it on your own system. We use [Postgres](https://www.postgresql.org).

Fork the repository. Clone your fork. You will need to install the project dependencies. Run the below command in a command prompt.
- `npm install`

### Config

Next you need to setup the config files. Create a `.env` and a `.env.test` in the root directory. Fill them with the below data replacing the username, password, port, and secret with your database values.

```
DATABASE_URL="postgresql://user:password@localhost:port/sounds-of-teyvat?schema=public"
JWT_SECRET="secret"
```

If you are using docker you must use the below values from the docker compose file:
- user: postgres
- password: 123
- port: 5434

All values for the `.env.test` are the same except the port. It must be 5435.
### Running the DB

Now that the config is done you need to start your database. If you are using Docker run `npm run db:dev:up`.
If you are not using Docker you have to start your Postgres databse manually. Refer to their documentation on how to do so.

### Generating Types

Prisma has built in support for custom DB types. You can generate them by running `npm run prisma:dev:generate`. This will automatically be accomplished when you start the server. However, you can run it manually as well.

### Running the Project

You need to run both the frontend and backend. Run each in a separate terminal window. Both will recompile as changes are made.

`npm run start:api`

`npm run start:web`