import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private _http:HttpClient) { }

  getQuery(query:string){
    const url = `http://gateway.marvel.com/v1/public/${query}`;
    const params = new HttpParams()
      .set('ts','1')
      .set('apikey','b5dd158dd0e856443db7fb726fbc6bc9')
      .set('hash','80182fcb24c6426319114b9e34eafed6');
    

    return this._http.get(url,{params});
  }

  getComics(){
    return this.getQuery('comics');
  }

  findComic(termino:string, comics:any[]){
    let comicsArr:any[] = [];
    let name = termino.toLocaleLowerCase();

    if(termino.length>0){
      comics.forEach(element=>{

        let title = element.title.toLocaleLowerCase();

        if(title.indexOf(termino) >=0){
          comicsArr.push(element);
        }
      })

      return comicsArr;
    }
    else{
      return comics;
    }
  }
}
