$(document).ready(function() {

    $('#new-text').on('input', function(event){ 
        let $current = $(this).val().length;
        let $counter = $(this).siblings(".counter");
        $counter.text(140 - $current);
        
        if ($counter.text() >= 0) {
            $counter.css('color', 'gray');
        }
        if ($counter.text() < 0) {
            $counter.css('color', 'red');
        }
    });

});