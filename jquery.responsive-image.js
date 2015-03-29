;(function($, undefined) {
  var mobile = 400, phablet = 550, tablet = 750, desktop = 1000;
  var devices = ['data-mobile', 'data-phablet', 'data-tablet', 'data-desktop'];
  var sizes = [mobile, phablet, tablet, desktop];

  var handler = function() {
    var width = window.innerWidth;
    var num = 0;

    for (var i = sizes.length; i--;) {
      if (width >= sizes[i]) {
        num = i;
        break;
      }
    }

    $('img').each(function() {
      for (var i = num; i >= 0 ; i--) {
        if ($(this).attr(devices[i]) === undefined) {
          continue;
        }

        if ($(this).attr(devices[i]) === $(this).attr('src')) {
          break;
        }

        $(this).attr('src', $(this).attr(devices[i]));
        break;
      }
    });
  };

  handler.apply();
  $(window).resize(handler);

})(jQuery);