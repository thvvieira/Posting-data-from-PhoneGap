
    $(function(){
        $('form').submit(function(){
            var postData = $(this).serialize();
            
            $.ajax({
                type: 'POST',
                data: postData,
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
    
