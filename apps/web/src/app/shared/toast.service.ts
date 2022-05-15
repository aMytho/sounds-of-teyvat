import { Injectable } from '@angular/core';
import { Toast, ToastType } from '../toast/toast';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toasts: Toast[] = [];
    constructor() { }

    /**
     * Adds a toast
     */
    addToast(message: string, type: ToastType) {
        const id = this.generateId();
        this.toasts.push({
            message: message,
            type: type,
            id: id,
            isOpen: false
        });
        setTimeout(() => {
            this.updateView(id, true);
        }, 500);
    }

    /**
     * Creates a unique id for the toast
     */
    generateId() {
        if (this.toasts.length == 0) return 1;

        // Loop through all toasts and find the highest id
        let highestId = 1;
        this.toasts.forEach(toast => {
            if (toast.id > highestId) highestId = toast.id;
        }, this);

        return highestId + 1;
    }

    /**
     * Removes the toast
     */
    removeToast(id: number) {
        this.updateView(id, false);
        setTimeout(() => {
            this.toasts = this.toasts.filter(toast => toast.id !== id);
        }, 1000);
    }

    /**
     * Updates the view to show or hide the toast
     */
    updateView(id: number, isOpen: boolean) {
        this.toasts.forEach(toast => {
            if (toast.id == id) toast.isOpen = isOpen;
        });
    }
}