/* keeping track of current electron, current question and game score */
tracking = {
currentElectron: "",
currentQuestion: 1,
mech_score: 0,
elec_score: 0,
soft_score: 0,
acad_score: 0
};

/*********************/
/***** CONSTANTS *****/
/*********************/

const q_images = {
q1: 'iclicker.svg',
q2: 'gearlogs.svg',
q3: 'math257.svg',
q4: 'mosfet.svg',
q5: 'gearlogs.svg',
q6: 'enph257.svg',
q7: 'onshape.svg',
q8: 'TINAH.svg',
q9: 'solderingiron.svg',
q10: 'enph270.svg',
q11: 'TINAH.svg',
q12: 'servo.svg',
q13: 'electrons/electron_speech.svg',
q14: 'electrons/electron_zipline.svg'
}
const q_descriptions = {
q1: "it’s 9am on a wednesday. is there a 250 reading quiz today?",
q2: "your group is 10 groups behind on the laser cutter",
q3: "math quiz tomorrow!",
q4: "these mosfets are getting hot",
q5: "these gears aren't meshing",
q6: "so excited to heat this rod",
q7: "onshape",
q8: "do you think it’s not working right now because of the code or the wiring?",
q9: "i should probably turn the fume extractor on",
q10: "the first quiz question requires a 7 by 7 matrix",
q11: "the tinah code didn’t upload because",
q12: "i’m not sure if this servo can provide enough torque",
q13: "5-minute presentations are tomorrow and i",
q14: "the robot will zipline down successfully because",
}; 
const q_choices = {
	q1: {
		choice1: {
			text: "i stayed in the lab till 10pm yesterday; i’m good",
			category: "none"
		},
		choice2: {
			text: "RUN",
			category: "acad"
		}
	},
	q2: {
		choice1: {
			text: "sneak a piece into everyone’s turn",
			category: "mech"
		},
		choice2: {
			text: "wooo more time to solder!",
			category: "elec"
		}
	},
	q3: {
		choice1: {
			text: "design proposal takes precedent",
			category: "none"
		},
		choice2: {
			text: "save the chocolate industry",
			category: "acad"
		}
	},
	q4: {
		choice1: {
			text: "build a new h-bridge or ten",
			category: "elec"
		},
		choice2: {
			text: "software is the new h-bridge",
			category: "soft"
		}
	},
	q5: {
		choice1: {
			text: "FORCE THEM TO MESH",
			category: "mech"
		},
		choice2: {
			text: "software is the new gear ratio",
			category: "soft"
		}
	},
	q6: {
		choice1: {
			text: "10 years experience, linspace function",
			category: "acad"
		},
		choice2: {
			text: "is that my alarm",
			category: "none"
		}
	},
	q7: {
		choice1: {
			text: "is love",
			category: "none"
		},
		choice2: {
			text: "is life",
			category: "none"
		}
	},
	q8: {
		choice1: {
			text: "the code. every connection is polarized",
			category: "elec"
		},
		choice2: {
			text: "the wiring. stranded isn't solid??",
			category: "soft"
		}
	},
	q9: {
		choice1: {
			text: "thanks for the reminder",
			category: "none"
		},
		choice2: {
			text: "i like the smell...",
			category: "none"
		}
	},
	q10: {
		choice1: {
			text: "solve it by hand",
			category: "acad"
		},
		choice2: {
			text: "what matrix?????",
			category: "none"
		}
	},
	q11: {
		choice1: {
			text: "we didn't reset it right on time",
			category: "none"
		},
		choice2: {
			text: "we forgot to plug it in",
			category: "none"
		}
	},
	q12: {
		choice1: {
			text: "it definitely can. i made sure of it",
			category: "mech"
		},
		choice2: {
			text: "voltage ratings aren't hard cut-offs right",
			category: "elec"
		}
	},
	q13: {
		choice1: {
			text: "am ready",
			category: "none"
		},
		choice2: {
			text: "was not aware that they were tomorrow???",
			category: "none"
		}
	},
	q14: {
		choice1: {
			text: "it's consistently been able to",
			category: "mech"
		},
		choice2: {
			text: "my code inspires the robot to reach for the stars",
			category: "soft"
		}
	}
	
};

const job_descriptions = {
mech:"fed up with how the laser cutter lineup turns rapid prototyping into slightly less rapid prototyping, you decide to take matters into your own hands. welcome to the era of your hardboard box-cutting business. your work is a bit slower than the laser cutter, for sure, and a little more jagged, but no one knows press fits like you do.",
elec:"charging $5 per hand-soldered cable may sound a little steep, but hey, it’s worth the artistry and avoidance of solder fumes. you also happen to be great at knowing exactly when right angle and non-right angle headers should be used. business gets a little slow outside of july, but you’re hopeful it’ll pick up again next year.",
soft: "forget qrds, peak detectors, and h-bridges: you tell your robot which way to go by telepathy. it may not quite be an autonomous robot anymore, but how will anyone know? it’s a whole new level of connection. just watch out for time trials...",
acad: "it’s a tricky job, but you’re happy to have been hired as a part-time power on/off switcher for enph 257. good data is hard to come by, but so is the quality of your sense of timing.",
mech_elec: "the market is a little niche, your skillset is very specific, and you’re not sure if it’s legal to be running a tattoo studio in the lab, but people love it! your fanbase keeps you going.",
elec_soft: "power supply was off? been there. nothing was connected to signal 1? been there. the usb cable wasn’t connected to the tinah? been there. it feels good to finally be paid for your expertise.",
mech_soft: "it’s a struggle when you just want to test that servo but the tinah isn’t cooperating. it turns out that there’s a market for human tinahs! you’re great at reading code and acting out motions. if the delay was put in the wrong place, you make sure to actually delay(1000); between every angle of rotation! it’s a tough job, but it sure is rewarding.",
mech_elec_soft: "you know your robot so well that you can act just like it! you know that it can sometimes be hard to figure out how the old 253 robots work just by looking at them. you go above and beyond by coming into the lab to pretend to be your robot. it’s arguably easier to just power up the robot, but hey, can it explain in words how it’s working? that’s how you stand out."
};

const job_titles = {
mech: 'fabrication innovator',
elec: "handmade cable artist",
soft: 'robot whisperer', 
acad: "rod timer",
mech_elec: "MOSFET tattoo artist",
elec_soft: "plugger-inner",
mech_soft: "human TINAH",
mech_elec_soft: "human 253 robot"
};

// on load, add event listeners for mousein and mouseout
// add event listeners for game play click
window.addEventListener("load", function(event) {
	var items = document.getElementsByClassName("map-group"),
	startButton = document.getElementById("start-icon"),
	choice1 = document.getElementById("choice1"),
	choice2 = document.getElementById("choice2"),
	restartButton = document.getElementById("restart-button"),
	i = 0;
	for (i=0; i<items.length; i++) {
  	items[i].addEventListener('mouseover', switchLabelOn, false);
  	items[i].addEventListener('mouseout', switchLabelOff, false);
  	items[i].addEventListener('click', placeElectron, false);
  	}
  	
  	startButton.addEventListener('click', startGame, false);
  	choice1.addEventListener('click', recordChoice, false);
  	choice2.addEventListener('click', recordChoice, false);
  	restartButton.addEventListener('click', restartGame, false); 	
  });
  
/* turns label orange on mousein */
function switchLabelOn(e) {
	var label_purple = e.target.parentNode.querySelector(".off-label");
	var label_orange = e.target.parentNode.querySelector(".on-label");
	label_purple.style.display = "none";
	label_orange.style.display = "block";
}

/* turns label purple on mouseout */
function switchLabelOff(e) {
	var label_purple = e.target.parentNode.querySelector(".off-label");
	var label_orange = e.target.parentNode.querySelector(".on-label");
	label_orange.style.display = "none";
	label_purple.style.display = "block";
}

/* places little baby electron on the right thing */
function placeElectron(e) {
	var electron = e.target.parentNode.querySelector(".map-electron");
	replaceCurrentElectron(electron.id);
}

/* helper function to replace electron that's currently on */
function replaceCurrentElectron(electron) {
	var toReplace = document.getElementById(tracking.currentElectron);
	var selectedElectron = document.getElementById(electron);
	
	if (tracking.currentElectron == electron.toString()) {
		if (selectedElectron.style.display == "none") {
			selectedElectron.style.display = "block";
		} else {
		selectedElectron.style.display = "none";
		}
	}
	else if (toReplace != null) {
		toReplace.style.display = "none";
		selectedElectron.style.display = "block";
	}
	else if (toReplace == null) {
		selectedElectron.style.display = "block";
	}
		tracking.currentElectron = electron;
}

/* starts game when "play" button is clicked */
function startGame(e) {
	var startMenu = e.target.parentNode;
	var gamePlayArea = document.getElementById("game-play");
	startMenu.style.display = "none";
	gamePlayArea.style.display = "block";
	changeQuestion();
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
	img.src = "svg/"+q_images[questionNumber];
	description.innerText = q_descriptions[questionNumber];
	
	var desiredObject = q_choices[questionNumber];
	choice1.innerText = desiredObject.choice1.text;
	choice2.innerText = desiredObject.choice2.text;
}

/* records choice and advances question by calling changeQuestion()
or changeResults() if all the questions have been answered */
function recordChoice(e) {
if (e.target.id == "emoji-select-1" || e.target.id == "emoji-select-2") {
var selection = e.target.parentNode;
} else if (e.target.id == "emoji-text-1" || e.target.id == "emoji-text-2") {
var selection = e.target.parentNode.parentNode;
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
	if (tracking.currentQuestion >= 15) {
	showResults();
	} else {
	changeQuestion();
	}
	console.log("here to identify possible results? these statements are for u")
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
}

/* restarts game when you press the restart button;
resets score and question counts */
function restartGame(e) {
	var restartMenu= e.target.parentNode;
	var startMenu = document.getElementById("game-start");
	var gamePlayArea = document.getElementById("game-play");
	
	restartMenu.style.display = "none";
	gamePlayArea.style.display = "none";
	startMenu.style.display = "block";
	
	tracking.currentQuestion = 1;
	tracking.mech_score = 0;
	tracking.elec_score = 0;
	tracking.soft_score = 0;
	tracking.acad_score = 0;
}

/* determines which result to display */
function determineWinner() {
	var mech = tracking.mech_score,
		elec = tracking.elec_score,
		soft = tracking.soft_score,
		acad = tracking.acad_score,
		// calculate max
		topScore = Math.max(mech,elec,soft,acad),
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