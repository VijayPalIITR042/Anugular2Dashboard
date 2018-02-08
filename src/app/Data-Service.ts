import { Injectable, Input } from "@angular/core";
import { Http } from '@angular/http';
@Injectable()
export class DataService {
    constructor(public _http: Http) {
    }
    
    hamburger: boolean;

    getBigCardData() {
        return this._http.get("./data.json")
            .map(function (response) {
                return response.json()
            });
    }
}