;(function($, undefined) {
  $.fn.responsiveImage = function(options) {

    var settings = $.extend({
      mobile : 400,
      phablet: 550,
      tablet : 750,
      desktop: 1000,
    }, options);

    var devices = [
      { attr: 'data-mobile' , width: settings.mobile  },
      { attr: 'data-phablet', width: settings.phablet },
      { attr: 'data-tablet' , width: settings.tablet  },
      { attr: 'data-desktop', width: settings.desktop },
    ];

    var handler = function() {
      var width = window.innerWidth;
      var num = 0;

      for (var i = devices.length; i--;) {
        if (width >= devices[i].width) {
          num = i;
          break;
        }
      }

      $('img').each(function() {
        for (var i = num; i >= 0 ; i--) {
          if ($(this).attr(devices[i].attr) === undefined) {
            continue;
          }

          if ($(this).attr(devices[i].attr) === $(this).attr('src')) {
            break;
          }

          $(this).attr('src', $(this).attr(devices[i].attr));
          break;
        }
      });
    };

    handler.apply();
    $(window).resize(handler);

  }
})(jQuery);