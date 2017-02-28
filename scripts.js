function drawChristmasTree(size) {

  for (var i = 0; i < size; i++) {
  var star = '';
      
    for (var j = 0; j < (size - (i + 1)) ; j++) {
         star += ' ';
    } 

    for (var j = 0; j < (i + 1) * 2 - 1; j++) {
         star += '*';
    }
    console.log(star);
  }
}

drawChristmasTree(5);