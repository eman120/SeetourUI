import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { jqxSortableModule  } from 'jqwidgets-ng/jqxsortable';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DetailsComponent } from './component/details/details.component';
import { TourHomeComponent } from './component/tour-home/tour-home.component';

import { TourGuideComponent } from './component/tour-guide/tour-guide.component';
import { FormsModule,NgModel,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './component/error/error.component';
import { HeaderComponent } from './component/header/header.component';
import { UploadImageComponent } from './component/upload-image/upload-image.component';
import { UploadImagesComponent } from './component/upload-images/upload-images.component';

import { AuthInterceptorProviders } from './Middlewares/auth-interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { TourDetailsComponent } from './component/tour-details/tour-details.component';
import { AdminStatisticsComponent } from './component/admin-statistics/admin-statistics.component';
import { UserregisterComponent } from './component/userregister/userregister.component';

import { PaymentComponent } from './component/payment/payment.component';
import { AdminReviewComponent } from './component/admin-review/admin-review.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { QuestionAnswerComponent } from './component/question-answer/question-answer.component';

import { TourCardComponent } from './component/tour-card/tour-card.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { LikeButtonComponent } from './component/like-button/like-button.component';
import { TruncatePipe } from './Pipes/truncate.pipe';
import { WishListButtonComponent } from './component/wish-list-button/wish-list-button.component';
import { CreateTourComponent } from './component/create-tour/create-tour.component';
import { GoogleMapsComponent } from './component/google-maps/google-maps.component';
import { DatePipe, CommonModule } from '@angular/common';
import { ReviewCardComponent } from './component/review-card/review-card.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { TourGuideProfileComponent } from './component/tour-guide-profile/tour-guide-profile.component';
import { TourguideDashboardComponent } from './component/tourguide-dashboard/tourguide-dashboard.component';
import { TourguideHeaderComponent } from './component/tourguide-header/tourguide-header.component';
import { TourSliderComponent } from './component/tour-slider/tour-slider.component';
import { ReviewListerComponent } from './component/review-lister/review-lister.component';
import { TGReviewsComponent } from './component/tgreviews/tgreviews.component';
import { TourListerComponent } from './component/tour-lister/tour-lister.component';
import { TGProfileInfoComponent } from './component/tgprofile-info/tgprofile-info.component';
import { TGOverviewComponent } from './component/tgoverview/tgoverview.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ToursFilterComponent } from './component/tours-filter/tours-filter.component';
import { TGToursComponent } from './component/tgtours/tgtours.component';
import { ToursSectionFilterableComponent } from './component/tours-section-filterable/tours-section-filterable.component';
import { BookTourComponent } from './component/book-tour/book-tour.component';

import { NgModule } from '@angular/core';
import { AboutStartComponent } from './component/about-start/about-start.component';
import { TeamDataComponent } from './component/team-data/team-data.component';
import { OurServiceComponent } from './component/our-service/our-service.component';
import { PopularDistnationsComponent } from './component/popular-distnations/popular-distnations.component';
import { PaymentprocessHomeComponent } from './component/paymentprocess-home/paymentprocess-home.component';
import { PartialServiceHomeComponent } from './component/partial-service-home/partial-service-home.component';

import { AdminPostsRequestsComponent } from './component/admin-posts-requests/admin-posts-requests.component';
import { AdminPostRequestFormComponent } from './component/admin-post-request-form/admin-post-request-form.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminAcceptTourGuidesComponent } from './component/admin-accept-tour-guides/admin-accept-tour-guides.component';
import { AdminApplicantDetailsComponent } from './component/admin-applicant-details/admin-applicant-details.component';
import { TourGuideDetailsComponent } from './component/tour-guide-details/tour-guide-details.component';
import { CustomerHeaderComponent } from './component/customer-header/customer-header.component';

import { WishlistItemComponent } from './component/wishlist-item/wishlist-item.component';
import { CustomerWishlistComponent } from './component/customer-wishlist/customer-wishlist.component';

import { CustomerBookedToursComponent } from './component/customer-booked-tours/customer-booked-tours.component';
import { BookingSliderComponent } from './component/booking-slider/booking-slider.component';
import { CustomerReviewFormComponent } from './component/customer-review-form/customer-review-form.component';
import { CompressImagesButton } from './component/compress-images-button/compress-images-button.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerCancelBookingComponent } from './component/customer-cancel-booking/customer-cancel-booking.component';
import { BookingCardComponent } from './component/booking-card/booking-card.component';
import { CustTourDetailsComponent } from './component/cust-tour-details/cust-tour-details.component';
import { TgTourDetailsComponent } from './component/tg-tour-details/tg-tour-details.component';
import { ToursSorterComponent } from './component/tours-sorter/tours-sorter.component';

import { FavoriteButtonComponent } from './component/favorite-button/favorite-button.component';
import { CustomerFavoriteToursComponent } from './component/customer-favorite-tours/customer-favorite-tours.component';
import { TrendingToursComponent } from './component/trending-tours/trending-tours.component';
import { CustomerHomeComponent } from './component/customer-home/customer-home.component';

import { TourQuestionsAnswersComponent } from './component/tour-questions-answers/tour-questions-answers.component';
import { ManageCustomersComponent } from './component/manage-customers/manage-customers.component';
import { ManageTourguidesComponent } from './component/manage-tourguides/manage-tourguides.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    DetailsComponent,
    TourHomeComponent,
    TourGuideComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    AdminStatisticsComponent,
    TourDetailsComponent,

    UserregisterComponent,
    PaymentComponent,
    AdminReviewComponent,
    PaymentSuccessComponent,
    QuestionAnswerComponent,

    TourCardComponent,
    StarRatingComponent,
    LikeButtonComponent,
    TruncatePipe,
    WishListButtonComponent,
    UploadImageComponent,
    UploadImagesComponent,
    TourDetailsComponent,
    ReviewCardComponent,
    TourguideDashboardComponent,
    TourguideHeaderComponent,
    CreateTourComponent,
    GoogleMapsComponent,
    GalleryComponent,
    TourGuideProfileComponent,
    TourSliderComponent,
    ReviewListerComponent,
    TGReviewsComponent,
    TourListerComponent,
    TGProfileInfoComponent,
    TGOverviewComponent,
    SpinnerComponent,
    ToursFilterComponent,
    TGToursComponent,
    ToursSectionFilterableComponent,

    BookTourComponent,

    AboutStartComponent,
    TeamDataComponent,
    OurServiceComponent,
    PopularDistnationsComponent,
    PaymentprocessHomeComponent,
    PartialServiceHomeComponent,

    AdminPostsRequestsComponent,
    AdminPostRequestFormComponent,
    AdminHeaderComponent,
    AdminAcceptTourGuidesComponent,
    AdminApplicantDetailsComponent,
    TourGuideDetailsComponent,
    CustomerHeaderComponent,
    WishlistItemComponent,
    CustomerWishlistComponent,

    CustomerBookedToursComponent,
    BookingSliderComponent,
    CustomerReviewFormComponent,
    CompressImagesButton,
    CustomerCancelBookingComponent,
    BookingCardComponent,
    CustTourDetailsComponent,
    TgTourDetailsComponent,
    TourQuestionsAnswersComponent,
    ToursSorterComponent,
    FavoriteButtonComponent,
    CustomerFavoriteToursComponent,
    TrendingToursComponent,
    CustomerHomeComponent,
    ManageCustomersComponent,
    ManageTourguidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    jqxSortableModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [AuthInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
