//15 Puzzle
//INFO2180
//620084616 - Neelam Samtani
//Mona WJC
//Extra feature - End-of-game Notification

var xx = 300;
var yy = 300;
var p = [];
var clicked = false;
var ans = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

window.onload = function() {
	tiling();
	$("shufflebutton").onclick = shuffle;
};

function tiling() {
	var pos = 0;
	p = $$('#puzzlearea div');
	var x = 3;
	for (var i = 0; i < p.length; i++) {
		for (var j = 0; j <= x; j++) {
			p[i].addClassName("puzzlepiece");
			p[i].style.top = 100 * pos + "px";
			p[i].style.left = 100 * j  + "px";
			p[i].style.backgroundImage = "url('fifteen.jpg')"
			p[i].style.backgroundPosition = -j * 100 + "px " + pos * -100 + "px";
			p[i].onmouseover = function () {
				if (ismovable(this.style.left, this.style.top)) {
		this.addClassName("movablepiece");
	} else if (this.hasClassName("movablepiece")) {
		this.removeClassName("movablepiece");
	}
			};
			p[i].onclick = function() {
				movetile(this);
				//if (win) {
					//$('puzzlearea').insert({ after: "<p><center>Yay! You win!</center></p>" });
				//}
			};
			i++;
		}
		pos++;
		if (pos > 2) {
			x = 2;
		}
		i--;
	}
}	

function shuffle() {
	var a = [];
	for (var i = 0; i < 50; i++) {
		for (var j = 0; j < p.length; j++) {
			if (ismovable(p[j].style.left, p[j].style.top)) {
				a.push(p[j]);
			}
		}
		movetile(a[Math.floor(Math.random() * a.length)]);
		a = [];
	}
}

function ismovable(x, y) {
	if (yy - parseInt(y) == 100) {
		if (xx - parseInt(x) == 0) {
			return true;
		}
	}
	else if (xx - parseInt(x) == 100) {
		if (yy - parseInt(y) == 0) {
			return true;
		}
	}
	return false;
}

function movetile(tile) {
	if (ismovable(tile.style.left, tile.style.top)) {
		var temp1 = tile.style.left;
		var temp2 = tile.style.top;
		tile.style.left = xx + "px";
		tile.style.top = yy + "px";
		xx = parseInt(temp1);
		yy = parseInt(temp2);
	}
}

function win() {
	for (var i = 0; i <= p.length; i++) { 
		if (p[i] === ans[i]) {
			return true;
		}
		else {
			return false;
		}
	}
}
