import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGroupQueryService {

  constructor() { }

  GetQuery(formGroup: any): string {
    if (formGroup instanceof FormGroup<any>)
    {
      let params = new URLSearchParams();
      for(let key in formGroup.value){
        if (formGroup.value[key])
          params.set(key, formGroup.value[key]);
      }
      return params.toString();
    }
    return ""
  }
}
