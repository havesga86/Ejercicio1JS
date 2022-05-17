(function() {
    $("#curl").val("" + window.location.href);
  })();
  
  function getcontent() {
    $("#estado").css("background-color", "aquamarine");
    $("#estado").html('Cargando');
   
    setTimeout(funcAjax, 2000);
  
    function funcAjax() {
      $.ajax({
        url: window.location.href + 'datos.txt',
        async: false,
        success: function(data,status, xhr) {
          let headers = xhr.getAllResponseHeaders();
          $('#contenidos').append(data);
          $("#estado").css("background-color", "aquamarine");
          $("#estado").html('Completado');
          $("#headers").append(headers);
          $("#state").val(xhr.status +', '+ xhr.statusText);
        }
      });
    }
  }