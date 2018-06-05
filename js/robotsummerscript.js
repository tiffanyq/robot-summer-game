/* keeping track of current electron, current question and game score */
tracking = {
currentElectron: "",
currentQuestion: 1,
electronAnimationNum: 12,
currentDetail: "",
atGameEnd: false,
mech_score: 0,
elec_score: 0,
soft_score: 0,
acad_score: 0
};

// on load, add event listeners for mousein and mouseout
// add event listeners for game play click
window.addEventListener("load", function(event) {
	var items = document.getElementsByClassName("map-group"),
	startButton = document.getElementById("start-icon"),
	choice1 = document.getElementById("choice1"),
	choice2 = document.getElementById("choice2"),
	restartButton = document.getElementById("restart-button");

	for (var i=0; i<items.length; i++) {
  	items[i].addEventListener('mouseover', hoverLabelChange, false);
  	items[i].addEventListener('mouseout', hoverLabelChange, false);
  	items[i].addEventListener('click', showDetails, false);
  	}
  	
  	startButton.addEventListener('click', startGame, false);
  	choice1.addEventListener('click', recordChoice, false);
  	choice2.addEventListener('click', recordChoice, false);
  	restartButton.addEventListener('click', restartGame, false); 	


	window.addEventListener("click", function(e) {
		var backstory = document.getElementById('backstory');
		if (e.target != backstory && e.target != document.getElementById("backstory-text") && 
			e.target.className != "map-item" && e.target.className != "on-label" && backstory.style.display == "block") {
	        backstory.style.display = "none";
	    }
	});

 });


function hoverLabelChange(e) {
	var item = e.target.parentNode;
	if (e.type == "mouseover") {
		switchLabelOn(item);
	} else {
		switchLabelOff(item);
	}
}
  
/* turns label orange */
function switchLabelOn(item) {
	var label_purple = item.getElementsByClassName("off-label")[0];
	var label_orange = item.getElementsByClassName("on-label")[0];
	label_purple.style.display = "none";
	label_orange.style.display = "block";
}

/* turns label purple */
function switchLabelOff(item) {
	var label_purple = item.getElementsByClassName("off-label")[0];
	var label_orange = item.getElementsByClassName("on-label")[0];
	label_orange.style.display = "none";
	label_purple.style.display = "block";
}

/* shows more details behind the selected graphic */
function showDetails(e) {
	var item = e.target.parentNode;
	var textBox = document.getElementById("backstory");
	var itemName = item.id.split("-")[0];
	if (itemName == tracking.currentDetail && document.getElementById("backstory").style.display == "block") {
		hideDetailsBox();
	} else {
	tracking.currentDetail = itemName;
	var textToDisplay = backstory[itemName];
	showDetailsBox(textToDisplay);
	}
}

function hideDetailsBox() {
	var box = document.getElementById("backstory");
	box.style.display = "none";
}

function showDetailsBox(text) {
	var box = document.getElementById("backstory-text");
	box.innerText = text;
	box.parentNode.style.display = "block";
}

/* starts game when "play" button is clicked */
function startGame(e) {
	var startMenu = e.target.parentNode;
	var gamePlayArea = document.getElementById("game-play");
	startMenu.style.display = "none";
	gamePlayArea.style.display = "block";
	for (var i = 1; i <= Object.keys(q_images).length; i++) {
		hideItem(q_images['q'+i]['id']);
	}
	changeQuestion();
}

/* receives item's id and hides it */
function hideItem(item) {
	var itemToHide = document.getElementById(item);
	itemToHide.style.display = "none";
}

/* receives item's id and reveals it */
function revealItem(item) {
	var itemToReveal = document.getElementById(item);
	itemToReveal.style.display = "block";
}

/* displays the electron associated with the passed-in item
around from place to place */
function switchElectron(item) {
	var electronToShow = item.getElementsByClassName('map-electron')[0];
	revealElectron(electronToShow);
	if (tracking.currentElectron != "") {
		var electronToHide = document.getElementById(tracking.currentElectron);
		hideElectron(electronToHide);
	}
	tracking.currentElectron = electronToShow.id;
}

function revealElectron(electron) {
	electron.style.display = "block";
}

function hideElectron(electron) {
	electron.style.display = "none";
}

/* changes question contents: img, descrip, choices */
function changeQuestion() {
var img = document.getElementById("q-image"),
	description = document.getElementById("q-description"),
	choice1 = document.getElementById("choice1"),
	choice2 = document.getElementById("choice2"),
	questionCount = tracking.currentQuestion;

	
	// replace the page's displayed content with next question's stuff
	var questionNumber = "q" + questionCount;
	img.src = "svg/"+q_images[questionNumber]['img'];
	description.innerText = q_descriptions[questionNumber];
	revealItem(q_images[questionNumber]['id']);
	switchElectron(document.getElementById(q_images[questionNumber]['id']));
	
	var desiredObject = q_choices[questionNumber];
	choice1.innerText = desiredObject.choice1.text;
	choice2.innerText = desiredObject.choice2.text;
}

/* records choice and advances question by calling changeQuestion()
or changeResults() if all the questions have been answered */
function recordChoice(e) {
if (e.target.id == "select-1" || e.target.id == "select-2") {
var selection = e.target.parentNode;
} else {
var selection = e.target;
}
var choiceNumber = selection.id;
var questionNumber = "q" + tracking.currentQuestion;

var desiredQuestion = q_choices[questionNumber];
var desiredChoice = desiredQuestion[choiceNumber];
var category = desiredChoice["category"];
incrementScore(category);

	// increment question count
	tracking.currentQuestion++;
	if (tracking.currentQuestion >= Object.keys(q_images).length + 1) {
	showResults();
	} else {
	changeQuestion();
	}
	// optional console log statements
	console.log("---------")
	console.log("surprise!")
	console.log("mech: " + tracking.mech_score);
	console.log("elec: " + tracking.elec_score);
	console.log("soft: " + tracking.soft_score);
	console.log("acad: " + tracking.acad_score);
}

/*increments score depending on selection*/
function incrementScore(category) {
	if (category == "mech") {tracking.mech_score++;}
	else if (category == "elec") {tracking.elec_score++;}
	else if (category == "soft") {tracking.soft_score++;}
	else if (category == "acad") {tracking.acad_score++;}
}

/* displays the correct results */
function showResults() {
	var resultToShow = determineWinner();
	var jobDescription = document.getElementById("job-description");
	var jobTitle = document.getElementById("job-title");
	var restartMenu= document.getElementById("game-end");
	var gamePlayArea = document.getElementById("game-play");
	jobDescription.innerText = job_descriptions[resultToShow];
	jobTitle.innerText = job_titles[resultToShow];
	restartMenu.style.display = "block";
	gamePlayArea.style.display = "none";
	tracking.atGameEnd = true;
	electronAnimationSequence();
}

function electronAnimationSequence() {
	setTimeout(function () { 
      if (tracking.atGameEnd) {
      	  var totalItems = Object.keys(q_images).length;
      	  var num = tracking.electronAnimationNum;
	      var i = num%totalItems+1;
	      var j = (num-1)%totalItems+1;
	    
	      var item = document.getElementById(q_images['q'+i]['id']);
	      var prevItem = document.getElementById(q_images['q'+j]['id']);
		  switchElectron(item);
		  switchLabelOn(item);
		  switchLabelOff(prevItem);
		  tracking.electronAnimationNum++;
	      if (tracking.atGameEnd) {       
	         electronAnimationSequence();      
	      } 
      }                    
   }, 750);
}

/* restarts game when you press the restart button;
resets score and question counts */
function restartGame(e) {
	tracking.currentQuestion = 1;
	tracking.mech_score = 0;
	tracking.elec_score = 0;
	tracking.soft_score = 0;
	tracking.acad_score = 0;
	tracking.atGameEnd = false;
	var i = ((tracking.electronAnimationNum-1) % Object.keys(q_images).length)+1;
	var item = document.getElementById(q_images['q'+i]['id']);
	var electronToHide = item.getElementsByClassName('map-electron')[0];
	switchLabelOff(item);
	hideElectron(electronToHide);

	tracking.electronAnimationNum = 12;

	var restartMenu= e.target.parentNode;
	var startMenu = document.getElementById("game-start");
	var gamePlayArea = document.getElementById("game-play");
	
	restartMenu.style.display = "none";
	gamePlayArea.style.display = "none";
	startMenu.style.display = "block";

	for (var i = 1; i <= Object.keys(q_images).length; i++) {
		var item = document.getElementById(q_images['q'+i]['id']);
		var electronToHide = item.getElementsByClassName('map-electron')[0];
		hideElectron(electronToHide);
	
	}
	tracking.currentElectron = "";
}

/* determines which result to display */
function determineWinner() {
	var mech = tracking.mech_score,
		elec = tracking.elec_score,
		soft = tracking.soft_score,
		acad = tracking.acad_score,
		// calculate max
		topScore = Math.max(mech, elec, soft, acad),
		winner = "";

	switch(true) {
		case mech == topScore && elec !=topScore && soft !=topScore && acad <= topScore:
			winner = "mech";
			break;
		case elec == topScore && mech !=topScore && soft !=topScore && acad <= topScore:
			winner = "elec";
			break;	
		case soft == topScore && elec !=topScore && mech !=topScore && acad <= topScore:
			winner = "soft";
			break;	
		case acad == topScore && elec !=topScore && soft !=topScore && mech != topScore:
			winner = "acad";
			break;
		case mech == topScore && elec ==topScore && soft !=topScore && acad <= topScore:
			winner = "mech_elec";
			break;	
		case mech == topScore && soft ==topScore && elec !=topScore && acad <= topScore:
			winner = "mech_soft";
			break;
		case mech != topScore && soft ==topScore && elec ==topScore && acad <= topScore:
			winner = "elec_soft";
			break;	
		case mech == topScore && soft ==topScore && elec ==topScore:
			winner = "mech_elec_soft";
			break;				
	}
	return winner;
}