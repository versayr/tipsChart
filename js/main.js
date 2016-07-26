var range = undefined;
var quantity = undefined;

$(document).ready(function() {
  $('.button#next').click(function() {
    range = $('input#range').val();
    quantity = $('input#quantity').val();
    console.log('Range is ' + range);
    console.log('Quantity is ' + quantity);
  });
});
