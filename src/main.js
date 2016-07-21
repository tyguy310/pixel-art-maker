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

        var colorArray = [];
         function colorList(numberOfColors) {
           for (var i = 0; i < numberOfColors; i++) {
           colorArray.push('#'+Math.floor(Math.random()*16777215).toString(16));
          }
          return colorArray;
        };
colorList(6);

console.log(colorArray);
      function newPalette(colorArray) {
         var paint;
         var palette = $('.palette');
        //  var colors = ['pink', 'purple', 'LimeGreen', 'black', 'white', 'gray', 'red', 'blue']

         for (var i = 0; i < colorArray.length; i++) {
           palette.append($('<div id="paint' + colorArray[i] + '"></div>'));
           $('#' + colorArray[i]).css('background-color', colorArray[i])
         }
       }
       newPalette(colorArray);



}());
