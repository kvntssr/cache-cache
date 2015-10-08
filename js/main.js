function sync(){
  var val1 = $('#t1').val();
  var newval = val1.replace(/bombe/g, 'fleur')
                  .replace(/attentat/g,'meeting')
                  .replace(/1/g,'2');
  $('#t2').val(newval);
  console.log(val1);
}

$('#t1').keyup(function(){
  sync();
});
