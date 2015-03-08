$(document).ready(function() {
        $(function() {
            $( "#datepicker" ).datepicker();
        });
        
        $(function() {
            $( ".draggable" ).draggable();
        });
        $( "#droppable" ).droppable({
            drop: function( event, ui ) {
                $( this ).attr("src","http://www.ngamers.net/public/style_images/master/icons/foros/imagen_foro_19.png");
            },
            out: function( event, ui ) {
                $( this ).attr("src","http://icdn.pro/images/es/v/a/vaciar-papelera-icono-4813-128.png");
            }
        });  
});
