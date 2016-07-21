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
      var color = '#'+Math.floor(Math.random()*16777215).toString(16);
      canvas.append($('<div class="pixel"></div>').css('background-color', color));
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

        var colorArray = [];
         function colorList(numberOfColors) {
           for (var i = 0; i < numberOfColors; i++) {
           colorArray.push('#'+Math.floor(Math.random()*16777215).toString(16));
          }
          return colorArray;
        };
colorList(6);

console.log(colorArray);

      function newPallate(colors) {
    var paint;
    var pallete = $('#pallete');

    for (var i = 0; i < colors.length; i++) {
var color = '#'+Math.floor(Math.random()*16777215).toString(16);

      pallete.append($('<div class="paint ' + colors[i] + '"></div>'));
      $('.' + colors[i]).css('background-color',color)
    }
  }
  newPallate(colorArray)


}());
