window.onload = deviceready();
$(document).bind('deviceready', function(){
    $(function(){
        $('form').submit(function(){
            var landmarkID = $(this).parent().attr('data-landmark-id');
            var postData = $(this).serialize();
            
            $.ajax({
                type: 'POST',
                data: postData+'&lid='+landmarkID,
                //change the url for your project
                url: 'http://teasolutions.com.br/save.php',
                success: function(data){
                    console.log(data);
                    alert('Mensagem enviada.');
                },
                error: function(){
                    console.log(data);
                    alert('Ocorreu um erro.');
                }
            });
            
            return false;
        });
    });
});
