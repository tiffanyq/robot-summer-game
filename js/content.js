
	const q_images = {
		q1: {
			img:"iclicker.svg",
			id: "iclicker-group"
			},
		q2: {
			img:"solderingiron.svg",
			id: "solderingiron-group"
			},
		q3: {
			img:"math257.svg",
			id: "math257-group"
			},
		q4: {
			img:"mosfet.svg",
			id: "mosfet-group"
			},
		q5: {
			img: "gearlogs.svg",
			id: "gearlogs-group"
			},
		q6: {
			img: "enph257.svg",
			id: "enph257-group"
			},
		q7: {
			img:"onshape.svg",
			id: "onshape-group"
			},
		q8: {
			img: "TINAH.svg",
			id: "TINAH-group"
			},
		q9: {
			img: "enph270.svg",
			id: "enph270-group"
			},
		q10: {
			img: "servo.svg",
			id: "servo-group"
			},
		q11: { 
			img: "electrons/electron_speech.svg",
			id: "oscilloscope-group"
			},
		q12: {
			img: "electrons/electron_zipline.svg",
			id: "infinitewell-group"
		}
};

const q_descriptions = {
q1: "it’s 9am on a wednesday. is there a phys 250 reading quiz today?",
q2: "your group is 10 groups behind on the laser cutter",
q3: "math quiz tomorrow!",
q4: "these mosfets are getting hot",
q5: "these gears aren't meshing",
q6: "so excited to heat this aluminum rod",
q7: "onshape",
q8: "do you think the robot's not working right now because of the code or the wiring?",
q9: "this first enph 270 quiz question requires a 7 by 7 matrix",
q10: "i’m not sure if this servo can provide enough torque",
q11: "5-minute presentations for enph 253 are tomorrow and i",
q12: "the robot will zipline down successfully because",
}; 
const q_choices = {
	q1: {
		choice1: {
			text: "yes, but i stayed in the lab till 10pm yesterday; i’m good",
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
			text: "wooooo more time to solder!",
			category: "elec"
		}
	},
	q3: {
		choice1: {
			text: "robot design proposal takes precedent",
			category: "none"
		},
		choice2: {
			text: "using laplace's equation, i must save the chocolate industry",
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
			text: "they must mesh.",
			category: "mech"
		},
		choice2: {
			text: "software is the new gear ratio",
			category: "soft"
		}
	},
	q6: {
		choice1: {
			text: "MATLAB, linspace, and loops; oh my!",
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
			text: "solve it by hand",
			category: "acad"
		},
		choice2: {
			text: "what matrix?????",
			category: "none"
		}
	},
	q10: {
		choice1: {
			text: "it definitely can. i made sure of it",
			category: "mech"
		},
		choice2: {
			text: "voltage ratings aren't hard cut-offs right",
			category: "elec"
		}
	},
	q11: {
		choice1: {
			text: "am ready",
			category: "none"
		},
		choice2: {
			text: "was not aware that they were tomorrow???",
			category: "none"
		}
	},
	q12: {
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

const backstory = {
		iclicker: "8:30am classes (i.e. PHYS 250) with marks attached to clicker questions really get you going!",
		solderingiron: "hope you used your fan, wore proper eye protection, and remembered to put on the heat shrink before soldering the header pins on! haha………….",
		math257: "partial differential equations class (MATH 257) covered a whole lot of boundary conditions!",
		mosfet: "sure is concerning when these burn up! how many did you smoke?", 
		gearlogs: "the laser cutter being in the lab was a real game-changer. How much hardboard is too much hardboard?",
		enph257: "we tried to estimate some key values of an aluminum rod in heat and thermodynamics class (ENPH 257). careful, artisanal heat modulation.",
		onshape: "we received strong encouragement from a ENPH 253 TA to switch from solidworks to onshape for our CAD modelling",
		TINAH: "before you start worrying, are you sure that you’ve a) plugged in the TINAH, and b) timed your pressing of the reset button correctly? finicky; we know! ",
		enph270: "hope you liked first-year mechanics and paying for homework access!",
		servo: "translating rotational motion to linear motion is apparently the way to go, if that’s the kind of motion you want. living the best servo life!",
		oscilloscope: "there’s always some probing around the pcb or breadboard (or something else? who knows!) that you can do, no matter the lab at hand",
		infinitewell: "imagine that you are a particle and that you are in a very deep well…some may call it…infinite? keep trying to tunnel through PHYS 250!"
};

