$( document ).ready(function() {
    /*$('#dogModal').on('show.bs.modal',function(e){
        console.log('works');

    });*/

    $('#sec_2').on('click','.dogLink',function(){
        var dogLink = $(this); // the specific dog link that was clicked

        // var photo = dogLink.data('photo');
        // $('#dogModal img').html(photo);


        var dogName = dogLink.data('dog');
        $('#dogModal h2#dogName').html(dogName);

        var akc = dogLink.data('akc');
        $('#dogModal #akc h4').html(akc);

        var ukc = dogLink.data('ukc');
        $('#dogModal #ukc h4').html(ukc);

        var dob = dogLink.data('dob');
        $('#dogModal #dob h4').html(dob);

        var color = dogLink.data('color');
        $('#dogModal #color h4').html(color);

        var ofa = dogLink.data('ofa');
        $('#dogModal #ofa h4').html(ofa);

        var cerf = dogLink.data('cerf');
        $('#dogModal #cerf h4').html(cerf);

        var cnm = dogLink.data('cnm');
        $('#dogModal #cnm h4').html(cnm);

        var info = dogLink.data('info');
        $('.modal-body p').html(info);



     });
});
