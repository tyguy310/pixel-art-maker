(function() {
  'use strict';

  var brush;


  // canvas creator
  function newCanvas(){
    var pixel;
    // var canvas = document.getElementById('canvas');
    var canvas = $('#canvas');
    for (var i = 0; i < 2100; i++) {
      // pixel = document.createElement('div');
      // pixel.className = 'pixel';
      // canvas.appendChild(pixel);
      canvas.append($('<div class="pixel"></div>'));
      };
    }
  newCanvas()

    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    $('#bubble').css('background-color', color);

      $('.pixel').on('click', function (e)  {
        $(this).css('background-color', color);
      });

      $('#bubble').on('click', function () {
        color = '#'+Math.floor(Math.random()*16777215).toString(16);
        $(this).css('background-color', color)
      });



// var bubble;

  // function newPalette(colors){
  //
  //
  //   var palette = $('#palette');
  //   for (var i = 0; i < colors; i++) {
  //     palette.append($('<div id="bubble"</div>'));
  //   }
  // }
  // newPalette(colorNumbers)

  var colorArray = [];
   function colorList(numberOfColors) {
     for (var i = 0; i < numberOfColors; i++) {
     colorArray.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
    return colorArray;
  };
// console.log(colorList(colorNumbers));

var colorNumbers = 6

}());
