$(function(){

	function matrixArray(rows,columns){

  	var arr = new Array();
  	for(var i=0; i<columns; i++){
    	arr[i] = new Array();
    	for(var j=0; j<rows; j++){
      	arr[i][j] = Math.floor(Math.random() * 100);
   		}
  	}
  	return arr;
	}

	var myMatrix = matrixArray(9,9);
	console.dir(myMatrix);


  for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){
      var item = myTable.rows[i].cells[j];
      $(item).html(myMatrix[i][j]);
   	}
  }
  


  var sum = 0;
  for(var i=0; i<9; i++){
  	sum = 0;
    for(var j=0; j<9; j++){
    	if(i != j){
      sum += myMatrix[i][j] + myMatrix[j][i]
    	}
   	}
   	myMatrix[i][i]= sum;
  }

  for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){
      var item = resultTable.rows[i].cells[j];
      $(item).html(myMatrix[i][j]);
   	}
  }
  var k = 0;
  $('.my-button').click(function(){
  	$('.arrow').fadeIn('slow');
  	$(resultTable).fadeIn('slow');
  	for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){

    	k += 100;

      var item = resultTable.rows[i].cells[j];

      setTimeout(function(item){
      	return function(){
      		$(item).fadeIn('slow');
      	}
      }(item), k);
   	}
  }
  	$(this).fadeOut('slow');
  })

});