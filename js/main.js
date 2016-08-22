var range = undefined;
var quantity = undefined;
var employees = [];
var tipSum = 1000;
var tipAvg, totalHours = 0;

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

function setModal() {
  // This function inserts the HTML associated with a certain modal function
  // into the #modal <div> and sets the buttons in the modal to do the relevant
  // things when clicked
  // A BETTER SOLUTION MAY BE TO MAKE SEVERAL MODALS AND HAVE CLASS-BASED 
  // ACCESS/FUNCTIONS TO USE THEM? IDK
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
  tipAvg = 0;
  totalHours = 0;
  for (i = 0; i < employees.length; i++) {
    totalHours = totalHours + employees[i].hoursWorked;
  };
  tipAvg = tipSum / totalHours;
  // Loop through the employees array, adding the hours up, then dividing the
  // tips pool by the total hours worked
  // Spits out the tips/hours number
  // Adds a tipsEarned value to each employee in the array
};

function printChart() {
  // Saves the title and total row, so the chart can be wiped clean, filled,
  // and then the title and total rows are replaced
  var p,n,roundedTipSum,tipsEarned;
  p = $('.titleRow').detach();
  n = $('.totalRow').detach();
  // Empties the chart
  $('#tipsChart').empty();
  p.appendTo('#tipsChart');
  p = null;

  // Prints lines in the chart with a loop grabbing info from each employee in
  // the employees[] array.
  for (i = 0; i < employees.length; i++) {
    roundedTipSum = 0;
    tipsEarned = 0;
    tipsEarned = employees[i].hoursWorked * tipAvg;
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
        '<span>' + '$' + Math.floor(tipsEarned) + '</span>' +
        '</div>' +
        '<div>' +
        '<span>     </span>' +
        '</div>' +
        '</div>');
    roundedTipSum = roundedTipSum + Math.floor(tipsEarned);
  };

  // Replaces the total row at the end of the chart
  n.appendTo('#tipsChart');
  n = null;

  // Prints the sum of all the distributed tips
  // THIS SHOULD BE LESS THAN OR EQUAL TO THE TIPS POOL
  $('.totalRow #totalTips').text('$' + roundedTipSum);
};

// A function that takes a month and gives a number of days to put in the
// #rangeDay selector
function howManyDays(month) {
  // alert('How many days are in ' + month + '?');
};

$(document).ready(function() {
  $('.button#weekInfo').click(function() {
    // Insert the week info form into the modal
    setModal('weekInfo');
    alert('Gotta get the modal to do this one too, idiot!');
    // openModal();
  });
  $('.button#newEmployee').click(function() {
    // Insert the employee info form into the modal <div>
    setModal('newEmployee');
    openModal();
  });
  $('.button#printChart').click(function() {
    calculateTips();
    printChart();
  });
  $('.button#chartNotes').click(function() {
    setModal('chartNotes');
    alert('Gotta get the modal to do this one too, idiot!');
    // open Modal();
  });
  $('.button#submit').click(function() {
    // PUSH AN OBJECT WITH EMPLOYEE INFO INTO employees[]
    // Reset inputs in the modal

    var firstName = $('input.firstName').val();
    var lastName = $('input.lastName').val();
    var hoursWorked = parseFloat($('input.hoursWorked').val());

    var p = new Employee(firstName, lastName, hoursWorked);
    employees.push(p);
    p = null;

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
