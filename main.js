$(document).ready(function() {
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function (data, stato)
      {
        console.log(data.response);
        var dischi = data.response;
        console.log(dischi);
        for (var i = 0; i < dischi.length; i++) {
          var disco = dischi[i];
          console.log(disco);
          var source = $('.handlebar').html();
          console.log(source);

          var template = Handlebars.compile(source);

          var context = disco;
          var html = template(context);

          $('.cds-container').append(html);



        }
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    }
  );


});
