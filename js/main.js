var range = undefined;
var quantity = undefined;
var employees = [];
var tips = 150;
var tipSum = undefined;

// an employee will be an object containing:
// Name
// - First
// - Last
// Hours Worked

function Employee(firstName, lastName, hoursWorked) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.hoursWorked = hoursWorked;
};

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

function calculateTips() {

};

function printChart() {
  // Saves the title and total row, so the chart can be wiped clean, filled,
  // and then the title and total rows are replaced
  var p,n;
  p = $('.titleRow').detach();
  n = $('.totalRow').detach();
  // Empties the chart
  $('#tipsChart').empty();
  p.appendTo('#tipsChart');
  p = null;

  // Prints lines in the chart with a loop grabbing info from each employee in
  // the employees[] array.
  for (i = 0; i < employees.length; i++) {
    $('#tipsChart').append('<div class="employeeRow">' +
        '<div>' +
        '<span>' + employees[i].firstName + '</span>' +
        '</div>' +
        '<div>' +
        '<span>' + employees[i].lastName + '</span>' +
        '</div>' +
        '<div>' +
        '<span>' + employees[i].hoursWorked + '</span>' +
        '</div>' +
        '<div>' +
        '<span>' + '$' + tips + '</span>' +
        '</div>' +
        '<div>' +
        '<span>     </span>' +
        '</div>' +
        '</div>');
  };

  // Replaces the total row at the end of the chart
  n.appendTo('#tipsChart');
  n = null;

  // Prints the sum of all the distributed tips
  // THIS SHOULD BE LESS THAN OR EQUAL TO THE TIPS POOL
  $('.totalRow #totalTips').text('$' + tipsSum);
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
    calculateTips();
    printChart();
  });
  $('.button#submit').click(function() {
    // PUSH AN OBJECT WITH EMPLOYEE INFO INTO employees[]
    // Reset inputs in the modal

    var firstName = $('input.firstName').val();
    var lastName = $('input.lastName').val();
    var hoursWorked = $('input.hoursWorked').val();

    var p = new Employee(firstName, lastName, hoursWorked);
    employees.push(p);
    p = null;

    console.log(firstName + ' ' + lastName + ' worked ' + hoursWorked + ' hours.');
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
