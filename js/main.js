var range = undefined;
var quantity = undefined;

$(document).ready(function() {
  $('.button#next').click(function() {
    // Maybe look at the selector that isn't hidden?
    // Or something like that.
    // MAYBE PUT A MARKER ON THE CURRENT SELECTOR
    if ($('#rangeMonth').find(':selected').text() != 'Month') {
      // alert('Show dates selector for that month, lock month selector');
      $('#rangeDay').toggleClass('hidden');
      $('#back').toggleClass('hidden');
      
      // Add a back button
    };
  });
});
