$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("Streamer en Twitch y creador de contenido en distintas plataformas 💜💙");

  // initialize wow.js
  new WOW().init();

  // Push the body and the nav over by 285px over
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px"
        },
        200
      );

      $("body").animate(
        {
          right: "285px"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        200
      );

      $("body").animate(
        {
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        500
      );

      $("body").animate(
        {
          right: "0px"
        },
        500
      );
    });
  };

  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["NannalyPG .", "Acerca de mí .", "Juegos .", "Redes sociales .", "Contáctame ."],
    anchors: ["home", "about", "games", "social", "contact", "connect"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
        $(".header-links a").each(function () {
          $(this).css("color", "white");
        });
        $(".header-links").css("background-color", "transparent");
      } else if (index != 1) {
        $(".header-links a").each(function () {
          $(this).css("color", "black");
        });
        $(".header-links").css("background-color", "white");
      }

    }
  });

  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  //ajax form
  $(function () {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
   /*  var formMessages = $("#form-messages"); */
    
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $("#name").val("");
          $("#email").val("");
          $("#message").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");

          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });
});
 /* socials */
function move(id, position, color) {
  var tl = gsap.timeline();
  tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
    .to("#bubble1", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
    .to("#bubble2", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
    .to("#bubble3", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
    .to("#bubble4", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
    .to("#bubble5", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
    .to("#bubble6", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
    .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
    .to("#bgBubble", {duration: 0.2, left: position, ease: "ease-in-out"}, 0.1)
    .to("#bgBubble", {duration: 0.15, bottom: "-50px", ease: "ease-out"}, '-=0.2')
    .to(`#bubble${id}`, {duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out"}, '-=0.1')
    .to(`#bubble${id}> span`, {duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out"}, '-=0.1')
    .to("#navbarContainer", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
    .to("#bg", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
    .to("#bgBubble", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
}

$(document).ready(function(){
  $("#menu1").click(function(){
    $("#imgInfo").attr("src","media/FrameInsta.png");
    $("#aHref").attr("href","https://www.instagram.com/nannalypg/");
  });
  $("#menu2").click(function(){
    $("#imgInfo").attr("src","media/FrameX.png");
    $("#aHref").attr("href","https://x.com/NannalyPG");
  });
  $("#menu3").click(function(){
    $("#imgInfo").attr("src","media/FrameTik.png");
    $("#aHref").attr("href","https://www.tiktok.com/@nannalypg");
   });
  $("#menu4").click(function(){
    $("#imgInfo").attr("src","media/FrameDisc.png");
    $("#aHref").attr("href","https://discord.gg/E3AVeFjpnU");
  });
  $("#menu5").click(function(){
    $("#imgInfo").attr("src","media/FrameYou.png");
    $("#aHref").attr("href","https://www.youtube.com/channel/UCDdO_IbDWYZ5HcLMvk0W0ig");
  });
  $("#menu6").click(function(){
    $("#imgInfo").attr("src","media/FrameTwitch.png");
    $("#aHref").attr("href","https://www.twitch.tv/nannalypg");
  });

});

 /* socials */

 /* borrar y pregunta datos del formulario  */
document.addEventListener('DOMContentLoaded', function(){
  let formulario = document.getElementById('ajax-contact');
    formulario.addEventListener('submit', function() {
      formulario.reset();
      pregunta()
    });
});
function pregunta() {
  if (confirm('¿Estas seguro de enviar este mensaje?')) {
    document.getElementById('ajax-contact').submit();
  }
}

/* borrar datos del formulario  */