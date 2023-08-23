import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    alert(message: string) {
        window.alert(message);
    }
}