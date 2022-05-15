import { Component, OnInit } from '@angular/core';
import { ToastType } from './toast';
import { ToastService } from '../shared/toast.service';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';

@Component({
    selector: 'sounds-of-teyvat-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                opacity: 0.9,
            })),
            state('closed', style({
                opacity: 0.0,
            })),
            transition('open => closed', [
                animate('0.8s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ]),
        ]),
    ],
})
export class ToastComponent implements OnInit {
    constructor(
        private toastService: ToastService
    ) {}

    get getToasts() {
        return this.toastService.toasts;
    }

    removeToast(id: number) {
        this.toastService.removeToast(id);
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.toastService.addToast("This is an example info message", ToastType.Info);
            setTimeout(() => {
                this.toastService.addToast("Critical Error!", ToastType.Error);
                setTimeout(() => {
                    this.toastService.addToast("YAY, it worked!!!", ToastType.Success);
                    this.toastService.addToast("This is a warning you should look at", ToastType.Warning);
                }, 3000);
            }, 3000);
        }, 3000);
    }
}