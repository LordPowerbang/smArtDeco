var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var stepSize = getRandomInt(20,600);
//var step = stepSize;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);


function draw(x, y, width, height){
	var leftToRight = Math.random() >= 0.5;
	context.beginPath();

	if(leftToRight){
		context.moveTo(x,y);
		context.lineTo(x + width, y + height);
	} else {
		context.moveTo(x + width, y);
		context.lineTo(x, y + height);
	}

	
	context.stroke();
	context.closePath();
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


for(var x = 0; x < size; x += step) {
		context.strokeStyle = generateRandomColor();
		var step = getRandomInt(20,600);
		var getLineWidth = getRandomInt(1, stepSize * getRandomInt(0.2, 2) );
		context.lineWidth = getLineWidth;

		function getRandomCap(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

	var linecapNum = getRandomCap(1, 3);


	if (linecapNum === 1) {

	context.lineCap = 'round';

}
	if (linecapNum === 2) {

	context.lineCap = 'butt';
	
}
	if (linecapNum === 3) {

	context.lineCap = 'square';
	
}


	for(var y = 0; y < size; y += step){
		context.strokeStyle = generateRandomColor();
		var step = getRandomInt(20,600);
		var getLineWidth = getRandomInt(1, stepSize * getRandomInt(0.2, 2) );
		context.lineWidth = getLineWidth;

		function getRandomCap(min, max) {
   			 return Math.floor(Math.random() * (max - min + 1) + min);
}

		var linecapNum = getRandomCap(1, 3);


		if (linecapNum === 1) {

		context.lineCap = 'round';

}
		if (linecapNum === 2) {

		context.lineCap = 'butt';
	
}
		if (linecapNum === 3) {

		context.lineCap = 'square';
	
}

		draw(x, y, step, step);
	}
}
