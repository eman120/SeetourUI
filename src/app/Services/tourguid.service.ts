import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class TourguidService {

  constructor(private readonly client : HttpClient) { }
  private readonly URL = "";
  BaseUrl = environment.baseUrl;

  AddNewTourGuid(tourGuid:any){
    return this.client.post(this.URL, tourGuid);
  }

  GetCurrentTourGuideInfo() {
    let url = this.BaseUrl+ApiPaths.tourguide;
    return this.client.get(url);
  }
  GetAllUnAnsweredQuestions(){
    return this.client.get(this.BaseUrl+ApiPaths.unansweredquestions);
  }
  PostAnswerForSepcifiecQues(answer:any)
  {
    return this.client.post(this.BaseUrl+ApiPaths.tganswerQusetions,answer);
  }

}
