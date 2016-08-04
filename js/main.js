var range = undefined;
var quantity = undefined;
var employees = [{firstName: 'Martha', lastName: 'Griem', hours: 38.52},{firstname: 'Bruce', lastName: 'Manning', hours: 55.12}];

// an employee will be an object containing:
// Name
// - First
// - Last
// Hours Worked

function printChart() {
  for (object in employees) {
    $('#tipsChart').append('<div class="employeeRow">' +
        '<span>' + employees.i[0] + '</span>' +
        '<span>' + employees.i[1] + '</span>' +
        '<span>' + employees.i[2] + '</span>' +
        '<span>' + employees.i[3] + '</span>' +
        '<span>     </span>' +
        '</div>');
  };
};

// A function that takes a month and gives a number of days to put in the
// #rangeDay selector
function howManyDays(month) {
  // alert('How many days are in ' + month + '?');
};

$(document).ready(function() {
  $('.button#next').click(function() {
  
    beginMonth

    beginDay
    
    endMonth

    endDay
    
    // Maybe look at the selector that isn't hidden?
    // Or something like that.
    // MAYBE PUT A MARKER ON THE CURRENT SELECTOR
    /*
    var currentMonth = $('#rangeMonth').find(':selected').text();
    if (currentMonth != 'Month') {
      $('#rangeMonth').addClass('hidden');
      // INSERT A SPAN WITH THE SELECTED TEXT FROM RANGEMONTH
      $('#tipsChart').append('<span>' + currentMonth + '</span>');
      // alert('Show dates selector for that month, lock month selector');
      howManyDays(currentMonth);
      $('#rangeDay').toggleClass('hidden');
      $('#back').toggleClass('hidden');
      */
      
    };
  });
});
