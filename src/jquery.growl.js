// jQuery Growl Plugin
// version 0.1 alpha
// copyright 2011 Shane Perreault [shaneprrlt@gmail.com]
// registed under MIT License

(function($) {

    // Main Growl Method
    $.fn.growl = function(options) {
    
        // Merge Options with Defaults
        options = $.extend({}, $.fn.growl.defaults, options);
        
        // Start Constructing new growl
        growl = document.createElement('li');
        growl.innerHTML = options.message;
        
        // Start adding special settings
        if(options.class) growl.attr('class', options.class_name);
        if(options.id) growl.attr('id', options.id);
        
        // Start appending data
        if(options.fadeIn != false) {
            $(growl).hide();
            $(this).append(growl);
            $(growl).fadeIn(options.fadeIn);
        }
        else {
            $(this).append(growl);
        }
        
        // Fadeout Action
        if(options.fadeOut != false) {
        	$(growl).delay(options.fadeDelay).fadeOut(options.fadeOut);
        }
    
    };
    
    // Default Growl Properties
    $.fn.growl.defaults = {
        fadeIn: 1000,
        fadeOut: 1000,
        fadeDelay: 5000,
        message: false,
        class_name: false,
        id: false
    };

})(jQuery);