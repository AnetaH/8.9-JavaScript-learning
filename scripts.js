function drawChristmasTree(size) {
  for (var i = 0; i < size; i++) {
    var line = '';
      
    for (var j = 0; j < (size - (i + 1)) ; j++) {
         line += ' ';
    } 

    for (var j = 0; j < (i + 1) * 2 - 1; j++) {
         line += '*';
    }
    console.log(line);
  }
}

drawChristmasTree(5);