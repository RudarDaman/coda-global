import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  getListRecipes() {
    return this.httpClient.get('http://starlord.hackerearth.com/recipe');
  }
}
