import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //Aqui se hace el filtrado de la informacion segun las coincidencias segun el texto de entrada y el atributo "name"
  transform(value: any, arg: any): any {
    const resultPosts=[];
    for(const post of value){
      if(post.name.indexOf(arg)>-1){
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }
  /*transform(value: any, arg:any):any{
    const resultPosts=[];
    for(const post of value){
      if(post.name.indexOf(arg)>-1){
        resultPosts.push(post);
      }
    }
  }*/

}
