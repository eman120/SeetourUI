import { CustomerWishlistComponent } from './component/customer-wishlist/customer-wishlist.component';
import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './component/error/error.component';
import { TourHomeComponent } from './component/tour-home/tour-home.component';
import { DetailsComponent } from './component/details/details.component';
import { HeaderComponent } from './component/header/header.component';
import { TourDetailsComponent } from './component/tour-details/tour-details.component';
import { UserregisterComponent } from './component/userregister/userregister.component';

import { AdminStatisticsComponent } from './component/admin-statistics/admin-statistics.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';

import { TourGuideProfileComponent } from './component/tour-guide-profile/tour-guide-profile.component';
import { TourGuideComponent } from './component/tour-guide/tour-guide.component';
import { TourguideDashboardComponent } from './component/tourguide-dashboard/tourguide-dashboard.component';
import { TGReviewsComponent } from './component/tgreviews/tgreviews.component';
import { TGOverviewComponent } from './component/tgoverview/tgoverview.component';
import { TGToursComponent } from './component/tgtours/tgtours.component';
import { BookTourComponent } from './component/book-tour/book-tour.component';

import { ReviewCardComponent } from './component/review-card/review-card.component';
import { AdminReportComponent } from './component/admin-report/admin-report.component';

import { OurServiceComponent } from './component/our-service/our-service.component';

import { AdminPostsRequestsComponent } from './component/admin-posts-requests/admin-posts-requests.component';

import { CreateTourComponent } from './component/create-tour/create-tour.component';

import { AdminAcceptTourGuidesComponent } from './component/admin-accept-tour-guides/admin-accept-tour-guides.component';
import { AdminApplicantDetailsComponent } from './component/admin-applicant-details/admin-applicant-details.component';

import { CustomerBookedToursComponent } from './component/customer-booked-tours/customer-booked-tours.component';
import { CustomerCancelBookingComponent } from './component/customer-cancel-booking/customer-cancel-booking.component';
import { CustTourDetailsComponent } from './component/cust-tour-details/cust-tour-details.component';
import { TgTourDetailsComponent } from './component/tg-tour-details/tg-tour-details.component';
import { WishlistItemComponent } from './component/wishlist-item/wishlist-item.component';
import { TourQuestionsAnswersComponent } from './component/tour-questions-answers/tour-questions-answers.component';

import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageTourguidesComponent } from './manage-tourguides/manage-tourguides.component';
import { QuestionAnswerComponent } from './component/question-answer/question-answer.component';
import { AdminReviewComponent } from './component/admin-review/admin-review.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "home" , component:HomeComponent},
  {path:"about" , component:AboutUsComponent},
  {path:"contact" , component:ContactUsComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"tour" , component:TourHomeComponent},
  {path:"services" , component:DetailsComponent},
  {path:"header" , component:HeaderComponent},
  {path:"QuestAns/:id" , component:TourQuestionsAnswersComponent},
  {path:"createtour",component:CreateTourComponent},
  // {path:"tourdetails/:id",component:TourDetailsComponent},
  {path:"custdetails/:id",component:CustTourDetailsComponent},
  {path:"tour/:id",component:TgTourDetailsComponent},

  {path:"payment/:id",component:PaymentComponent},

  {path:"admin-statistics",component:AdminStatisticsComponent},

  {path:"payment-success",component:PaymentSuccessComponent},
  {path:"service",component:OurServiceComponent},

  {path:"tour/create" , component:CreateTourComponent},

  {path:"bookTour/:id",component:BookTourComponent},

  {path:"tourguide/:id",component:TourGuideProfileComponent,
    children: [
      {path:"",component:TGOverviewComponent,outlet:'TGProfile'},
      {
        path:"Upcoming-Tours",
        component:TGToursComponent,
        outlet:'TGProfile',
        data: {
          state:'Upcoming',
          isCompleted: false
        }
      },
      {
        path:"Past-Tours",
        component:TGToursComponent,
        outlet:'TGProfile',
        data: {
          state:'Past',
          isCompleted: true
        }
      },
      {path:"Reviews",component:TGReviewsComponent,outlet:'TGProfile'},
    ]},

  {path:"userregister" , component:UserregisterComponent},
  {path:"dashboard" , component:TourguideDashboardComponent},

  {path:"tourguide" , component:TourGuideComponent},

  {path:"manage-customer" , component:ManageCustomersComponent},
  {path:"manage-tourguide" , component:ManageTourguidesComponent},

  {path:"question-answer",component:QuestionAnswerComponent},
  {path:"admin-review",component:AdminReviewComponent},
  //{path:"tourguide" , component:TourGuideComponent},

  //{path:"review" , component:ReviewCardComponent},
  //{path:"report" , component:AdminReportComponent},

  {path:"review" , component:ReviewCardComponent},
  {path:"report" , component:AdminReportComponent},



  {path:"admin/posts", component:AdminPostsRequestsComponent},
  {path:"admin/applicants", component:AdminAcceptTourGuidesComponent},
  {path:"admin/applicants/:id", component:AdminApplicantDetailsComponent},


  {path:"customerwishlist",component:CustomerWishlistComponent},

  {path:"customer/tour", component:CustomerBookedToursComponent},
  {path:"customer/tour/cancel", component:CustomerCancelBookingComponent},
  {path:"wishlist", component:WishlistItemComponent},

  {path:"**" , component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
