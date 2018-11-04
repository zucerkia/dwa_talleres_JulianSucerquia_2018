import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any): any {

    if(!images){
      return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    }

    if(images.length>0){
      // console.log(`${images[0].path}.${images[0].extension}`);
      return `${images[0].path}.${images[0].extension}`;
    }
    else{
      return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';      
    }
  }

}
