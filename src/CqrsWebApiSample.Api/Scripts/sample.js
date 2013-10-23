// Wraps jquery's Ajax with 5LMT implementation


(function (parent, $) {

    
    var oldAjax = $.ajax,
        contentTypeName = "Content-Type";
    
    $.ajax = function(topSettings) {
        topSettings = topSettings || {};
        var originalBeforeSend = topSettings.beforeSend;
       
        topSettings.beforeSend = function (jqXHR, settings) {
            if (originalBeforeSend)
                originalBeforeSend(jqXHR, settings);
            addFiveLevelsOfMediaType(jqXHR, settings);
        };

        oldAjax(topSettings);

    };

    function addFiveLevelsOfMediaType(jqXHR, settings) {
        if (settings.data) {            
            jqXHR.setRequestHeader(contentTypeName,
                "application/json;domain-model=" + settings.data.constructor.name);
        }
    }
    
})(window, $);



function ViewModel(name, surname) {
    this.name = name;
    this.surname = surname;
}

$("#a").click(function (ss) {
    $.ajax({
        method: "POST",
        dataType: "json",
        data: JSON.stringify(new ViewModel("ali", "Ostad"))
    });
});
