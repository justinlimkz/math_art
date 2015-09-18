//Sierpinski carpet

var c = document.getElementById("C");
var ctx = c.getContext("2d");

var cur = 729;
var limit = 729;
while (cur > 2) {
	cur /= 3;
	for (i = cur; i < limit; i += 3*cur) {
		for (j = cur; j < limit; j += 3*cur) {
			ctx.fillRect(i, j, cur, cur);
		} 
	}
}

//Sierpinki triangle

var c = document.getElementById("C1");
var ctx = c.getContext("2d");
var arr = new Array(1000);
arr[0] = 1;

for (i = 0; i < 1000; i++) {
	for (j = 0; j < i; j++) {
		if (j == 0 || j == i-1) {
			ctx.fillRect(j, i, 1, 1);
		}
		else if (arr[j-1]+arr[j] == 1) {
			ctx.fillRect(j, i, 1, 1);
		}
	}
	for (j = 0; j < i; j++) {
		if (j == 0 || j == i-1) {
			arr[j] = 1;
		}
		else if (arr[j-1]+arr[j] == 1) {
			arr[j] = 1;
		}
		else arr[j] = 0;
	}
}

//Mandelbrot set from -2 to 2, both dimensions

var c = document.getElementById("C2");
var ctx = c.getContext("2d");

function next(c1, c2, z1, z2) {
	var tmp1 = c1*c1-c2*c2;
	var tmp2 = 2*c1*c2;
	tmp1 = tmp1 + z1;
	tmp2 = tmp2 + z2;
	return [tmp1, tmp2];
}
function dist(c1, c2) {
	return c1*c1+c2*c2;
}

var scale = 250;

for (i = -500; i < 500; i += 1) for (j = -500; j < 500; j += 1) {
	var z1 = i/scale, z2 = j/scale;
	var cur1 = i/scale, cur2 = j/scale;
	var flag = 0;
	for (k = 0; k < 100; k++) {
		if (dist(cur1, cur2) > 4) {
			flag = 1;
			break;
		}
		var tm = next(cur1, cur2, z1, z2);
		cur1 = tm[0];
		cur2 = tm[1];
	}
	if (flag == 0) {
		ctx.fillRect(500+i, 500+j, 1, 1);
	}
}

//Fibonacci spiral

var c = document.getElementById("C3");
var ctx = c.getContext("2d");

var curx = 500, cury = 500;
var fib1 = 1, fib2 = 0;

for (i = 0; i < 20; i++) { //i = 0 is right
    ctx.beginPath();
    var x, y, radius, startAngle, endAngle, counterClockwise;
    var topx, topy;
    counterClockwise = true;
    radius = fib1;
    
    //switching curve direction
	if (i%4 == 0) {
		x = curx+fib1;
		y = cury;
		startAngle = Math.PI;
		endAngle = 0.5 * Math.PI;
		topx = curx;
		topy = cury;
		curx = curx+fib1;
		cury = cury+fib1;
	}
	if (i%4 == 1) {
		x = curx;
		y = cury-fib1;
		startAngle = 0.5 * Math.PI;
		endAngle = 0;
		topx = curx;
		topy = cury-fib1;
		curx = curx+fib1;
		cury = cury-fib1;
	}
	if (i%4 == 2) {
		x = curx-fib1;
		y = cury;
		startAngle = 0;
		endAngle = 1.5 * Math.PI;
		topx = curx-fib1;
		topy = cury-fib1;
		curx = curx-fib1;
		cury = cury-fib1;
	}
	if (i%4 == 3) {
		x = curx;
		y = cury+fib1;
		startAngle = 1.5 * Math.PI;
		endAngle = Math.PI;
		topx = curx-fib1;
		topy = cury;
		curx = curx-fib1;
		cury = cury+fib1;
	}

	ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	ctx.lineWidth = 1;

	ctx.strokeStyle = 'black';
	ctx.stroke();
	
	//squares corresponding to Fibonacci numbers 
	ctx.beginPath();
	ctx.rect(topx, topy, fib1, fib1);
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.stroke();
	
	//next Fibonacci number
	var fib = fib1+fib2;
	fib2 = fib1;
	fib1 = fib;
}

//trash code
/*
for (i = 0; i < 10; i++) {
	if (i%2 == 0) ctx.fillStyle = "#FF0000";
	else ctx.fillStyle = "#FFFF00";
	ctx.fillRect(10*i, 10*i, 1000-20*i, 1000-20*i);
}
*/