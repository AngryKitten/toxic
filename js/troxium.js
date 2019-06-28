let fwf = 0;
let fhf = 0;
let fxf = 0;
let fof = 0;
let fif = 0;
let fcf = 0;

function next() {
	location.href = '../index.html?variable=tf';
}

function addClick(id, assignment) {
	document.getElementById(id).addEventListener('click', assignment);
}

function removeClick(id) {
	document.getElementById(id).removeAttribute("onclick");
}

function checkFof() {
	if (fof == 3) {
		document.getElementById("hang").innerHTML =
		`<div id='hang-side'>
			<div class='hang-line'>|</div>
			<div class='hang-line'>|</div>
			<div class='hang-line'>|</div>
			<div id='hang-person'>
				<div id='hang-items'>
					<div class='hang-item'>O</div>
					<div class='hang-item'>\/\\\\</div>
					<div class='hang-item'>\\\\</div>
					<div class='hang-item'>&nbsp;``</div>
				</div>
			</div>
		</div>
		${document.getElementById("hang").innerHTML}`;
		document.getElementById("outro").innerHTML = "help";
	}
}

function checkFall() {
	if (fhf == 4 && fxf == 1 && fof == 3 && fif == 1 && fcf == 1) {
		document.getElementById("outro").innerHTML = 'Would you like to <span onclick="next();">leave</span>?';
	}
}

function checkCin() {
	if (document.getElementById("cin").value == 666) {
		document.getElementById("crypt").style.display = "none";
		fcf = 1;
	}
}

function flicker() {
	document.getElementById("fw").style.color = "firebrick";
	setTimeout(function () {
		document.getElementById("fw").style.color = "black";
	}, 100);
}

function execFlicker() {
	if (fwf == 0) {
		flicker();
		setTimeout(function () {
			execFlicker();
		}, 5000);
	}
}

function startFlicker() {
	setTimeout(function () {
		execFlicker();
	}, 1000);
}

function fw() {
	fwf = 1;
	document.getElementById("body").style.background = "black";
	document.getElementById("welcome").style.color = "white";
	document.getElementById("fw").style.color = "white";
	if (fxf == 0) {
		document.getElementById("fx").style.color = "firebrick";
	} else {
		document.getElementById("fx").style.color = "white";
	}
	if (fif == 1) {
		document.getElementById("cin").style.background = "white";
	}
	checkFall();
	setTimeout(function () {
		document.getElementById("body").style.background = "white";
		document.getElementById("welcome").style.color = "black";
		document.getElementById("fw").style.color = "black";
		document.getElementById("fx").style.color = "black";
		if (fif == 1) {
			document.getElementById("cin").style.background = "black";
		}
	}, 1000);
}

function fe() {
	if (fhf == 1) {
		fhf = 2;
		removeClick("fe1");
		removeClick("fe2");
		removeClick("fe3");
	}
}

function fl() {
	if (fhf == 2) {
		fhf = 3;
		removeClick("fl1");
		removeClick("fl2");
	}
}

function fl1() {
	document.getElementById("fp1").removeAttribute("hidden");
}

function fp() {
	if (fhf == 3) {
		fhf = 4;
		document.getElementById("h").className = "red";
		document.getElementById("f").innerHTML = "";
		document.getElementById("outro").innerHTML = "";
		document.getElementById("fp1").innerHTML = "";
		document.getElementById("fp2").innerHTML = "";
		if (fif == 0) {
			document.getElementById("fi").style.color = "firebrick";
		}
	}
}

function fo1() {
	if (fxf == 1) {
		fof++;
		removeClick("fo1");
		checkFof();
	}
}

function fo2() {
	if (fxf == 1) {
		fof++;
		removeClick("fo2");
		checkFof();
	}
}

function fh() {
	if (fhf == 0 && fof == 3) {
		fhf = 1;
		removeClick("fh");
	}
}

function fo3() {
	if (fxf == 1) {
		fof++;
		removeClick("fo3");
		checkFof();
	}
}

function fl2() {
	document.getElementById("fp2").removeAttribute("hidden");
}

function fi1() {
	if (fhf == 4) {
		document.getElementById("fi").innerHTML = "w";
		document.getElementById("fi").onclick = function () {
			fi2();
		}
	}
}

function fi2() {
	document.getElementById("fi").innerHTML = "a";
	document.getElementById("fi").onclick = function () {
		fi3();
	}
}

function fi3() {
	document.getElementById("fi").innerHTML = "n";
	document.getElementById("fi").onclick = function () {
		fi4();
	}
}

function fi4() {
	document.getElementById("fi").innerHTML = "t";
	document.getElementById("fi").onclick = function () {
		fi5();
	}
}

function fi5() {
	document.getElementById("fi").innerHTML = "t";
	document.getElementById("fi").onclick = function () {
		fi6();
	}
}

function fi6() {
	document.getElementById("fi").innerHTML = "o";
	document.getElementById("fi").onclick = function () {
		fi7();
	}
}

function fi7() {
	document.getElementById("fi").innerHTML = "l";
	document.getElementById("fi").onclick = function () {
		fi8();
	}
}

function fi8() {
	document.getElementById("fi").innerHTML = "e";
	document.getElementById("fi").onclick = function () {
		fi9();
	}
}

function fi9() {
	document.getElementById("fi").innerHTML = "a";
	document.getElementById("fi").onclick = function () {
		fi10();
	}
}

function fi10() {
	document.getElementById("fi").innerHTML = "v";
	document.getElementById("fi").onclick = function () {
		fi11();
	}
}

function fi11() {
	document.getElementById("fi").innerHTML = "e";
	document.getElementById("fi").onclick = function () {
		document.getElementById("fi").innerHTML = "i";
		document.getElementById("fi").style.color = "black";
		document.getElementById("e").innerHTML = "";
		document.getElementById("y").className = "red";
		document.getElementById("tt").innerHTML = "666";
		document.getElementById("crypt").innerHTML = "<input type='text' id='cin'>";
		document.getElementById("cin").addEventListener("keyup", checkCin);
		fif = 1;
		removeClick("fi");
	}
}

function fx() {
	document.getElementById("intro").innerHTML =
	`<div id='hang'>
		<div id='hang-top'>__________</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div class='hang-middle'>|</div>
		<div id='hang-bottom'>____________________</div>
	</div>
	${document.getElementById("intro").innerHTML}`;
	document.getElementById("fx").innerHTML = "<span id='tt' class='tiny-text'>ooo</span>";
	fxf = 1;
	removeClick("fx");
}

startFlicker();
