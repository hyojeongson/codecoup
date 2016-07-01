var boxLeft = $('#box-left');
var boxRight = $('#box-right');

boxLeft.css('background-color', 'orange');
boxRight.css('background-color', 'lightgrey');

boxLeft.css('float', 'left');
boxRight.css('float', 'right');

boxRight.html('<h3>image rotating functions.</h3>');
boxRight.html('<input type="radio" name="circle" id="first"/>');
boxRight.html('<input type="radio" name="circle" id="second"/>');
boxRight.html('<input type="radio" name="circle" id="third"/>');

$('#container').append(boxLeft);
$('#container').append(boxRight);
