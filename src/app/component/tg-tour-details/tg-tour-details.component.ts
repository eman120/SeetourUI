import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from 'src/app/Services/tours.service';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tg-tour-details',
  templateUrl: './tg-tour-details.component.html',
  styleUrls: ['./tg-tour-details.component.css']
})
export class TgTourDetailsComponent implements OnInit{
  constructor(
    private toastr: ToastrService,
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {}

  Photos: any[]=[];
  Urls: any[]=[];
  tourById:any;
  @Input() tour:any;
  checkForTour:any;
  // flag = this.Photos.length > 0;

  ngOnInit(): void {
    this.tourById = this.route.snapshot.paramMap.get('id');
    this.checkForTour =this.tour? new Date(this.tour.dateTo) < new Date():false;
  }

  get isFormValid(): boolean {
    return !!this.Photos;
  }

  onSubmit(){
    // const requestBody = {
    //   tourid: Number(this.tourById),
    //   photoDtos: this.Photos
    // };
    this.http.post(environment.baseUrl+ "" + ApiPaths.tour + ApiPaths.pics, this.Photos).subscribe(
      response => {
        //console.log('Answer submitted successfully');
        console.log(this.Urls);

        this.tour.photos =this.tour.photos.concat( this.Urls.map(url =>{
          return url.url;
        }));
        console.log(this.tour.photos);
        this.toastr.success('uploaded successfully');
        this.Photos = [];
        this.Urls = [];
      }, error => {
        //console.log('Error occurred during uploading.');
        console.error(error);
        //console.log(error.status);
        //console.log(error.statusText);
        //console.log(error.error);
        //console.log(this.Photos);
      });
  }
}
