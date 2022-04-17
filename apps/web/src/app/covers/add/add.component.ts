import { Component, OnInit } from '@angular/core';
import { CoversService } from '../../shared/covers.service';
import { AddCover } from './addCover.default';

@Component({
    selector: 'sounds-of-teyvat-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    constructor(private coverService: CoversService) {}

    model = new AddCover('', '', '');

    ngOnInit(): void {
    }

    async onSubmit() {
        console.log(this.model);
        const success = await this.coverService.createCover(this.model);
        console.log(success);
    }

}
