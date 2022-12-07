// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDay);
console.log(currentDay);

$(function () {
  var currentTime = dayjs().format('H');
  console.log(currentTime);
  var hourBlock = $('.row');
  hourBlock.each(function () {
    var row = parseInt($(this).attr('id'));
    console.log(Math.floor(row));
    if(currentTime > row) {
      $(this).addClass('past');
    }else if(currentTime < row) {
      $(this).addClass('future');
    }else {
      $(this).addClass('present');
    }

    $('#17 .description').val(localStorage.getItem('17'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#9 .description').val(localStorage.getItem('9'));

  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
       // saveBtn click listener 
    $(".saveBtn").on ("click", function () {
      var textOne = $(this).siblings(".description").val();
      console.log(textOne)
      var timeOne = $(this).parent().attr("id");
      console.log(timeOne)

      // Save text in local storage
      localStorage.setItem(timeOne, textOne);

      
    });

    $('.description').val(localStorage.getItem(textOne));
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
