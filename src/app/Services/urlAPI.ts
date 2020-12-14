import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class UrlAPI {


    getURL(): string {
        return 'https://56d65e6e8913.ngrok.io/';
    }
}
