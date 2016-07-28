var range = undefined;
var quantity = undefined;

// A function that takes a month and gives a number of days to put in the
// #rangeDay selector
function howManyDays(month) {
  alert('How many days are in ' + month + '?');
};

$(document).ready(function() {
  $('.button#next').click(function() {
    // Maybe look at the selector that isn't hidden?
    // Or something like that.
    // MAYBE PUT A MARKER ON THE CURRENT SELECTOR
    if ($('#rangeMonth').find(':selected').text() != 'Month') {
      // alert('Show dates selector for that month, lock month selector');
      howManyDays($('#rangeMonth').find(':selected').text());
      $('#rangeDay').toggleClass('hidden');
      $('#back').toggleClass('hidden');
      
      // Add a back button
    };
  });
});
