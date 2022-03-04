import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRandomUserResults } from 'src/models/api-random user/api-random-user-results';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  rawUrl:string =' https://randomuser.me/api/';

  constructor(private httpClient: HttpClient) { }

 //On peut remplacer ApiRandomUserResults par any, cela renvoi tout 
//  getRandomUser(): Observable<any>{
//   return this.httpClient.get(this.rawUrl);
//  }

  getRandomUser(): Observable<ApiRandomUserResults> {
    return this.httpClient.get<ApiRandomUserResults>(this.rawUrl);
  }

}



