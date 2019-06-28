var turns; var player = [];
function setUp() {
	for (var i = 0; i < 9; i++) {
		player[i] = -1;
	}
	turns = 0;
	document.getElementById("display").innerHTML = "<button onclick='createField();'>Are You Sure?</button>";
}
function createField() {
	document.getElementById("display").innerHTML = "<br /><span class=\"text-red\">Player 1</span>'s turn.";
	document.getElementById("field").innerHTML = "";
	for (var i = 1; i < 10; i++) {
		document.getElementById("field").innerHTML += "<div id=\"box"+i+"\" onclick=\"checkBox(\'box"+i+"\');\"></div>";
	}
}
function checkBox(box) {
	document.getElementById("display").innerHTML = "";
	boxNum = parseInt(box.substr(3), 10) - 1;
	boxLoc = document.getElementById(box);
	if (player[boxNum] == -1) {
		if (turns % 2 == 0) {
			boxLoc.className = 'red';
			player[boxNum] = 0;
			document.getElementById("display").innerHTML = "<br /><span class=\"text-blue\">Player 2</span>'s turn.";
		} else {
			boxLoc.className = 'blue';
			player[boxNum] = 1;
			document.getElementById("display").innerHTML = "<br /><span class=\"text-red\">Player 1</span>'s turn.";
		}
		if (turns >= 4) {
			for (var i = 0; i < 2; i++) {
				for (var j = 0; j < 7; j += 3)
					if (player[j] == i && player[j + 1] == i && player[j + 2] == i) {
						sayWin(i);
					}
				for (var j = 0; j < 3; j++)
					if (player[j] == i && player[j + 3] == i && player[j + 6] == i) {
						sayWin(i);
					}
				if ((player[0] == i && player[4] == i && player[8] == i) || (player[2] == i && player[4] == i && player[6] == i)) {
					sayWin(i);
				}
			}
			if (turns > 7) {
				document.getElementById("display").innerHTML = "<button onclick=\"setUp();\">Play Again?</button><br />It is a tie. You both lose equally.";
				disableClicks();
			}
		}
		turns++;
	} else {
		if (turns % 2 == 0) {
			document.getElementById("display").innerHTML += "Player " + (player[boxNum] + 1) + " already owns that box!<br /><span class=\"text-red\">Player 1</span>'s turn.";
		} else {
			document.getElementById("display").innerHTML += "Player " + (player[boxNum] + 1) + " already owns that box!<br /><span class=\"text-blue\">Player 2</span>'s turn.";
		}
	}
}
function sayWin(winner) {
	if (winner == 0) {
		document.getElementById("display").innerHTML = "<button onclick=\"setUp();\">Play Again?</button><br /><span class=\"text-red\">Player 1</span> is victorious!";
	} else {
		document.getElementById("display").innerHTML = "<button onclick=\"setUp();\">Play Again?</button><br /><span class=\"text-blue\">Player 1</span> is victorious!";
	}
	disableClicks();
}
function disableClicks() { 
	for (var i = 1; i <10; i++)
		document.getElementById("box"+i).onclick = "";
}