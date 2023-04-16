import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as $ from 'jquery';

$(window).scroll(() => {
  const scrollTop = $(window)?.scrollTop?.();
  if (scrollTop && scrollTop > 45) {
    $('.navbar').addClass('sticky-top shadow-sm');
  } else {
    $('.navbar').removeClass('sticky-top shadow-sm');
  }
});

// Dropdown on mouse hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

// $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 992px)").matches) {
//         $dropdown.hover(
//         function() {
//           debugger
//             const $this = $(this);
//             $this.addClass(showClass);
//             $this.find($dropdownToggle).attr("aria-expanded", "true");
//             $this.find($dropdownMenu).addClass(showClass);
//         },
//         function() {
//           debugger
//             const $this = $(this);
//             $this.removeClass(showClass);
//             $this.find($dropdownToggle).attr("aria-expanded", "false");
//             $this.find($dropdownMenu).removeClass(showClass);
//         }
//         );
//     } else {
//         $dropdown.off("mouseenter mouseleave");
//     }
// });


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
