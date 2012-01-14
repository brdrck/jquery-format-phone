// format-phone-input
(function($) {
  function format(e) {
    var input = $(this)
    var digits = input.val().replace(/[^\d]/g, '');
        
    if (e.which == 17 || e.which == 18 || e.which == 91) {
          return;
    }
    
    
    if ((digits.length > 3 && digits.length <= 6)) {
      var prefix = digits.substring(0, 3);
      var rest = digits.substring(3, digits.length);
      return input.val(prefix + '-' + rest);
    } else if (digits.length > 6 && digits.length <= 10) {
      var areaCode = digits.substring(0, 3);
      var prefix = digits.substring(3, 6);
      var rest = digits.substring(6, digits.length)
      return input.val('(' + areaCode + ') ' + prefix + '-' + rest);
    } else {
    	return input.val(digits);
    }

    return;
  }

  $.fn.formatsPhone = function() {
    this.bind('keyup', format);
  };
})(jQuery);