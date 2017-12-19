import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    authRequired;
    utcOffset;
    constructor(public http: Http, private apiService: ApiService) {

    }

    getUserData(data) {
        console.log(data);
        this.authRequired = false;
        this.utcOffset = false;
        let url = environment.APP.API_URL + environment.APP.APP_GET_USER;
        return this.apiService.postApi(url,data,this.authRequired, this.utcOffset);
    }

}
