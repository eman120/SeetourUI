import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormGroupQueryService {

  constructor() { }

  GetQuery(formGroup: any): Params {
    if (formGroup instanceof FormGroup<any>)
    {
      let params = {} as Params;
      for(let key in formGroup.value){
        if (formGroup.value[key])
          params[key]= formGroup.value[key];
      }
      return params;
    }
    return {}
  }
}
