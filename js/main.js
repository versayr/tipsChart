var range = undefined;
var quantity = undefined;
var employees = [{firstName: 'Martha', lastName: 'Griem', hours: 38.52},{firstName: 'Bruce', lastName: 'Manning', hours: 55.12}];
var tips = 150.00

// an employee will be an object containing:
// Name
// - First
// - Last
// Hours Worked

function openModal() {
  $('#modal').css('display', 'block');
  $('#shade').css('display', 'block');
  $('#modalContainer').css('display', 'flex');
};

function closeModal() {
  // Remove the contents of the modal <div>
  $('#modal').css('display', 'none');
  $('#shade').css('display', 'none');
  $('#modalContainer').css('display', 'none');
};

function printChart() {
  var p,n;
  p = $('.titleRow').detach();
  n = $('.totalRow').detach();
  $('#tipsChart').empty();
  p.appendTo('#tipsChart');
  p = null;
  for (i = 0; i < employees.length; i++) {
    $('#tipsChart').append('<div class="employeeRow">' +
        '<div>' +
        '<span>' + employees[i].firstName + '</span>' +
        '</div>' +
        '<div>' +
        '<span>' + employees[i].lastName + '</span>' +
        '</div>' +
        '<div>' +
        '<span>' + employees[i].hours + '</span>' +
        '</div>' +
        '<div>' +
        '<span>' + '$' + tips + '</span>' +
        '</div>' +
        '<div>' +
        '<span>     </span>' +
        '</div>' +
        '</div>');
  };
  n.appendTo('#tipsChart');
  n = null;
};

// A function that takes a month and gives a number of days to put in the
// #rangeDay selector
function howManyDays(month) {
  // alert('How many days are in ' + month + '?');
};

$(document).ready(function() {
  $('.button#weekInfo').click(function() {
    // Insert the week info form into the modal
    openModal();
  });
  $('.button#newEmployee').click(function() {
    // Insert the employee info form into the modal <div>
    openModal();
  });
  $('.button#printChart').click(function() {
    printChart();
  });
  $('.button#submit').click(function() {
    // PUSH AN OBJECT WITH EMPLOYEE INFO INTO employees[]
    // Reset inputs in the modal
    closeModal();
  });
  $('.button#closeModal').click(function() {
    // Reset inputs in the modal
    closeModal();
  });
  // $('.button#next').click(function() {

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

  //});
});
