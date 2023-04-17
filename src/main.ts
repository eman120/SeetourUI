import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as $ from 'jquery';

$(window).scroll(() => {
  const scrollTop = $(window)?.scrollTop?.();
  if (scrollTop && scrollTop > 45) {
    $('.navbar').addClass('sticky-top shadow-sm');
    $('.back-to-top').css('display', 'block');
  } else {
    $('.navbar').removeClass('sticky-top shadow-sm');
    $('.back-to-top').css('display', 'none');
  }
});
$('a.back-to-top').click(function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  var target = $(this).attr('href'); // Get the href attribute of the link
  if (target === '#' || !target) { // If the href is empty or "#"
    $('html, body').animate({scrollTop: 0}, 800); // Scroll to the top of the page
  } else { // If the href is not empty or "#"
    $('html, body').animate({scrollTop: 0}, 800); // Scroll to the top of the page
  }
});

// Dropdown on mouse hover
// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

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
