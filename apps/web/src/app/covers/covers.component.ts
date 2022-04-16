import { Component, OnInit } from '@angular/core';
import { CoversService } from '../shared/covers.service';

@Component({
    selector: 'sounds-of-teyvat-covers',
    templateUrl: './covers.component.html',
    styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit {
    constructor(private coversService: CoversService) { }

    ngOnInit(): void {
        console.log('CoversComponent.ngOnInit()');
        this.coversService.getAllCovers().then(covers => {
            console.log(covers);
        });
    }

}
