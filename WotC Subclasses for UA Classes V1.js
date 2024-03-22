/*	-INFORMATION-
	Subject:	Subclasses
	Effect:		This script adds the official WotC subclasses to the 2022-2023 series of Unearthed Arcana articles, altering them to be in accordance with the UA subclass progressions.
				This file has been compiled by MasterJedi2014, ripping almost all of its code from MPMB and those who have contributed to the sheet's existing material.
	Code by:	MorePurpleMoreBetter & contributors
	Date:		2024-03-20 (sheet v13.1.0)
*/

var iFileName = "WotC Subclasses for UA Classes V1.js";
RequiredSheetVersion("13.1.0");

/* 	Artificer will not be added in this script because it is not a part of the playtesting for the upcoming
	revision to 5th Edition.
	This file will be updated to include new classes as I code them into the sheets.
*/

// Add Bard subclasses (modified to be in compliance with the subclass formatting of the version of the Bard that appeared in UA22XC, not the version that appeared in UA23PT6)
AddSubClass("bard_ua22xc", "college of valor", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*valor).*$/i,
	subname : "College of Valor",
	source : [["P", 55]],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["P", 55]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with medium armor, shields, and martial weapons",
			armorProfs : [false, true, false, true],
			weaponProfs : [false, true]
		},
		"subclassfeature3.1" : {
			name : "Combat Inspiration",
			source : [["P", 55]],
			minlevel : 3,
			description : "\n   " + "My Bardic Inspiration can also be used to add the die to a weapon damage roll" + "\n   " + "Alternatively, it can be used as a reaction to add the die to AC against one attack"
		},
		"subclassfeature14" : {
			name : "Battle Magic",
			source : [["P", 55]],
			minlevel : 14,
			description : "\n   " + "As a bonus action when I use my action to cast a bard spell, I can make a weapon attack",
			action : ["bonus action", " (with Bard spell)"]
		}
	}
});
AddSubClass("bard_ua22xc", "college of glamour", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*glamour).*$/i,
	subname : "College of Glamour",
	source : [["X", 14]],
	features : {
		"subclassfeature3" : {
			name : "Mantle of Inspiration",
			source : [["X", 14]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I expend one Bardic Inspiration die to aid those within 60 ft of me",
				"My Cha mod (min 1) of creatures that I can see and can see me gain temporary HP",
				"They can immediately use a reaction to move their speed, without opportunity attacks"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 inspiration die; " + (n < 5 ? 5 : n < 10 ? 8 : n < 15 ? 11 : 14) + " temp HP"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Enthralling Performance",
			source : [["X", 14]],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"By performing for at least 1 minute, I can charm humanoids within 60 ft of me",
				"After the performance, my Cha mod (min 1) number of targets must make a Wis save",
				"On a fail, a target is charmed for 1 hour; If success, it doesn't knows I tried to charm it",
				"While charmed, the target idolizes me, hinders those opposing me, and avoids violence",
				"This lasts until a target takes damage, I attack it, or if it sees me attacking its allies"
			])
		},
		"subclassfeature6" : {
			name : "Mantle of Majesty",
			source : [["X", 14]],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I appear unearthly beautiful while I concentrate, up to 1 minute",
				"At the same time, and as a bonus action during, I can cast Command without a spell slot",
				"Creatures charmed by me automatically fail their saves against these Command spells"
			]),
			spellcastingBonus : [{
				name : "Mantle of Majesty",
				spells : ["command"],
				selection : ["command"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"command" : {
					time : "1 bns",
					description : "1 crea save or follow one word command, e.g. approach, drop, flee, halt",
					changes : "Using my Mantle of Majesty class feature, I can cast Command as a bonus action once per long rest without using a spell slot, thus only affect a single target."
				}
			}
		},
		"subclassfeature14" : {
			name : "Unbreakable Majesty",
			source : [["X", 14]],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I gain a magically majestic presence for 1 min or until incapacitated",
				"During this, the first time a creature attacks me each turn they must make a Cha save",
				"If failed, it can't attack me this turn and must choose another target or lose its attack",
				"If successful, it can attack, but has disadv. on all saves against my spells on my next turn"
			])
		}
	}
});
AddSubClass("bard_ua22xc", "college of swords", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : [["X", 15]],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["X", 15]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with medium armor and scimitars",
				"My bardic spellcasting focus can be any simple or martial weapon I'm proficient with"
			]),
			armorProfs : [false, true, false, false],
			weaponProfs : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : {
			name : "Fighting Style",
			source : [["X", 15]],
			minlevel : 3,
			description : "\n   " + 'Select a Fighting Style for the college of swords using the "Choose Feature" button above',
			choices : ["Dueling", "Two-Weapon Fighting"],
			"dueling" : FightingStyles.dueling,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : [["X", 15]],
			minlevel : 3,
			description : desc([
				"When I take the Attack action on my turn, I gain bonus speed and special attack options",
				"I gain +10 ft to my walking speed until the end of the current turn",
				"Once per turn when I hit with a weapon attack, I can expend a Bardic Inspiration die",
				"The roll of that die is added to the weapon's damage, in addition to one of the following:",
				"\u2022 Defensive Flourish: the result is also added to my AC until the start of my next turn",
				"\u2022 Slashing Flourish: the extra damage is also dealt to any of my choosing in 5 ft of me",
				"\u2022 Mobile Flourish: the target is also pushed 5 plus the die result in feet away from me",
				"  As a reaction after this push, I can move my speed to a space within 5 ft of the target"
			])
		},
		"subclassfeature14" : {
			name : "Master Flourish",
			source : [["X", 16]],
			minlevel : 14,
			description : "\n   " + "When I do a Blade Flourish, I can use a d6 instead of expending a Bardic Inspiration die"
		}
	}
});
AddSubClass("bard_ua22xc", "college of whispers", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*whispers).*$/i,
	subname : "College of Whispers",
	source : [["X", 16]],
	features : {
		"subclassfeature3" : {
			name : "Psychic Blades",
			source : [["X", 16]],
			minlevel : 3,
			description : desc([
				"When I hit a creature with a weapon attack, I can expend one use of Bardic Inspiration",
				"If so, the attack does extra psychic damage; I can do so only once per round, on my turn"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 Bardic Inspiration for +" + (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 5 : 8) + "d6 damage"; })
		},
		"subclassfeature3.1" : {
			name : "Words of Terror",
			source : [["X", 16]],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"By speaking privately with a humanoid for at least 1 minute, I can try to inspire terror",
				"After the talk, it must make a Wis save or be frightened of me or someone of my choice",
				"If the save is successful, the target doesn't know I tried to frighten it",
				"This lasts for 1 hour, or until it sees its allies or itself being attacked or damaged"
			])
		},
		"subclassfeature6" : {
			name : "Mantle of Whispers",
			source : [["X", 16]],
			minlevel : 6,
			recovery : "short rest",
			usages : 1,
			action : ["reaction", ""],
			description : desc([
				"As a reaction when a humanoid dies within 30 ft of me, I can capture its shadow",
				"As an action, I can use it to make me look just like the dead person did while it was alive",
				"While disguised, I know general information about it and its memories, but not its secrets",
				"Others can see through the disguise with a Wis (Insight) check vs. my Cha (Deception) +5",
				"A shadow lasts until used or next long rest; The disguise ends as a bonus action or 1 hour"
			]),
			action : [['action', 'Shadow Disguise (start)'], ['bonus action', 'Shadow Disguise (end)']]
		},
		"subclassfeature14" : {
			name : "Shadow Lore",
			source : [["X", 16]],
			minlevel : 14,
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
			description : desc([
				"As an action, I whisper to a creature within 30 ft that can hear and understand me",
				"Only the target can hear me; It must make a Wis save or be charmed by me for 8 hours",
				"If failed, it thinks I know its most mortifying secret, otherwise it only hears mumbling",
				"While charmed, the target obeys my commands, but won't fight or risk its life for me",
				"This lasts for 8 hours, or until I or my allies attack it, damage it, or have it make a save"
				//"When the effect ends, the target has no idea why it was so afraid of me"
			])
		}
	}
});
AddSubClass("bard_ua22xc", "college of eloquence", { // includes contributions by /u/Holynight6
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*eloquence).*$/i,
	subname : "College of Eloquence",
	source : [["T", 29], ["MOT", 28]],
	features : {
		"subclassfeature3" : {
			name : "Silver Tongue",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 3,
			description : "\n   When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10"
		},
		"subclassfeature3.1" : {
			name : "Unsettling Words",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I expend a Bardic Inspiration use & choose a target I can see in 60 ft",
				"It subtracts my inspiration die from the next save it makes before my next turn starts"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : {
			name : "Unfailing Inspiration",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 6,
			description : "\n   When a creature adds my Bardic Inspiration die to a roll but fails, they can keep the die"
		},
		"subclassfeature6.1" : {
			name : "Universal Speech",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 6,
			description : desc([
				"As an action, I can choose up to my Charisma modifier (min 1) creatures within 60 ft",
				"Those creatures magically understand any language I speak for an hour",
				"I can do this once per long rest, or by expending a 1st-level or higher spell slot (SS 1+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 1+",
			action : [["action", ""]]
		},
		"subclassfeature14" : {
			name : "Infectious Inspiration",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 14,
			description : desc([
				"As a reaction when a creature uses my inspiration die and succeeds, I can inspire another",
				"I give a creature within 60 ft that can hear me an inspiration die without expending any"
			]),
			action : [["reaction", ""]],
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		}
	}
});
AddSubClass("bard_ua22xc", "college of creation", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*creation).*$/i,
	subname : "College of Creation",
	source : [["T", 28]],
	features : {
		"subclassfeature3" : {
			name : "Mote of Potential",
			source : [["T", 28]],
			minlevel : 3,
			description : desc([
				"Those who use my Bardic Inspiration die gain an extra bonus depending how they use it:",
				"\u2022 Ability check: Roll the die twice and choose which result to use",
				"\u2022 Attack roll: the target and others of my choice I can see in 5 ft must make a Con save",
				"  If failed, they take the die roll in thunder damage; This uses my spell save DC",
				"\u2022 Saving throw: Grants temporary HP equal to the roll + my Cha mod (min 1 temp HP)"
			])
		},
		"subclassfeature3.1" : {
			name : "Performance of Creation",
			source : [["T", 28]],
			minlevel : 3,
			description : levels.map(function (n) {
				if (n < 14) {
					var descr = [
						"As an action, I create " + (n < 6 ? "a Medium" : "one Large") + " or smaller nonmagical item in an empty space in 10 ft",
						"It can't be worth more than " + (20 * n) + " gp; It lasts for my Proficiency Bonus in hours",
						"I can't have multiple, creating more makes the first one vanish",
						"I can do this once per long rest, or by expending a 2nd-level or higher spell slot (SS 2+)"
					];
				} else {
					var descr = [
						"As an action, I create my Charisma mod of nonmagical items in an empty space in 10 ft",
						"One can be Huge, the rest Small or smaller; They last for my Proficiency Bonus in hours",
						"I can't have more than my Cha mod; If I create more, I get to choose which vanish",
						"I can do this once per long rest, or by expending a 2nd-level or higher spell slot (SS 2+)"
					];
				}
				return desc(descr);
			}),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 2+"
		},
		"subclassfeature6" : {
			name : "Animating Performance",
			source : [["T", 29]],
			minlevel : 6,
			description : desc([
				"As an action, I can animate a Large or smaller nonmagical item I can see within 30 ft",
				"It is friendly and obeys my commands; It lasts for 1 hour, until it has 0 HP, or I die",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can take reactions and move on its turn without commands; I can't have multiple",
				"When I use bardic inspiration, I can command the item as part of the same bonus action",
				'It acts on my initiative, after me; See "Dancing Item" on a companion page for its stats',
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			action : [["action", ""], ["bonus action", "Command Dancing Item"]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
			creaturesAdd : [["Dancing Item"]],
			creatureOptions : [{
				name : "Dancing Item",
				source : [["T", 29]],
				size : 4,
				type : "Construct",
				alignment : "",
				ac : 16,
				hp : 25,
				hd : [],
				speed : "fly 30 ft (hover)",
				scores : [18, 14, 16, 4, 10, 6],
				damage_immunities : "poison, psychic",
				condition_immunities : "charmed, exhaustion, poisoned, frightened",
				passivePerception : 10,
				senses : "Darkvision 60 ft",
				languages : "understands the languages of its creator but can't speak",
				challengeRating : "1/2",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Force-Empowered Slam",
					ability : 6,
					damage : [1, 10, "force"],
					range : "Melee (5 ft)",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "bard_ua22xc"
				}],
				features : [{
					name : "Variable Size",
					description : "The item animated can be Large or smaller."
				}, {
					name : "Creator",
					description : "The item obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
				}],
				actions : [{
					name : "Immutable Form",
					description : "The item is immune to any spell or effect that would alter its form."
				}, {
					name : "Irrepressible Dance",
					description : "When any creature starts its turn within 10 ft of the item, the item can increase or decrease (its creator's choice) the walking speed of that creature by 10 ft until the end of the turn, provided the item isn't incapacitated."
				}],
				header : 'Animated',
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.bard) return;
						var brdLvl = classes.known.bard.level;
						var brdLvl5 = 5 * brdLvl;
						HDobj.alt.push(10 + brdLvl5);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + brdLvl + " from five times its creator's bard level (" + brdLvl5 + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature14" : {
			name : "Creative Crescendo",
			source : [["T", 29]],
			minlevel : 14,
			description : " [enhances Performance of Creation]"
		}
	}
});
AddSubClass("bard_ua22xc", "college of spirits",{
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*spirits?).*$/i,
	subname : "College of Spirits",
	source : [["VRGtR", 28]],
	features : {
		"subclassfeature3" : {
			name : "Guiding Whispers",
			source : [["VRGtR", 28]],
			minlevel : 3,
			description : desc([
				"I learn the Guidance cantrip and can cast it with a range of 60 ft"
			]),
			spellcastingBonus : {
				name : "Guiding Whispers",
				spells : ["guidance"],
				selection : ["guidance"],
				firstCol : "atwill"
			},
			spellChanges : {
				"guidance" : {
					range : "60 ft",
					changes : "I can cast Guidance with a range of 60 ft."
				}
			},
			spellcastingBonus : {
				name : "Guiding Whispers",
				spells : ["guidance ua22cs"],
				selection : ["guidance ua22cs"],
				firstCol : "atwill"
			},
			spellChanges : {
				"guidance ua22cs" : {
					range : "60 ft",
					changes : "I can cast Guidance with a range of 60 ft."
				}
			},
		},
		"subclassfeature3.1" : {
			name : "Spiritual Focus",
			source : [["VRGtR", 28]],
			minlevel : 3,
			description : " [only for bard spells]" + desc([
				"I can use a candle, crystal ball, skull, spirit board, or tarokka deck as a spellcasting focus"
			])
		},
		"subclassfeature3.2" : {
			name : "Tales from Beyond",
			source : [["VRGtR", 28]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can expend a bardic inspiration die to roll on the Spirit Tales table",
				"I retain the rolled tale in my mind until I bestow its effects or finish a short or long rest",
				"I can only retain one tale at a time; I need to hold a spiritual focus to roll on the table",
				"As an action, I can choose a creature I see in 30 ft or myself to bestow the tale's effect",
				"The tales use my spell save DC; See the Notes page for the Spirit Tales table"
			]),
			action : [["bonus action", " (roll on table)"], ["action", " (use effect)"]],
			toNotesPage : [{
				name : "Spirit Tales Table",
				note : desc([
					"As a bonus action while I'm holding my spiritual focus, I can reach out to spirits who tell their tales through me. I expend one use of my Bardic Inspiration and roll on the table below using my Bardic Inspiration die to determine the tale. I retain the tale in mind until I bestow the tale's effect or finish a short or long rest.",
					"I can retain only one of these tales in mind at a time, and rolling on the table immediately ends the effect of the previous tale.",
					"As an action, I can choose myself or one creature I can see within 30 ft to be the target of the tale's effect. If the tale requires a saving throw, the DC equals my spell save DC.",
					"\nRoll " + (typePF ? "" : " ") + "Tale"
				])+
				 desc([
					"  1    Tale of the Clever Animal: For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll my Bardic Inspiration die immediately after rolling the d20 and add it to the check.",
					"  2    Tale of the Renowned Duelist: I make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of my Bardic Inspiration die + my Charisma modifier.",
					"  3    Tale of the Beloved Friends: The target and another creature of its choice it can see within 5 ft of it gains temporary hit points equal to a roll of my Bardic Inspiration die + my Charisma modifier.",
					"  4    Tale of the Runaway: The target can immediately use its reaction to teleport up to 30 ft to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 ft of it up to my Charisma modifier (minimum of 0) to immediately use the same reaction.",
					"  5    Tale of the Avenger: For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of my Bardic Inspiration die.",
					"  6    Tale of the Traveler: The target gains temporary hit points equal to a roll of my Bardic Inspiration die + my bard level. While it has these temporary hit points, the target's walking speed increases by 10 ft and it gains a +1 bonus to its AC.",
					"  7    Tale of the Beguiler: The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of my Bardic Inspiration die, and the target is incapacitated until the end of its next turn.",
					"  8    Tale of the Phantom: The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If the target hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of my Bardic Inspiration die and is frightened of the target until the end of the frightened creature's next turn.",
					"  9    Tale of the Brute: Each creature of the target's choice it can see within 30 ft of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of my Bardic Inspiration die and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.",
					" 10    Tale of the Dragon: The target spews fire from the mouth in a 30-ft cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of my Bardic Inspiration die on a failed save, or half as much damage on a successful one.",
					" 11    Tale of the Angel: The target regains hit points equal to two rolls of my Bardic Inspiration die + my Charisma modifier, and I end one condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.",
					" 12    Tale of the Mind-Bender: I evoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of my Bardic Inspiration die and be stunned until the end of its next turn."
				], "\n")
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Focus: Improve spells",
			source : [["VRGtR", 28]],
			minlevel : 6,
			description : desc([
				"While holding a spiritual focus, I can add 1d6 to one damage or healing roll of bard spells"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && SpellsList[v.thisWeapon[3]] && v.thisWeapon[4].indexOf("bard") !== -1) {
							// If RAW is selected, first test if this spell is eligible to use with a spellcasting focus
							var isRAW = GetFeatureChoice("classes", "bard", "subclassfeature6") === "raw: only +1d6 for spells with non-costly material components";
							var spellObj = SpellsList[v.thisWeapon[3]];
							if (isRAW && (!spellObj.components || !/\bM\b/.test(spellObj.components) || /M\u0192|M\u2020/.test(spellObj.components))) return;
							fields.Damage_Die = fields.Damage_Die.replace(/D/g, 'd');
							var d6Regex = /(\d+)d6/;
							if (fields.Damage_Die.indexOf('Bd6') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Bd6', 'Cd6');
							} else if (fields.Damage_Die.indexOf('Cd6') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Cd6', 'Qd6');
							} else if (d6Regex.test(fields.Damage_Die)) {
								fields.Damage_Die = fields.Damage_Die.replace(d6Regex, Number(fields.Damage_Die.replace(d6Regex, '$1')) + 1 + 'd6');
							} else if (v.thisWeapon[3] == "eldritch blast") {
								fields.Description += (fields.Description ? '; ' : '') + "One ray +1d6 dmg";
							} else {
								fields.Damage_Die += '+1d6';
							}
						}
					},
					'When I cast a bard spell, I can use my spiritual focus to add 1d6 to one damage roll or roll to restore hit points.\n   Going by rules as written (RAW), the spiritual focus has to be used as a spellcasting focus for this bonus to be added. This means that it can only be used on spells with a non-costly material component. Most DMs will forgo this technicality and that is why this sheet will add the 1d6 to any damage/healing spell by default. You can enable to use the stricter rules as written with the "Choose Feature" button on the second page.',
					1
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						// Do not process if a psionic, not a bard spell, or, if RAW is selected, not eligible to use with a spellcasting focus
						var isRAW = GetFeatureChoice("classes", "bard", "subclassfeature6") === "raw: only +1d6 for spells with non-costly material components";
						if (spellObj.psionic || spName !== "bard" || (isRAW && (!spellObj.components || !/\bM\b/.test(spellObj.components) || /M\u0192|M\u2020/.test(spellObj.components)))) return;
						if (genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "1d6", true, true) || genericSpellDmgEdit(spellKey, spellObj, "heal", "1d6", true, true)) {
							return true;
						}
					},
					'When I cast a bard spell, I can use my spiritual focus to add 1d6 to one damage roll or roll to restore hit points.\n   Going by rules as written (RAW), the spiritual focus has to be used as a spellcasting focus for this bonus to be added. This means that it can only be used on spells with a non-costly material component. Most DMs will forgo this technicality and that is why this sheet will add the 1d6 to any damage/healing spell by default. You can enable to use the stricter rules as written with the "Choose Feature" button on the second page.'
				]
			},
			choices : ["RAW: only +1d6 for spells with non-costly material components", "Allow +1d6 for any bard spell"],
			"raw: only +1d6 for spells with non-costly material components" : {
				name : "Spiritual Focus: Improve spells",
				description : desc([
					"If I use a spiritual focus to cast a bard spell, I can add 1d6 to one damage or healing roll"
				])
			},
			"allow +1d6 for any bard spell" : {
				name : "Spiritual Focus: Improve spells",
				description : desc([
					"While holding a spiritual focus, I can add 1d6 to one damage or healing roll of bard spells"
				])
			},
			defaultChoice : "allow +1d6 for any bard spell"
		},
		"subclassfeature6.1" : {
			name : "Spirit Session",
			source : [["VRGtR", 29]],
			minlevel : 6,
			description : desc([
				"Using my spiritual focus, I can conduct a hour-long ritual to channel spirit during a rest",
				"The number of willing participants, me included, can be up to my Proficiency Bonus",
				"At the end, I learn a divination or necromancy spell of my choice until I start a long rest",
				"The spell can't be higher level than the number of participants and of a level I can cast"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Spirit Session",
				school : ["Div", "Necro"],
				firstCol : "SS"
			}
		},
		"subclassfeature14" : {
			name : "Mystical Connection",
			source : [["VRGtR", 29]],
			minlevel : 14,
			description : desc([
				"For Tales from Beyond, I now roll my bardic inspiration die twice and " + (typePF ? "choose" : "select") + " which to use",
				"If I roll the same number on both dice, I can instead choose any effect on the table"
			])
		}
	}
});
AddSubClass("bard_ua22xc", "college of satire-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour))(?=.*satire).*$/i,
	subname : "College of Satire",
	source : [["UA:KoO", 2]],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["UA:KoO", 2]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with thieves' tools, sleight of hand, and one other skill of my choice",
			skills : ["Sleight of Hand"],
			skillstxt : "Thieves' Tools, Sleight of Hand, and any one other skill",
			toolProfs : [["Thieves' tools", "Dex"]]
		},
		"subclassfeature3.1" : {
			name : "Tumbling Fool",
			source : [["UA:KoO", 2]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I tumble which gives the benefits of the Dash and Disengage actions" + "\n   " + "I also gain a climbing speed at my current speed and half damage from falling",
			action : ["bonus action", ""],
			speed : { climb : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature6" : {
			name : "Fool's Insight",
			source : [["UA:KoO", 2]],
			minlevel : 6,
			description : "\n   " + "I can cast Detect Thoughts, but on a save the target suffers an embarrassing social gaffe",
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fool's Insight",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : "(S)"
			},
			spellChanges : {
				"detect thoughts" : {
					description : "1 a read thoughts of visible Int>3 crea or detect invisible in 30 ft; save for probing, social gaffe on save",
					changes : "I can cast this spell a number of times equal to my Charisma modifier per long rest and when I do so and the target makes its save, it suffers an embarrassing social gaffe."
				}
			}
		},
		"subclassfeature14" : {
			name : "Fool's Luck",
			source : [["UA:KoO", 3]],
			minlevel : 14,
			description : " [one bardic inspiration die]" + "\n   " + "When I fail an ability check, saving throw, or attack roll, I can add one inspiration die" + "\n   " + "If this turns the roll into a success, I have to note down the number rolled" + "\n   " + "I can't use this ability again until the DM subtracts the amount from a check or attack",
			usages : 1,
			recovery : "reset"
		}
	}
});

// Add Barbarian subclasses


// Add Cleric subclasses
AddSubClass("cleric_ua23pt6", "knowledge domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*(knowledge|wisdom)).*$/i,
	subname : "Knowledge Domain",
	source : [["P", 59]],
	spellcastingExtra : ["command", "identify", "augury", "suggestion", "nondetection", "speak with dead", "arcane eye", "confusion", "legend lore", "scrying"],
	features : {
		"subclassfeature3" : {
			name : "Blessings of Knowledge",
			source : [["P", 59]],
			minlevel : 3,
			description : "\n   " + "I learn two languages and gain proficiency and expertise with two skills" + "\n   " + "I can choose from the following: Arcana, History, Nature, or Religion",
			skillstxt : "Choose two from Arcana, History, Nature, and Religion. You also gain expertise with these skills",
			languageProfs : [2]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Knowledge of Ages",
			source : [["P", 59]],
			minlevel : 3,
			description : "\n   " + "As an action, I gain proficiency with a chosen skill or tool for 10 minutes",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Read Thoughts",
			source : [["P", 59]],
			minlevel : 6,
			description : "\n   " + "As an action, one creature within 60 ft I can see must make a Wisdom save" + "\n   " + "If it fails, I can read its surface thoughts for 1 min, as long as it's within 60 ft of me" + "\n   " + "As an action, I can end this and cast Suggestion on it (it fails its save automatically)" + "\n   " + "If it succeeded on its save, I can't use this feature again on it until I finish a long rest",
			action : ["action", ""]
		},
		"subclassfeature17" : {
			name : "Visions of the Past",
			source : [["P", 60]],
			minlevel : 17,
			description : desc([
				"I can see recent events of an object or area by concentrating and praying for 1 min",
				"I can meditate this way for up to a number of minutes equal to my Wisdom score",
				"\u2022 Object Reading (after meditating for 1 minute per owner):",
				"   If an owner owned it in the last Wis score in days, I learn how that owner got/lost it",
				"   I also learn the most recent significant event involving the object and the owner",
				"\u2022 Area Reading (my immediate surroundings, up to a 50-foot cube):",
				"   Going back my Wisdom score in days, per minute I meditate, I learn about one event",
				"   This starts with the most recent event; It can be significant or just important to me"
			]),
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("cleric_ua23pt6", "nature domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*\b(nature|natural|animal)\b).*$/i,
	subname : "Nature Domain",
	source : [["P", 62]],
	spellcastingExtra : ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"],
	features : {
		"subclassfeature3" : {
			name : "Acolyte of Nature",
			source : [["P", 62]],
			minlevel : 3,
			description : "\n   " + "I learn a druid cantrip and proficiency with a skill: Animal Handling, Nature, Survival",
			skillstxt : "Choose one from Animal Handling, Nature, or Survival",
			spellcastingBonus : {
				name : "Acolyte of Nature",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Charm Animals and Plants",
			source : [["P", 62]],
			minlevel : 3,
			description : "\n   " + "As an action, all beasts and plants within 30 ft that I can see must make a Wis save" + "\n   " + "If failed, each is charmed and friendly to allies and me for 1 min or until damaged",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Dampen Elements",
			source : [["P", 62]],
			minlevel : 6,
			description : "\n   " + "As a reaction, if an ally in 30 ft or I takes acid/cold/fire/lightning/thunder damage," + "\n   " + "I can grant resistance against that instance of damage",
			action : ["reaction", ""]
		},
		"subclassfeature17" : {
			name : "Master of Nature",
			source : [["P", 62]],
			minlevel : 17,
			description : "\n   " + "As a bonus action, I can command creatures that are charmed by my Channel Divinity",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("cleric_ua23pt6", "tempest domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*\b(tempest|destruction)\b).*$/i,
	subname : "Tempest Domain",
	source : [["P", 62]],
	spellcastingExtra : ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"],
	features : {
		"subclassfeature3" : {
			name : "Wrath of the Storm",
			source : [["P", 62]],
			minlevel : 3,
			description : "\n   " + "As a reaction, when a creature I can see within 5 ft hits me, I can thunderously rebuke" + "\n   " + "It takes 2d8 lightning or thunder damage (my choice) that a Dex save can halve",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Destructive Wrath",
			source : [["P", 62]],
			minlevel : 3,
			description : "\n   " + "Instead of rolling, I can do maximum damage when I do lightning or thunder damage"
		},
		"subclassfeature6" : {
			name : "Thunderbolt Strike",
			source : [["P", 62]],
			minlevel : 6,
			description : "\n   " + "When I deal lightning damage to a Large or smaller foe, I can push it up to 10 ft away"
		},
		"subclassfeature17" : {
			name : "Stormborn",
			source : [["P", 62]],
			minlevel : 17,
			description : "\n   " + "Whenever I'm not underground or indoors, I have a fly speed equal to my current speed",
			speed : { fly : { spd : "walk", enc : "walk" } }
		}
	}
});
AddSubClass("cleric_ua23pt6", "death domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*(death|dead)).*$/i,
	subname : "Death Domain",
	source : [["D", 96]],
	spellcastingExtra : ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
	features : {
		"subclassfeature3" : {
			name : "Reaper",
			source : [["D", 96]],
			minlevel : 3,
			description : "\n   " + "I learn one necromancy cantrip of my choice from any spell list" + "\n   " + "My necromancy, single-target cantrips can affect two targets within 5 ft of each other",
			spellcastingBonus : {
				name : "Reaper",
				"class" : "any",
				school : ["Necro"],
				level : [0, 0]
			},
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level === 0) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "chill touch" :
									spellObj.description = spellObj.description.replace("Spell attack", "2 crea in 5 ft spell atk").replace("Necrotic", "Necro.").replace("at CL 5, 11, and 17", "CL 5/11/17");
									break;
								case "spare the dying" :
									spellObj.description = spellObj.description.replace("1 living creature", "1 living creature (or 2 within 5 ft of each other)");
									break;
								case "toll the dead" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "disadv.").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target cantrips can affect two targets within 5 ft of each other."
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Touch of Death",
			source : [["D", 97]],
			minlevel : 3,
			description : "\n   " + "When I hit a creature with a melee attack, I can deal extra necrotic damage",
			additional : ["", "+9 damage", "+11 damage", "+13 damage", "+15 damage", "+17 damage", "+19 damage", "+21 damage", "+23 damage", "+25 damage", "+27 damage", "+29 damage", "+31 damage", "+33 damage", "+35 damage", "+37 damage", "+39 damage", "+41 damage", "+43 damage", "+45 damage"]
		},
		"subclassfeature6" : {
			name : "Inescapable Destruction",
			source : [["D", 97]],
			minlevel : 6,
			description : "\n   " + "When I deal necrotic damage with spells or Channel Divinity, I ignore resistance to it"
		},
		"subclassfeature17" : {
			name : "Improved Reaper",
			source : [["D", 97]],
			minlevel : 17,
			description : "\n   " + "If I cast a 5th-level or lower necromancy spell that has one target, I can target two" + "\n   " + "They need to be within 5 ft of each other; I have to provide material comp. for both",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level && spellObj.level < 6) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "blindness/deafness" :
									// only 2 target if not cast at higher SL
									spellObj.description = "2 crea in 5 ft or " + spellObj.description;
									break;
								case "contagion" :
								case "inflict wounds" :
								case "ray of enfeeblement" :
									spellObj.description = spellObj.description.replace(/(Melee )?spell attack/i, "2 " + "$1".toLowerCase() + "spell atk in 5 ft").replace("spell ends", "ends");
									break;
								case "cause fear" :
									spellObj.description = "2 crea in 5 ft or 1+1/SL crea max 30 ft apart (no constr/undead), save or frightened; save end of turn";
									break;
								case "feign death" :
									spellObj.description = "2 willing crea in 5 ft appear dead; Are blinded, incapacitated, dmg resist. all but Psychic, speed 0";
									break;
								case "gentle repose" :
									spellObj.description = spellObj.description.replace("1 corpse protected from", "2 corpses in 5 ft suffer no");
									break;
								case "raise dead" :
								case "revivify" :
									spellObj.description = spellObj.description.replace("a creature's body that has", "body of 2 crea in 5 ft that").replace("cons.)", "cons. \xD72)");
									spellObj.compMaterial += " (once for each target)";
									break;
								case "speak with dead" :
									spellObj.description = spellObj.description.replace("1 corpse with mouth answers 5 questions", "2 corpses in 5 ft answer 5 questions each");
									break;
								case "enervation" :
									spellObj.description = spellObj.description.replace("action", "1 a").replace("see book", "see B");
								case "bestow curse" :
								case "blight" :
								case "cause fear-uass" :
								case "life transference" :
								case "negative energy flood" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "disadv.").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target 5th-level or lower spells can affect two targets within 5 ft of each other if both are within range of the spell. The spells still require material components for each target separately."
				]
			}
		}
	}
});
AddSubClass("cleric_ua23pt6", "arcana domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*(arcana|magic)).*$/i,
	subname : "Arcana Domain",
	source : [["S", 125]],
	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"],
	features : {
		"subclassfeature3" : {
			name : "Arcane Initiate",
			source : [["S", 125]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with Arcana and two wizard cantrips that count as cleric cantrips",
			skills : ["Arcana"],
			spellcastingBonus : {
				name : "Arcane Initiate",
				"class" : "wizard",
				level : [0, 0],
				times : 2
			}
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Arcane Abjuration",
			source : [["S", 125]],
			minlevel : 3,
			description : "\n   " + "As an action, one celestial, elemental, fey, or fiend within 30 ft must make a Wis save" + "\n   " + "If it fails and is able to see/hear me, it is turned for 1 min or until it takes damage" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds" + "\n   " + "If its CR is low enough and it is not on its home plane, it is banished for 1 min instead" + "\n   " + "Banished: sent to home plane, reappearing where it was if the effect ends before 1 min",
			additional : ["", "", "", "", "CR 1/2 or lower", "CR 1/2 or lower", "CR 1/2 or lower", "CR 1 or lower", "CR 1 or lower", "CR 1 or lower", "CR 2 or lower", "CR 2 or lower", "CR 2 or lower", "CR 3 or lower", "CR 3 or lower", "CR 3 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower"],
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Spell Breaker",
			source : [["S", 126]],
			minlevel : 6,
			description : "\n   " + "When I restore HP to an ally with a 1st-level or higher spell, I can also end one spell" + "\n   " + "The chosen spell on the ally ends if it is equal or lower level to the spell slot level used",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {							
						var startDescr = spellObj.description;
						switch (spellKey) {
							case "mass heal" :
								spellObj.description = "Heal 700 hp, split over crea in range; also cures blindness, deafness, and all diseases; spell breaker";
								break;
							case "power word heal" :
								spellObj.description = spellObj.description.replace(/heals all.*/i, "full hp; no longer charmed, frightened, paralyzed, stunned; can stand up as rea; spell breaker");
								break;
							case "goodberry" :
								spellObj.description = spellObj.description.replace("Create ", "").replace("lose potency after ", "remain");
							case "regenerate" :
								spellObj.description = spellObj.description.replace(" for rest of duration", "");
							case "heal" :
								spellObj.description = spellObj.description.replace("all diseases", "diseases");
							case "cure wounds" :
							case "healing word" :
							case "life transference" :
							case "mass cure wounds" :
							case "mass healing word" :
							case "prayer of healing" :
								spellObj.description = spellObj.description.replace(/creatures?/i, "crea").replace("within", "in").replace("spellcasting ability modifier", "spellcasting ability mod") + "; spell breaker";
						}
						return startDescr !== spellObj.description;
					},
					"When I cast a spell that restores hit points to another creature than myself, I can also end a spell affecting the target. This spell can be of the same level of the spell slot used to cast the healing spell, or lower."
				]
			}
		},
		"subclassfeature17" : {
			name : "Arcane Mastery",
			source : [["S", 126]],
			minlevel : 17,
			description : "\n   " + "I add four wizards spells, a 6th, 7th, 8th, and 9th-level spell, to my domain spells" + "\n   " + "As any domain spell, these spells are automatically prepared and count as cleric spells",
			spellcastingBonus : [{
				name : "Arcane Mastery (6)",
				"class" : "wizard",
				level : [6, 6],
				firstCol : 'markedbox'
			}, {
				name : "Arcane Mastery (7)",
				"class" : "wizard",
				level : [7, 7],
				firstCol : 'markedbox'
			}, {
				name : "Arcane Mastery (8)",
				"class" : "wizard",
				level : [8, 8],
				firstCol : 'markedbox'
			}, {
				name : "Arcane Mastery (9)",
				"class" : "wizard",
				level : [9, 9],
				firstCol : 'markedbox'
			}]
		}
	}
});
AddSubClass("cleric_ua23pt6", "forge domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*(forge|forgery)).*$/i,
	subname : "Forge Domain",
	source : [["X", 18]],
	spellcastingExtra : ["identify", "searing smite", "searing smite ua23pt6", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["X", 19]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with smith's tools",
			toolProfs : ["Smith's tools"]
		},
		"subclassfeature3.1" : {
			name : "Blessing of the Forge",
			source : [["X", 19]],
			minlevel : 1,
			action : ["action", ""],
			usages : 3,
			recovery : "long rest",
			description : desc([
				"At the end of a long rest, I can imbue magic into a nonmagical weapon or armor",
				"It becomes magical: +1 AC if armor, or +1 to attack and damage rolls if a weapon",
				"This lasts until the end of my next long rest or until I die"
			])
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Artisan's Blessing",
			source : [["X", 19]],
			minlevel : 3,
			description : desc([
				"With an hour-long ritual, I can craft a nonmagical item that is at least part metal",
				"Including: suit of armor, simple or martial weapon, set of tools, 10 pieces of ammunition",
				"The creation can be worth up to 100 gp, and I must expend metals of equal value to it",
				"The metals irretrievably coalesce into the new item, forming even nonmetal parts of it",
				"The item can be an exact duplicate of a nonmagical item if I possess the original",
				"The item comes into existence at the end of the hour in an unoccupied space within 5 ft"
			])
		},
		"subclassfeature6" : {
			name : "Soul of the Forge",
			source : [["X", 19]],
			minlevel : 6,
			description : "\n   " + "I gain resistance to fire damage and +1 to AC while wearing medium or heavy armor",
			dmgres : ["Fire"],
			extraAC : {
				mod : 1,
				text : "I gain a +1 bonus to AC while wearing Medium or Heavy armor.",
				stopeval : function (v) { return !v.mediumArmor && !v.heavyArmor; }
			}
		},
		"subclassfeature17" : {
			name : "Saint of Forge and Fire",
			source : [["X", 19]],
			minlevel : 17,
			description : desc([
				"I gain immunity to fire damage",
				"When wearing heavy armor, I'm resistant to nonmagical bludg./piercing/slashing damage"
			]),
			savetxt : { immune : ["fire"] },
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("cleric_ua23pt6", "grave domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*grave).*$/i,
	subname : "Grave Domain",
	source : [["X", 19]],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature3" : {
			name : "Circle of Mortality",
			source : [["X", 20]],
			minlevel : 3,
			action : ["bonus action", ""],
			description : desc([
				"Spells I cast to heal a living creature at 0 HP have their dice count as their max result",
				"I learn Spare the Dying, which I can cast as a bonus action with a range of 30 ft"
			]),
			spellcastingBonus : {
				name : "Circle of Mortality",
				spells : ["spare the dying"],
				selection : ["spare the dying"],
				firstCol : 'atwill'
			},
			spellChanges : {
				"spare the dying" : {
					time : "1 bns",
					range : "30 ft",
					changes : "I can cast Spare the Dying as a bonus action instead of an action, and it has a range of 30 ft instead of touch."
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Eyes of the Grave",
			source : [["X", 20]],
			minlevel : 3,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : desc([
				"As an action, I sense undead within 60 ft that aren't protected from divination magic",
				"Until the end of my next turn, I sense the location of any undead not behind total cover"
			])
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Path to the Grave",
			source : [["X", 20]],
			minlevel : 3,
			action : ["action", ""],
			description : desc([
				"As an action, I can curse a creature within 30 ft until the end of my next turn",
				"It is vulnerable to all the damage from the next attack by me or my allies that hits it"
			])
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : [["X", 20]],
			minlevel : 6,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : [["X", 20]],
			minlevel : 17,
			description : desc([
				"Once per round, if I'm not incapacitated, I can manipulate the energy of the dying",
				"When an enemy I can see dies within 60 ft of me, I or an ally within 60 ft regain HP",
				"The HP regained is equal to the enemy's number of Hit Dice"
			])
		}
	}
});
AddSubClass("cleric_ua23pt6", "order domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*order).*$/i,
	subname : "Order Domain",
	source : [["T", 31], ["G", 25]],
	spellcastingExtra : ["command", "heroism", "hold person", "zone of truth", "mass healing word", "mass healing word uapt8", "slow", "compulsion", "locate creature", "commune", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["T", 32], ["G", 26]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with either the Intimidation or Persuasion skill",
			skillstxt : "Choose one from Intimidation or Persuasion"
		},
		"subclassfeature3.1" : {
			name : "Voice of Authority",
			source : [["T", 32], ["G", 26]],
			minlevel : 3,
			description : desc([
				"Whenever I use a spell slot to cast a spell on an ally, it can use its reaction to attack",
				"The ally makes one weapon attack against a target of my choice that I can see",
				"If the spell targets multiple allies, I can choose which one can make the attack"
			])
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Order's Demand",
			source : [["T", 32], ["G", 26]],
			minlevel : 3,
			description : desc([
				"As an action, all chosen targets in 30 ft that can see or hear me must make a Wis save",
				"If failed, it is charmed by me until the end of my next turn or it takes any damage",
				"Also, I can choose to have a charmed target drop what its holding when it fails its save"
			]),
			action : [["action", ""]]
		},
		"subclassfeature6" : {
			name : "Embodiment of the Law",
			source : [["T", 32], ["G", 26]],
			minlevel : 6,
			description : desc([
				"When I cast an enchantment spell using a spell slot, I can reduce its casting time",
				"If the spell normally has a casting time of an action, I can now cast it as a bonus action"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (CurrentSpells[spName].refType == "class" && spellObj.school == "Ench" && spellObj.time == "1 a") {
							spellObj.time = "1a/bns"
							return true;
						};
					},
					"When I cast an enchantment spell using a spell slot that normally requires 1 action to cast, I can reduce its casting time to a bonus action."
				]
			}
		},
		"subclassfeature17" : {
			name : "Order's Wrath",
			source : [["T", 32], ["G", 26]],
			minlevel : 17,
			description : desc([
				"If I deal my Divine Strike damage to a creature, it is cursed until my next turn starts",
				"The next time it is hit by a weapon attack from my allies, it takes +2d8 psychic damage"
			])
		}
	}
});
AddSubClass("cleric_ua23pt6", "peace domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*peace).*$/i,
	subname : "Peace Domain",
	source : [["T", 32]],
	spellcastingExtra : ["heroism", "sanctuary", "aid", "aid ua22cs", "warding bond", "beacon of hope", "sending", "aura of purity", "otiluke's resilient sphere", "greater restoration", "rary's telepathic bond"],
	features : {
		"subclassfeature3" : {
			name : "Emboldening Bond",
			source : [["T", 33]],
			minlevel : 3,
			description : levels.map(function (n) {
				return desc([
					"As an action, I can magically bond my Prof Bonus of willing creatures I can see in 30 ft",
					"I can be one of the bonded creatures; The bond lasts for 10 min or until I use this again",
					"While within " + (n < 17 ? 30 : 60) + " ft of another, a bonded target can add +1d4 to a save, attack, or check",
					"Each creature can add the +1d4 only once per turn"
				]);
			}),
			action : [["action", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature3.1" : {
			name : "Implement of Peace",
			minlevel : 3,
			description : "\n   " + "I gain proficiency in the Insight, Performance, or Persuasion skill (my choice)",
			skillstxt : "Choose one from: Insight, Performance, or Persuasion"
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Balm of Peace",
			source : [["T", 33]],
			minlevel : 3,
			description : desc([
				"As an action, I can move up to my speed without provoking opportunity attacks",
				"During this move, I can heal each creature that I come within 5 ft of once",
				"I restore a number of hit points equal to 2d6 + my Wisdom modifier (minimum 1 HP)"
			]),
			action : [["action", ""]]
		},
		"subclassfeature6" : {
			name : "Protective Bond",
			source : [["T", 33]],
			minlevel : 6,
			description : desc([
				"My Emboldening Bond now also helps those bonded to protect each other if within range",
				"When one is about to take damage, another bonded can use its reaction to teleport closer",
				"They teleport to an empty space within 5 ft of the first and take all the damage instead",
				"From 17th-level, they count as having resistance for this damage, thus take only half"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : "the bonded must be within " + (n < 17 ? 30 : 60) + " ft";
			})
		},
		"subclassfeature17" : {
			name : "Expansive Bond",
			source : [["T", 33]],
			minlevel : 17,
			description : desc([
				"Emboldening and Protective Bond work when the bonded are within 60 ft of each other",
				"Protective Bond now also grants resistance when used to take damage for another"
			])
		}
	}
});
AddSubClass("cleric_ua23pt6", "twilight domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*(twilight)).*$/i,
	subname : "Twilight Domain",
	source : [["T", 34]],
	spellcastingExtra : ["faerie fire", "sleep", "moonbeam", "see invisibility", "aura of vitality", "leomund's tiny hut", "aura of life", "greater invisibility", "circle of power", "mislead"],
	features : {
		"subclassfeature3" : {
			name : "Eyes of Night",
			source : [["T", 34]],
			minlevel : 3,
			description : desc([
				"I gain darkvision out to a range of 300 ft; As an action, I can grant others this as well",
				"I can grant it for 1 hour to my Wis mod (min 1) of willing targets I can see within 10 ft",
				"I can do this once per long rest, or by expending a spell slot (SS 1+)"
			]),
			action : [["action", " (grant others)"]],
			vision : [["Darkvision", 300]],
			additional : "grant others",
			usages : 1,
			recovery : "long rest",
			altResource : "SS 1+"
		},
		"subclassfeature3.1" : {
			name : "Vigilant Blessing",
			source : [["T", 35]],
			minlevel : 3,
			description : desc([
				"As an action, I can grant myself or a creature I touch adv. on the next initiative roll",
				"This benefit ends immediately after the roll or when I use this feature again"
			]),
			action : [["action", ""]]
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Twilight Sanctuary",
			source : [["T", 35]],
			minlevel : 3,
			description : desc([
				"As an action, I can use my holy symbol to create a 30-ft radius sphere around myself",
				"It moves with me, is filled with dim light, and lasts for 1 min or until I'm incapacitated",
				"When a creature, including me, ends its turn inside the sphere, I can grant it a benefit:",
				" \u2022 I grant it temporary hit points equal to 1d6 + my cleric level",
				" \u2022 I end one effect on it causing it to be charmed or frightened",
				"From 17th-level onwards, me and my allies have half cover while inside the sphere"
			]),
			action : [["action", ""]],
			additional : levels.map(function(n) {
				return n < 3 ? "" : "1d6 + " + n + " temp HP";
			}),
		},
		"subclassfeature6" : {
			name : "Steps of Night",
			source : [["T", 35]],
			minlevel : 6,
			description : desc([
				"As a bonus action when I'm in dim light or darkness, I can magically grant myself flight",
				"I gain a flying speed equal to my walking speed for 1 minute"
			]),
			action : [["bonus action", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Twilight Shroud",
			source : [["T", 35]],
			minlevel : 17,
			description : desc([
				"Me and my allies have half cover while in the sphere created by my Twilight Sanctuary"
			])
		}
	}
});
AddSubClass("cleric_ua23pt6", "city domain-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*(cleric|priest|clergy))(?=.*(city)).*$/i,
	subname : "City Domain",
	source : [["UA:MM", 1]],
	spellcastingExtra : ["comprehend languages", "remote access-ua", "find vehicle-ua", "heat metal", "lightning bolt", "protection from ballistics-ua", "locate creature", "synchronicity-ua", "commune with city-ua", "shutdown-ua"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Cantrip",
			source : [["UA:MM", 1]],
			minlevel : 3,
			description : "\n   " + "I learn the On/Off cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (On/Off)",
				spells : ["on/off-ua"],
				selection : ["on/off-ua"]
			}
		},
		"subclassfeature3.1" : {
			name : "Bonus Proficiency",
			source : [["UA:MM", 1]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with sidearms and land vehicles",
			weaponProfs : [false, false, ["Sidearms"]],
			toolProfs : ["Vehicles (land)"]
		},
		"subclassfeature3.2" : {
			name : "Heart of the City",
			source : [["UA:MM", 1]],
			minlevel : 3,
			description : desc([
				"While I'm in a city, I can gain adv. on a Cha (Deception, Intimidation, Persuasion) check",
				"I'm considered proficient with the appropriate skill for that one check"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature3.3" : {
			name : "Channel Divinity: Spirits of the City",
			source : [["UA:MM", 1]],
			minlevel : 3.3,
			description : desc([
				"As an action, I make all city utilities in 30 ft either stop or work perfectly for 1 min",
				"Additionally, all hostiles within 30 ft must make a Cha save at the time of use",
				"If failed, it is either knocked prone or restrained (my choice) by city hazards",
				"A restrained target can escape with an Athletics or Acrobatics check vs. my spell DC"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Block Watch",
			source : [["UA:MM", 2]],
			minlevel : 6,
			description : "\n   " + "While in an urban environment, I'm proficient and expertise in Insight and Perception"
		},
		"subclassfeature17" : {
			name : "Express Transit",
			source : [["UA:MM", 2]],
			minlevel : 17,
			description : desc([
				"As an action, I can teleport from one mass transit site to another in the same city",
				"This works just like a Teleport spell; Mass transits sites include bus/train/subway stops"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	}
});

// Add Druid subclasses
// Stars Druid gets the following UA22CS spells: "guidance ua22cs"


// Add Fighter subclasses


// Add Monk subclasses


// Add Paladin subclasses
AddSubClass("paladin_ua23pt6", "oathbreaker", {
	regExpSearch : /^((?=.*blackguard)|((?=.*(oath.*breaker|breaker.*oath))((?=.*paladin)|((?=.*(exalted|sacred|holy))(?=.*(knight|fighter|warrior|warlord)))))).*$/i,
	subname : "Oathbreaker",
	source : [["D", 97]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Control Undead",
			source : [["D", 97]],
			minlevel : 3,
			description : "\n   " + "As an action, one undead (CR < paladin level) I can see in 30 ft must make a Wis save" + "\n   " + "If failed, it must obey my commands for 24 hours or until I use this on another",
			action : ["action", ""],
			spellcastingExtra : ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Dreadful Aspect",
			source : [["D", 97]],
			minlevel : 3,
			description : "\n   " + "As an action, anyone I choose within 30 ft that can see me must make a Wisdom save" + "\n   " + "If failed, it is frightened for 1 min or until it succeeds a save at the end of its turns" + "\n   " + "It can't save at the end of its turn if it's still within 30 ft of me",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Hate",
			source : [["D", 97]],
			minlevel : 7,
			description : "\n   " + "Fiends/undead within range and I add my Cha mod as bonus on melee weapon damage" + "\n   " + "Multiple Auras of Hate don't stack; only the strongest applies",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Cha mod added to damage';
						}
					},
					"I add my Charisma modifier to my melee weapon damage."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Cha Mod"));
						};
					}
				]
			}
		},
		"subclassfeature15" : {
			name : "Supernatural Resistance",
			source : [["D", 97]],
			minlevel : 15,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		},
		"subclassfeature20" : {
			name : "Dread Lord",
			source : [["D", 97]],
			minlevel : 20,
			description : "\n   " + "As a Bonus Action, I gain a 30-ft aura of gloom that reduces bright light to dim for 1 min" + "\n   " + "If frightened of me, foes starting their turn in the aura take 4d10 psychic damage" + "\n   " + "Attacks vs. my allies and me inside the aura have disadvantage if attackers need sight" + "\n   " + "As a bonus action, I can make a melee spell attack vs. a target inside the aura" + "\n   " + "If this attack hits, it does 3d10 + Charisma modifier necrotic damage" + "\n   " + "I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)",
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("paladin_ua23pt6", "oath of the crown", {
	regExpSearch : /^(?=.*(crown|king))(((?=.*paladin)|((?=.*(exalted|sacred|holy))(?=.*(knight|fighter|warrior|warlord))))).*$/i,
	subname : "Oath of the Crown",
	source : [["S", 133]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Champion Challenge",
			source : [["S", 133]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can have any chosen creatures within 30 ft of me make a Wis save",
				"If failed, a target is unable to willingly move more than 30 ft away from me",
				"The effect ends if I'm incapacitated, die, or it is moved more than 30 ft away from me"
			]),
			action : [["bonus action", ""]], // changed to bonus action per errata (v1.0, 2017)
			spellcastingExtra : ["command", "compelled duel", "warding bond", "zone of truth", "aura of vitality", "spirit guardians", "banishment", "banishment ua22cs", "guardian of faith", "circle of power", "geas"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Turn the Tide",
			source : [["S", 133]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, any chosen creatures within 30 ft that can hear me regains HP" + "\n   " + "Each regain 1d6 + my Charisma modifier HP, up to half of its total HP",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Divine Allegiance",
			source : [["S", 133]],
			minlevel : 7,
			description : "\n   " + "When a creature within 5 feet of me takes damage, I can substitute my HP for it" + "\n   " + "The creature takes no damage and I take all of it; this damage can't be prevented",
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Unyielding Spirit",
			source : [["S", 133]],
			minlevel : 15,
			description : "\n   " + "I have advantage on saving throws against effects that paralyze or stun",
			savetxt : { adv_vs : ["paralyzed", "stunned"] }
		},
		"subclassfeature20" : {
			name : "Exalted Champion",
			source : [["S", 133]],
			minlevel : 20,
			description : desc([
				"As a Bonus Action, I gain the following benefits for 1 hour or until I'm incapacitated:",
				" \u2022 " + "Resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons",
				" \u2022 " + "My allies within 30 ft of me and I have advantage on Wisdom and Death saves",
				"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)",
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("paladin_ua23pt6", "oath of conquest", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy))(?=.*(knight|fighter|warrior|warlord))))))).*$/i,
	subname : "Oath of Conquest",
	source : [["X", 37]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : [["X", 38]],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within a 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : ["action", ""],
			spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "spiritual weapon ua22cs", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : [["X", 38]],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : [["X", 38]],
			minlevel : 7,
			description : desc([
				"Creatures that are frightened of me have their speed reduced to 0 while in my aura",
				"They also take psychic damage whenever they start theirs turn within my aura"
			]),
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return (n < 18 ? 10 : 30) + "-foot aura; " + Math.floor(n / 2) + " psychic damage";
			})
		},
		"subclassfeature15" : {
			name : "Scornful Rebuke",
			source : [["X", 38]],
			minlevel : 15,
			description : desc([
				"Whenever I'm hit with an attack while I'm not incapacitated, the attacker takes damage",
				"This is psychic damage equal to my Charisma modifier (minimum of 1)"
			])
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : [["X", 38]],
			minlevel : 20,
			description : desc([
				"As a Bonus Action, I can gain the following benefits for 1 minute:",
				" - I have resistance to all damage",
				" - I can make an additional attack as part of my Attack action",
				" - My melee weapons score critical hits on a roll of 19 or 20",
				"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)",
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin_ua23pt6", "oath of redemption", {
	regExpSearch : /^((?=.*redeemer)|((?=.*redemption)(((?=.*paladin)|((?=.*(exalted|sacred|holy))(?=.*(knight|fighter|warrior|warlord))))))).*$/i,
	subname : "Oath of Redemption",
	source : [["X", 38]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Emissary of Peace",
			source : [["X", 39]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I grant myself +5 on Charisma (Persuasion) checks for 10 minutes",
			action : ["bonus action", ""],
			spellcastingExtra : ["sanctuary", "sleep", "calm emotions", "hold person", "counterspell", "hypnotic pattern", "otiluke's resilient sphere", "stoneskin", "hold monster", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Rebuke the Violent",
			source : [["X", 39]],
			minlevel : 3,
			description : desc([
				"As a reaction after a creature within 30 ft attacks and damages another, I can rebuke it",
				"It takes the same damage as it dealt but as radiant damage, with a Wis save to halve it"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature7" : {
			name : "Aura of the Guardian",
			source : [["X", 39]],
			minlevel : 7,
			description : desc([
				"As a reaction when an ally within my aura takes damage, I instead take the damage",
				"This damage can't be reduced in any way; Other effects might still apply to my ally"
			]),
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Protective Spirit",
			source : [["X", 39]],
			minlevel : 15,
			description : "\n   " + "At the end of my turn when I'm below half HP and not incapacitated, I regain HP",
			additional : levels.map(function (n) { return n < 15 ? "" : "1d6+" + Math.floor(n/2) + " HP"; })
		},
		"subclassfeature20" : {
			name : "Emissary of Redemption",
			source : [["X", 39]],
			minlevel : 20,
			description : desc([
				"When taking damage from a creature, I take only half and it takes the other half",
				"This stops working on any that I attack or force to make a save, until I have a long rest"
			]),
			dmgres : ["All from creatures"]
		}
	}
});
AddSubClass("paladin_ua23pt6", "oath of the watchers", {
	regExpSearch : /^(?=.*watchers)((?=.*paladin)|((?=.*(exalted|sacred|holy))(?=.*(knight|fighter|warrior|warlord)))).*$/i,
	subname : "Oath of the Watchers",
	source : [["T", 54]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Watcher's Will",
			source : [["T", 55]],
			minlevel : 3,
			description : "\n   As an action, Cha mod of creatures I see in 30 ft adv. on Int/Wis/Cha saves for 1 min",
			action : [["action", ""]],
			spellcastingExtra : ["alarm", "detect magic", "moonbeam", "see invisibility", "counterspell", "nondetection", "aura of purity", "banishment", "banishment ua22cs", "hold monster", "scrying"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Abjure the Extraplanar",
			source : [["T", 55]],
			minlevel : 3,
			description : desc([
				"As an action, all aberration, celestial, elemental, fey, fiend in 30 ft must make Wis save",
				"Succeeds if it can't hear me; On fail, turned for 1 minute or until it takes any damage",
				"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
				"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of the Sentinel",
			source : [["T", 55]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, chosen creatures in range and I add my Prof Bonus to Initiative",
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod : [{ type : "skill", field : "Init", mod : "prof", text : "I can add my Proficiency Bonus to initiative rolls." }]
		},
		"subclassfeature15" : {
			name : "Vigilant Rebuke",
			source : [["T", 55]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another I can see succeeds a Int, Wis, or Cha save, I can rebuke",
				"The creature that forced the saving throw takes 2d8 + my Charisma mod force damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Mortal Bulwark",
			source : [["T", 55]],
			minlevel : 20,
			description : desc([
				"As a Bonus Action, I can gain the following benefits for 1 minute:",
				" \u2022 Truesight 120 ft; Adv. on attacks vs. aberrations, celestials, elementals, fey, and fiends",
				" \u2022 When I hit and damage a creature with an attack, I can banish it if it fails a Cha save",
				"   It's banished to its native plane if not there now; It's immune for 24 hours on a success",
				"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : [["bonus action", ""]]
		}
	}
});

// Add Ranger subclasses
AddSubClass("ranger_ua23pt6", "horizon walker", {
	regExpSearch : /^(?=.*horizon)(?=.*walker).*$/i,
	subname : "Horizon Walker",
	source : [["X", 42]],
	fullname : "Horizon Walker",
	features : {
		"subclassfeature3" : {
			name : "Detect Portal",
			source : [["X", 42]],
			minlevel : 3,
			description : "\n   " + "As an action, I sense the distance and direction to the closest planar portal within 1 mile",
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Horizon Walker Magic",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["protection from evil and good", "misty step", "haste", "banishment", "banishment ua22cs", "teleportation circle"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Planar Warrior",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I choose one creature that I can see within 30 ft of me",
				"All damage from my first weapon attack that hits it on this turn becomes force damage",
				"In addition, that first hit does extra damage"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + (n < 11 ? 1 : 2) + "d8 force damage"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Ethereal Step",
			source : [["X", 43]],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can cast the Etherealness spell, which lasts until the end of my turn",
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Ethereal Step",
				spells : ["etherealness"],
				selection : ["etherealness"],
				firstCol : 'oncesr'
			},
			spellChanges : {
				"etherealness" : {
					time : "1 bns",
					duration : "1 rnd",
					description : "I go to Ethereal Plane; move there, but able to perceive 60 ft into the normal plane",
					changes : "Using my Ethereal Step class feature I can cast Etherealness as a bonus action once per short rest, but it only affects myself and lasts until the end of my turn."
				}
			}
		},
		"subclassfeature11" : {
			name : "Distant Strike",
			source : [["X", 43]],
			minlevel : 11,
			description : desc([
				"With the Attack action, I can teleport 10 ft before each attack, to a place I can see",
				"If I attack two different creatures with this action, I get an extra attack against a third"
			])
		},
		"subclassfeature15" : {
			name : "Spectral Defense",
			source : [["X", 43]],
			minlevel : 15,
			description : "\n   " + "As a reaction when an attack damages me, I can give myself resistance vs. that attack",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("ranger_ua23pt6", "monster slayer", {
	regExpSearch : /^(?=.*monster)(?=.*slayer).*$/i,
	subname : "Monster Slayer",
	source : [["X", 43]],
	fullname : "Monster Slayer",
	features : {
		"subclassfeature3" : {
			name : "Hunter's Sense",
			source : [["X", 43]],
			minlevel : 3,
			description : desc([
				"As an action, I learn vulnerabilities/immunities/resistances of a target I see within 60 ft",
				"If it is protected from divination magic, I sense it has none of these"
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature3.1" : {
			name : "Monster Slayer Magic",
			source : [["X", 43]],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "zone of truth", "magic circle", "banishment", "banishment ua22cs", "hold monster"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Slayer's Prey",
			source : [["X", 43]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I designate a creature I see within 60 ft; This lasts until I do this again",
				"My first hit to the target with a weapon attack on each of my turns does +1d6 damage"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Supernatural Defense",
			source : [["X", 43]],
			minlevel : 7,
			description : desc([
				"I add 1d6 to saving throws the current target of my Slayer's Prey forces me to make",
				"In addition, I also add 1d6 to checks to escape that target's grapple"
			])
		},
		"subclassfeature11" : {
			name : "Magic-User's Nemesis",
			source : [["X", 43]],
			minlevel : 11,
			description : desc([
				"As a reaction when I see someone within 60 ft casting a spell or teleporting, I can foil it",
				"The target must make a Wisdom save or have its spell or teleport fail and be wasted"
			]),
			action : ["reaction", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Slayer's Counter",
			source : [["X", 43]],
			minlevel : 15,
			description : desc([
				"As a reaction when the target of my Slayer's Prey has me make a save, I can attack it",
				"I can make one weapon attack; If this hits, I automatically succeed on the saving throw"
			]),
			action : ["reaction", ""]
		}
	}
});
AddSubClass("ranger_ua23pt6", "fey wanderer", {
	regExpSearch : /^(?=.*fey)(?=.*wanderer).*$/i,
	subname : "Fey Wanderer",
	source : [["T", 58]],
	fullname : "Fey Wanderer",
	features : {
		"subclassfeature3" : {
			name : "Dreadful Strikes",
			source : [["T", 58]],
			minlevel : 3,
			description : desc([
				"My weapons deal extra psychic damage, but only once per turn per creature"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+1d" + (n < 11 ? 4 : 6) + " psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isWeapon && (classes.known.ranger || classes.known.rangerua)) {
							var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua.level;
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn per target +1d' + (rngrLvl < 11 ? 4 : 6) + ' psychic damage';
						};
					},
					"When I hit a creature with a weapon, I can deal an extra 1d4 psychic damage to the target, which can take this extra damage only once per turn. From 11th-level, this damage increases to 1d6."
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Fey Wanderer Magic",
			source : [["T", 58]],
			minlevel : 3,
			description : "\n   I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["charm person", "misty step", "dispel magic", "dimension door", "mislead"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Otherworldly Glamour",
			source : [["T", 59]],
			minlevel : 3,
			description : desc([
				"I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				'I gain proficiency in Deception, Performance, or Persuasion; Use "Choose Feature" button'
			]),
			addMod : ["Deception", "Intimidation", "Performance", "Persuasion"].map(function(skill){return { type : "skill", field : skill, mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma check I make (minimum of +1)." };}),
			choices : ["Deception proficiency", "Performance proficiency", "Persuasion proficiency"],
			"deception proficiency" : {
				name : "Otherworldly Glamour",
				description : " [Deception proficiency]\n   I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				skills : ["Deception"]
			},
			"performance proficiency" : {
				name : "Otherworldly Glamour",
				description : " [Performance proficiency]\n   I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				skills : ["Performance"]
			},
			"persuasion proficiency" : {
				name : "Otherworldly Glamour",
				description : " [Persuasion proficiency]\n   I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				skills : ["Persuasion"]
			}
		},
		"subclassfeature7" : {
			name : "Beguiling Twist",
			source : [["T", 59]],
			minlevel : 7,
			description : desc([
				"I have advantage on saves against being charmed or frightened; Below uses my save DC",
				"As a reaction when a creature I see in 120 ft succeeds its save vs. charmed or frightened,",
				"I can have another I see in 120 ft make a Wis save or be charmed/frightened (I choose)",
				"This lasts for 1 minute and the target can repeat the save at the end of each of its turns"
			]),
			action : [["reaction", ""]],
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"subclassfeature11" : {
			name : "Fey Reinforcements",
			source : [["T", 59]],
			minlevel : 11,
			description : desc([
				"I learn Summon Fey; It needs no material component, nor counts against spells known",
				"Once per long rest, I can cast it without expending a spell slot",
				"When I cast it, I can have it not require concentration, but than its duration is 1 minute"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fey Reinforcements",
				spells : ["summon fey"],
				selection : ["summon fey"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"summon fey" : {
					components : "V,S",
					compMaterial : "",
					duration : "Conc,1h/1min",
					changes : "Using my Fey Reinforcements class feature, I can cast Summon Fey without requiring material components and I can cast it once per long rest without requiring a spell slot. Whenever I start casting the spell, I can modify it so that it doesn't require concentration. If I do so, the spell's duration becomes 1 minute for that casting."
				}
			}
		},
		"subclassfeature15" : {
			name : "Misty Wanderer",
			source : [["T", 59]],
			minlevel : 15,
			description : desc([
				"I can cast Misty Step without a spell slot and can bring a willing creature in 5 ft along"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey === "misty step") {
							spellObj.firstCol = "Sp";
							spellObj.description = "I and one willing creature I can see within 5 ft of me teleport 30 ft to a unoccupied space I can see";
							return true;
						}
						return false;
					},
					"Whenever I cast misty step, I can bring along one willing creature I can see within 5 ft of me. That creature teleports to an unoccupied space of my choice within 5 ft of my destination space.\nI can cast Misty Step without expending a spell slot a number of times per long rest equal to my Wisdom modifier (minimum of once)."
				]
			}
		}
	}
});
AddSubClass("ranger_ua23pt6", "swarmkeeper", {
	regExpSearch : /swarmkeeper/i,
	subname : "Swarmkeeper",
	source : [["T", 59]],
	fullname : "Swarmkeeper",
	features : {
		"subclassfeature3" : {
			name : "Gathered Swarm",
			source : [["T", 60]],
			minlevel : 3,
			description : levels.map(function (n) {
				var a = [
					"I'm bonded to a swarm of nature spirits crawling in my space; I choose their appearance",
					"Once on each of my turns, I can have it assist me after I hit a creature with an attack:",
					" \u2022 The target takes an extra 1d" + (n < 11 ? 6 : 8) + " piercing damage from the swarm",
					" \u2022 The target must make a Strength save or be moved 15 ft horizontally by the swarm",
					" \u2022 The swarm moves me 5 ft horizontally" + (n < 11 ? "" : " and I have half cover until my next turn starts"),
					"I get to choose the direction whenever the target or I'm moved by the swarm"
				];
				if (n >= 11) a.splice(4, 0, "   Additionally, on a failed save, I can also have the target be knocked prone");
				if (n >= 20) a.pop();
				return desc(a);
			})
		},
		"subclassfeature3.1" : {
			name : "Swarmkeeper Magic",
			source : [["T", 60]],
			minlevel : 3,
			description : desc([
				"I learn Mage Hand; When cast, its hand takes the form of my swarming nature spirits",
				"I get bonus spells known, which do not count against the number of spells I can know"
			]),
			spellcastingBonus : {
				name : "Swarmkeeper Magic",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : "atwill"
			},
			spellcastingExtra : ["faerie fire", "web", "gaseous form", "arcane eye", "insect plague"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature7" : {
			name : "Writhing Tide",
			source : [["T", 60]],
			minlevel : 7,
			description : desc([
				"As a bonus action, I can fly on my swarm for 1 minute: 10 ft flying speed and can hover"
			]),
			action : [["bonus action", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Mighty Swarm",
			source : [["T", 60]],
			minlevel : 11,
			description : " [improves Gathered Swarm, see above]\n   Now 1d8 damage, knocks prone on failed save, or grants me half cover until next turn"
		},
		"subclassfeature15" : {
			name : "Swarming Dispersal",
			source : [["T", 60]],
			minlevel : 15,
			description : desc([
				"As a reaction when I take damage, I can gain resistance to that damage and teleport",
				"I vanish into my swarm and teleport to an unoccupied space within 30 ft that I can see"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
});
AddSubClass("ranger_ua23pt6", "drakewarden", {
	regExpSearch : /^(?=.*(drake|dragon|draconic))(?=.*(warden|ranger|trainer)).*$/i,
	subname : "Drakewarden",
	source : [["FToD", 15]],
	fullname : "Drakewarden",
	features : {
		"subclassfeature3" : {
			name : "Draconic Gift",
			source : [["FToD", 15]],
			minlevel : 3,
			description : desc([
				"I learn the Draconic language and the Thaumaturgy cantrip"
			]),
			languageProfs : ["Draconic"],
			spellcastingBonus : [{
				name : "Draconic Gift",
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : "atwill"
			}]
		},
		"subclassfeature3.1" : {
			name : "Drake Companion",
			source : [["FToD", 15]],
			minlevel : 3,
			description : desc([
				"As an action, I can summon my drake to appear in an empty space within 30 ft",
				'Select a "Drake Companion" on the companion page for its stats and rules',
				"I can do this once per long rest, or by expending a 1st-level or higher spell slot (SS 1+)"
			]),
			usages : 1,
			recovery : "long rest",
			altResource : "SS 1+",
			action : [["action", " (summon)"], ["bonus action", " (command)"]],
			creaturesAdd : [["Drake Companion", true]],
			creatureOptions : [{
				name : "Drake Companion",
				source : [["FToD", 15]],
				size : 4,
				type : "Dragon",
				alignment : "Unaligned",
				ac : "14+Prof",
				hp : 20,
				hd : [3, 10],
				hdLinked : ["ranger", "rangerua", "ranger_ua23pt6"],
				minlevelLinked : ["ranger", "rangerua", "ranger_ua23pt6"],
				speed : "40 ft",
				scores : [16, 12, 15, 8, 14, 8],
				saves : ["", 3, "", "", 4, ""],
				damage_immunities : "the chosen Draconic Essence damage type",
				senses : "Darkvision 40 ft",
				passivePerception : 12,
				languages : "Draconic",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 1,
					damage : [1, 6, "piercing"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "", //+1d6 damage of the chosen Draconic Essense type
					abilitytodamage : false
				}],
				features : [{
					name : "Warden",
					description : "The drake obeys the commands of its warden and shares its proficiency bonus. It takes its turn immediately after that of its warden, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its warden takes a bonus action to command it to take another action. If its warden is incapacitated, the drake can take any action, not just Dodge. The drake vanishes when it is reduced to 0 hit points, when its warden summons another drake, or when its warden dies."
				}],
				traits : [{
					name : "Draconic Essence",
					description : "Chosen when summoned: acid, cold, fire, lightning, or poison damage."
				}, {
					name : "Infused Strikes",
					description : "As a reaction when another creature within 30 ft of the drake that it can see hits with a weapon attack, the drake can infuse the strike with its essence, causing the attack to deal an extra 1d6 damage of its chosen Draconic Essence damage type"
				}, {
					name : "Bond of Fang and Scale (Drakewarden 7)",
					minlevel : 7,
					description : "The drake is now Medium and can be ridden as a mount. It has a flying speed equal to its walking speed, but can't fly with a rider on its back. The drake's bite deals an extra 1d6 damage of its chosen Draconic Essence type.",
					eval : function(prefix, lvl) {
						var sMoveStr = (typePF ? ",\n" : ", ") + "fly 40 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
						AddString(prefix + "Comp.Use.Attack.1.Description", "+1d6 damage of the chosen Draconic Essense type");
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
					},
					removeeval : function(prefix, lvl) {
						var sMoveStr = (typePF ? ",\n" : ", ") + "fly 40 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
						var sAtkFld = prefix + "Comp.Use.Attack.1.Description";
						Value(sAtkFld, What(sAtkFld).replace(/\+\d+d6 damage of the chosen Draconic Essense type/i, ''));
						PickDropdown(prefix + "Comp.Desc.Size", 4); // Small
					}
				}, {
					name : "Perfected Bond (Drakewarden 15)",
					minlevel : 15,
					description : "The drake is now Large and can fly while its being ridden. Its bite attack deals an extra 1d6 damage (for a total of +2d6) of its chosen Draconic Essence type.",
					eval : function(prefix, lvl) {
						var sAtkFld = prefix + "Comp.Use.Attack.1.Description";
						Value(sAtkFld, What(sAtkFld).replace(/\+\d+d6 damage of the chosen Draconic Essense type/i, '+2d6 damage of the chosen Draconic Essense type'));
						PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
					},
					removeeval : function(prefix, lvl) {
						var sAtkFld = prefix + "Comp.Use.Attack.1.Description";
						Value(sAtkFld, What(sAtkFld).replace(/\+\d+d6 damage of the chosen Draconic Essense type/i, '+1d6 damage of the chosen Draconic Essense type'));
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
					}
				}],
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.ranger_ua23pt6 && !classes.known.rangerua) return;
						var rngrLvl = classes.known.ranger_ua23pt6 ? classes.known.ranger_ua23pt6.level : classes.known.rangerua.level;
						var rngrLvlM = 5 * rngrLvl;
						HDobj.alt.push(5 + rngrLvlM);
						HDobj.altStr.push(" = 5 as a base\n + 5 \xD7 " + rngrLvl + " from five times its warden's ranger level (" + rngrLvlM + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature7" : {
			name : "Bond of Fang and Scale",
			source : [["FToD", 15]],
			minlevel : 7,
			description : desc([
				"My drake is now Medium, has a 40 ft fly speed, and can be ridden, but not while flying",
				"The drake's bite attack deals an extra 1d6 damage chosen by its Draconic Essense",
				"While it is summoned, I gain resistance to the damage type of its Draconic Essense"
			]),
			dmgres : ["(See Drake)"]
		},
		"subclassfeature11" : {
			name : "Drake's Breath",
			source : [["FToD", 15]],
			minlevel : 11,
			description : desc([
				"As an action, I can cause my drake or myself to exhale a 30-ft cone breath weapon",
				"Its damage type is acid, cold, fire, lightning, or poison; Dex save to halve the damage",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			additional : levels.map(function (n) {
				return n < 11 ? "" : (n < 15 ? 8 : 10) + "d6 damage";
			}),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
			weaponsAdd : ["Drake's Breath"],
			weaponOptions : {
				regExpSearch : /^(?=.*drake)(?=.*breath).*$/i,
				name : "Drake's Breath",
				source : [["FToD", 15]],
				ability : 5,
				type : "Natural",
				damage : [8, 6, "My choice"],
				range : "30-ft cone",
				description : "Hits all in area; Dex save for half damage; Damage type: acid, cold, fire, lightning, or poison",
				abilitytodamage : false,
				dc : true,
				useSpellMod : "ranger_ua23pt6",
				DrakewardenDrakeBreath : true
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.DrakewardenDrakeBreath && (classes.known.rangerua || classes.known.ranger_ua23pt6)) {
							var rngrLvl = classes.known.ranger_ua23pt6 ? classes.known.ranger_ua23pt6.level : classes.known.rangerua.level;
							fields.Damage_Die = (rngrLvl < 15 ? 8 : 10) + 'd6';
						};
					},
					"",
					1
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.theWea.DrakewardenDrakeBreath && classes.known.rangerua) {
							v.theWea.useSpellMod = "rangerua";
						}
					}
				]
			}
		},
		"subclassfeature15" : {
			name : "Perfected Bond",
			source : [["FToD", 15]],
			minlevel : 15,
			description : desc([
				"My drake is now Large, can serve as a mount, and adds another +1d6 damage to its bite",
				"As a reaction when the drake or I take damage while within 30 ft of each other,",
				"I can give myself or the drake resistance to that instance of damage",
			]),
			action : [["reaction", ""]],
			usages : "proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : "reaction"
		}
	}
});
AddSubClass("ranger_ua23pt6", "deep stalker-ua", {
	regExpSearch : /^(?=.*deep)(?=.*stalker).*$/i,
	subname : "Deep Stalker",
	source : [["UA:LDU", 1]],
	fullname : "Deep Stalker",
	features : {
		"subclassfeature3" : {
			name : "Underdark Scout",
			source : [["UA:LDU", 1]],
			minlevel : 3,
			description : "\n   " + "In the first turn of combat I have +10 ft speed and +1 attack with the Attack action" + "\n   " + "All turns after that, I can take the Hide action as a bonus action at the end of my turn",
			action : ["bonus action", " (Hide at end of turn)"]
		},
		"subclassfeature3.1" : {
			name : "Deep Stalker Magic",
			source : [["UA:LDU", 2]],
			minlevel : 3,
			description : "\n   " + "I have 90 ft darkvision and add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know",
			spellcastingExtra : ["disguise self", "rope trick", "glyph of warding", "greater invisibility", "seeming"],
			spellcastingExtraApplyNonconform : true,
			vision : [["Darkvision", 90]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : [["UA:LDU", 2]],
			minlevel : 7,
			description : "\n   " + "I am proficient with Wisdom saving throws",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : [["UA:LDU", 2]],
			minlevel : 11,
			description : "\n   " + "Once during my turn when I miss an attack, I can immediately make an extra attack"
		},
		"subclassfeature15" : {
			name : "Stalker's Dodge",
			source : [["UA:LDU", 2]],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : ["reaction", " (when attacked)"]
		}
	}
});

// Add Rogue subclasses
AddSubClass("rogue_ua23pt6", "mastermind", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*(mastermind)).*$/i,
	subname : "Mastermind",
	fullname : "Mastermind",
	source : [["S", 135], ["X", 46]],
	features : {
		"subclassfeature3" : {
			name : "Master of Intrigue",
			source : [["S", 135], ["X", 46]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages",
				"I can mimic speech patterns and accents if I've heard them for at least 1 minute"
			]),
			languageProfs : [2],
			toolProfs : ["Disguise kit", "Forgery kit", ["Gaming set", 1]]
		},
		"subclassfeature3.1" : {
			name : "Master of Tactics",
			source : [["S", 135], ["X", 46]],
			minlevel : 3,
			description : desc([
				"I can use the Help action as a bonus action",
				"This even works if the ally attacks a target within 30 ft of me that can see or hear me"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Insightful Manipulator",
			source : [["S", 135], ["X", 46]],
			minlevel : 9,
			description : desc([
				"By spending 1 minute observing/interacting outside of combat I can learn capabilities",
				"The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
				" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)"
			])
		},
		"subclassfeature13" : {
			name : "Misdirection",
			source : [["S", 135], ["X", 46]],
			minlevel : 13,
			description : desc([
				"As a reaction, I can redirect an attack meant for me to a creature within 5 ft of me",
				"This only works if the creature is providing me with cover against the attack"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature17" : {
			name : "Soul of Deceit",
			source : [["S", 135], ["X", 46]],
			minlevel : 17,
			description : desc([
				"My thoughts can't be read by telepathy or similar means; I can project false thoughts",
				"For that, I must pass a Cha (Deception) vs. Wis (Insight) check to fool the mind reader",
				"Magic always determines I'm truthful; I can't be magically compelled to tell the truth"
			])
		}
	}
});
AddSubClass("rogue_ua23pt6", "inquisitive", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*inquisitive).*$/i,
	subname : "Inquisitive",
	source : [["X", 45]],
	features : {
		"subclassfeature3" : {
			name : "Ear for Deceit",
			source : [["X", 45]],
			minlevel : 3,
			description : "\n   " + "For Wis (Insight) to sense if another is lying, I can treat a die roll of 7 or lower as an 8"
		},
		"subclassfeature3.1" : {
			name : "Eye for Detail",
			source : [["X", 46]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can do either of the following:",
				"\u2022 Make a Wisdom (Perception) check to spot a hidden creature or object",
				"\u2022 Make an Intelligence (Investigation) check to uncover or decipher clues"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Insightful Fighting",
			source : [["X", 46]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can decipher the tactics of another I can see that's not incapacitated",
				"I have to make a Wisdom (Insight) check vs. the target's Charisma (Deception) check",
				"If I succeed, I can use my sneak attack on it even if I don't have adv. (but not if disadv.)",
				"This benefit lasts for 1 minute or until I successfully use Insightful Fighting again"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Steady Eye",
			source : [["X", 46]],
			minlevel : 9,
			description : desc([
				"I'm more perceptive when I don't move more than half my speed in the same turn",
				"If so, I gain adv. on Wis (Perception) and Int (Investigation) checks during that turn"
			])
		},
		"subclassfeature13" : {
			name : "Unerring Eye",
			source : [["X", 46]],
			minlevel : 13,
			description : desc([
				"As an action, I can sense magical deceptions within 30 feet of me, but not what it does",
				"I learn the presence of illusions, shapechanged creatures, or magic designed to deceive"
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Eye for Weakness",
			source : [["X", 46]],
			minlevel : 17,
			description : "\n   " + "While my Insightful Fighting is active, I add 3d6 to sneak attacks against that target"
		}
	}
});
AddSubClass("rogue_ua23pt6", "scout", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : [["X", 47]],
	features : {
		"subclassfeature3" : {
			name : "Skirmisher",
			source : [["X", 47]],
			minlevel : 3,
			description : desc([
				"As a reaction when a hostile ends its turn within 5 ft of me, I can move half my speed",
				"This movement does not provoke attacks of opportunity"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature3.1" : {
			name : "Survivalist",
			source : [["X", 47]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency and expertise with the Nature and Survival skills",
			skills : [['Nature', 'full'], ['Survival', 'full']]
		},
		"subclassfeature9" : {
			name : "Superior Mobility",
			source : [["X", 47]],
			minlevel : 9,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : {
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature13" : {
			name : "Ambush Master",
			source : [["X", 47]],
			minlevel : 13,
			description : desc([
				"I gain advantage on Initiative rolls",
				"The first creature I hit in the first round of combat becomes an easy target",
				"Until the start of my next turn, all attacks against the target have advantage"
			]),
			advantages : [["Initiative", true]]
		},
		"subclassfeature17" : {
			name : "Sudden Strike",
			source : [["X", 47]],
			minlevel : 17,
			description : desc([
				"With the Attack action, I can make one additional attack as a bonus action",
				"This attack can benefit from my Sneak Attack even if I already used it this turn",
				"However, I still can't use Sneak Attack on a single target more than once per turn"
			]),
			action : ["bonus action", " (with Attack action)"]
		}
	}
});
AddSubClass("rogue_ua23pt6", "phantom", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*phantom).*$/i,
	subname : "Phantom",
	source : [["T", 62]],
	fullname : "Phantom",
	features : {
		"subclassfeature3" : {
			name : "Whispers of the Dead",
			source : [["UA:SR", 1]],
			source : [["T", 62]],
			minlevel : 3,
			description : desc([
				"When I finish a rest, I gain a skill or tool proficiency of my choice until I change it again"
			]),
			skillstxt : "Choose one skill or tool; I can change the choice whenever I finish a short or long rest"
		},
		"subclassfeature3.1" : {
			name : "Wails from the Grave",
			source : [["T", 62]],
			minlevel : 3,
			description : levels.map(function (n) {
				var a = [
					"Directly after I deal sneak attack damage to a creature on my turn, I " + (n < 17 ? "can" : "also") + " harm another",
					n < 17 ? "I then deal half my sneak attack in necrotic damage to a creature I can see within 30 ft" : "I deal half my sneak attack in necrotic damage to both it and another I can see in 30 ft"
				];
				if (n >= 9) a.push("I can do this my Proficiency Bonus per long rest, or by destroying a soul trinket (ST)");
				return desc(a);
			}),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return Math.ceil(n / 4) + "d6";
			}),
			altResource : levels.map(function (n) {
				return n < 9 ? "" : "ST";
			})
		},
		"subclassfeature9" : {
			name : "Tokens of the Departed",
			source : [["T", 63]],
			minlevel : 9,
			description : " [max Proficiency Bonus of soul trinkets]" + desc([
				"As a reaction when I see a creature within 30 ft die, I can create a Tiny soul trinket",
				"The token of its life essence appears in my free hand; The DM determines its appearance",
				"While a soul trinket is on my person, I have advantage on death and Constitution saves",
				"As an action, I can destroy one of my soul trinkets and ask its associated spirit a question",
				"Its spirit appears and answers concisely in a language it knew; Trinket can be anywhere"
			]),
			action : [
				["reaction", "Create Soul Trinket"],
				["action", "Destroy Soul Trinket"]
			],
			extraLimitedFeatures : [{
				name : "Soul Trinkets (max Prof Bonus)",
				usages : "",
				recovery : "Special"
			}],
			savetxt : { text : ["While soul trinket is on me, Adv. on Con and death saves"] }
		},
		"subclassfeature13" : {
			name : "Ghost Walk",
			source : [["T", 63]],
			minlevel : 13,
			description : desc([
				"As a bonus action, I can assume a spectral form with 10 ft flying speed and can hover",
				"Attacks vs. me have disadv.; I can move through creatures and objects as difficult terrain",
				"This lasts 10 min; I take 1d10 force damage if I end my turn inside a creature or object",
				"I can assume this form once per long rest, or by destroying one of my soul trinkets (ST)"
			]),
			action : [["bonus action", " (start/end)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "ST"
		},
		"subclassfeature17" : {
			name : "Death's Friend",
			source : [["T", 63]],
			minlevel : 17,
			description : desc([
				"Wails from the Grave now also deals damage to the target of the original sneak attack",
				"If I don't have any soul trinkets at the end of a long rest, one appears in my hand"
			])
		}
	}
});
AddSubClass("rogue_ua23pt6", "soulknife", {
	regExpSearch : /soulknife/i,
	subname : "Soulknife",
	source : [["T", 63]],
	fullname : "Soulknife",
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Psionic Energy Dice",
			source : [["T", 64]],
			minlevel : 3,
			description : desc([
				"I gain twice my proficiency bonus of psionic energy dice (PsiD) that fuel my psionics",
				"I regain all expended psionic energy dice after a long rest; See psionic powers on page 3",
				"As a bonus action once per short rest, I can regain one expended psionic energy die"
			]),
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 5 ? "d6" : n < 11 ? "d8" : n < 17 ? "d10" : "d12";
			}),
			action : [["bonus action", "Regain 1 Psionic Energy Die"]],
			usages : "Proficiency Bonus \xD7 2 per ",
			usagescalc : "event.value = Number(How('Proficiency Bonus'))*2",
			recovery : "long rest",
			extraLimitedFeatures : [{
				name : "Regain 1 Psionic Energy die",
				usages : 1,
				recovery : "short rest"
			}],
			extraname : "Soulknife 3",
			"psi-bolstered knack" : {
				name : "Psionic Power: Psi-Bolstered Knack",
				source : [["T", 64]],
				description : " [1 PsiD if successful]" + desc([
					"If I fail an check using a skill or tool I'm proficient with, I can add a psionic energy die to it",
					"The psionic energy die is only expended if this addition turns the failure into a success"
				])
			},
			"psychic whispers" : {
				name : "Psionic Power: Psychic Whispers",
				source : [["T", 64]],
				description : desc([
					"As an action, I can select my Prof Bonus of creatures I can see and roll a psionic energy die",
					"For the roll of hours, I can telepathically communicate with each and they with me",
					"To send or receive messages (no action), we must be within 1 mile of each other",
					"A creature must be able to speak a language to do this; It can end the link at any time",
					"The first time I do this after a long rest, I don't expend the psionic energy die (PsiD)"
				]),
				limfeaname : "Psychic Whispers",
				action : [["action", ""]],
				usages : 1,
				recovery : "long rest",
				altResource : "PsiD"
			},
			autoSelectExtrachoices : [{
				extrachoice : "psi-bolstered knack"
			}, {
				extrachoice : "psychic whispers"
			}]
		},
		"subclassfeature3.1" : {
			name : "Psychic Blades",
			source : [["T", 64]],
			minlevel : 3,
			description : desc([
				"As part of an Attack action, I can manifest a psychic blade from a free hand to attack",
				"It vanishes immediately after making the attack and leaves no mark on its target",
				"As a bonus action after this attack, I can manifest and attack with another psychic blade",
				"To do this, my other hand needs to be free as well and this blade does only 1d4 damage"
			]),
			action : [["bonus action", "Psychic Blade (after Attack action)"]],
			weaponsAdd : ["Psychic Blade"],
			weaponOptions : [{
				regExpSearch : /^(?=.*psychic)(?=.*blade).*$/i,
				name : "Psychic Blade",
				source : [["T", 64]],
				ability : 1,
				type : "Simple",
				damage : [1, 6, "psychic"],
				range : "Melee, 60 ft",
				description : "Finesse, thrown; Bonus action: 1d4 instead of 1d6",
				abilitytodamage : true
			}]
		},
		"subclassfeature9" : {
			name : "Soul Blades",
			source : [["T", 65]],
			minlevel : 9,
			description : desc([
				"My psi-suffused soul grants me more psionic powers, see the 3rd page's \"Notes\" section"
			]),
			extraname : "Soulknife 9",
			"homing strikes" : {
				name : "Homing Strikes",
				source : [["T", 65]],
				description : " [1 PsiD if successful]" + desc([
					"If I miss an attack with my psychic blades, I can add a psionic energy die to the attack roll",
					"The psionic energy die is only expended if this addition turns the miss into a hit"
				])
			},
			"psychic teleportation" : {
				name : "Psychic Teleportation",
				source : [["T", 65]],
				description : " [1 PsiD]" + desc([
					"As a bonus action, I can teleport up to 10 ft away times the roll of my psionic energy die",
					"I manifest a psychic blade and throw it to an empty space I can see before teleporting to it"
				]),
				action : [["bonus action", ""]]
			},
			autoSelectExtrachoices : [{
				extrachoice : "homing strikes"
			}, {
				extrachoice : "psychic teleportation"
			}]
		},
		"subclassfeature13" : {
			name : "Psychic Veil",
			source : [["T", 65]],
			minlevel : 13,
			description : desc([
				"As an action, I can become invisible along with what I'm wearing or carrying for 1 hour",
				"I can end it (no action); It also ends if I damage a creature or force one to make a save",
				"I can do this once per long rest, or by expending a psionic energy die (PsiD)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "PsiD"
		},
		"subclassfeature17" : {
			name : "Rend Mind",
			source : [["T", 65]],
			minlevel : 17,
			description : desc([
				"When I use my psychic blade to deal sneak attack damage to a target, I can have it save",
				"It must make a Wisdom save (DC 8 + Prof Bonus + Dex mod) or be stunned for 1 min",
				"It can repeat the save at the end of each of its turns to end being stunned",
				"I can do this once per long rest, or by expending three psionic energy dice (3 PsiD)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "3 PsiD"
		}
	}
});
AddSubClass("rogue_ua23pt6", "the revived-ua", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*revived).*$/i,
	subname : "the Revived",
	source : [["UA:FRnR", 4]],
	features : {
		"subclassfeature3" : {
			name : "Tokens of Past Lives",
			source : [["UA:FRnR", 4]],
			minlevel : 3,
			description : "\n   I gain a chosen skill or tool proficiency and can change it whenever I finish a long rest",
			skillstxt : "Choose one skill or tool; I can change the choice whenever I finish a long rest"
		},
		"subclassfeature3.1" : {
			name : "Revived Nature",
			source : [["UA:FRnR", 4]],
			minlevel : 3,
			description : desc([
				"I have resistance to poison damage and adv. on saves against disease and being poisoned",
				"I don't need to eat, drink, breathe, or sleep; I must spend 4 hours inactive for a long rest",
				"I'm motionless during this inactive state, remain semiconscious, and can hear as normal"
			]),
			dmgres : ["Poison"],
			savetxt : { adv_vs : ["disease", "poison"] }
		},
		"subclassfeature3.2" : {
			name : "Bolts from the Grave",
			source : [["UA:FRnR", 5]],
			minlevel : 3,
			description : desc([
				"Immediately after I use my cunning action, I can unleash bolts of necrotic energy",
				"This is a ranged spell attack with 30 ft range, which I'm proficient with, using Dexterity",
				"If it hits, it deals my sneak attack damage, provided I didn't use sneak attack this turn"
			]),
			weaponsAdd : ["Bolts from the Grave"],
			weaponOptions : [{
				regExpSearch : /^(?=.*bolts?)(?=.*grave).*$/i,
				name : "Bolts from the Grave",
				source : [["UA:FRnR", 5]],
				ability : 2,
				type : "Spell",
				damage : [1, 6, "necrotic"],
				range : "30 ft",
				description : "Immediately after using cunning action; Only if I not yet used sneak attack this turn",
				abilitytodamage : true,
				isBoltsFromTheGrave : true
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.rogue && classes.known.rogue.level && v.theWea.isBoltsFromTheGrave) {
							fields.Damage_Die = Math.ceil(classes.known.rogue.level / 2) + 'd6';
						};
					}
				]
			}
		},
		"subclassfeature9" : {
			name : "Connect with the Dead",
			source : [["UA:FRnR", 5]],
			minlevel : 9,
			description : desc([
				"I can cast Speak with Dead without a spell slot or material components using Intelligence",
				"Doing this gives me a random proficiency (roll 1d3) that lasts until I finish my next rest:",
				"[1] language of my choice; [2] skill or tool of my choice; [3] saving throw of my choice"
			]),
			spellcastingBonus : {
				name : "Connect with the Dead",
				spells : ["speak with dead"],
				selection : ["speak with dead"],
				firstCol : "oncesr",
				spellcastingAbility : 4
			},
			spellChanges : {
				"speak with dead" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Connect with the Dead, I can cast Speak with Dead once per short rest without using a spell slot or material component."
				}
			},
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature13" : {
			name : "Audience with Death",
			source : [["UA:FRnR", 5]],
			minlevel : 13,
			description : desc([
				"I have adv. on death saves; Whenever I make one, I can ask a question to a death entity",
				'It answers truthfully with "yes", "no", or "unknown", using the knowledge of all that died',
				"When at 0 HP and healed or stabilized, I can change any of my traits/ideals/bonds/flaws"
			]),
			savetxt : { text : ["Adv. on death saves"] },
			autoSelectExtrachoices : [{
				extrachoice : "ethereal jaunt",
				minlevel : 17
			}],
			"ethereal jaunt" : {
				name : "Ethereal Jaunt",
				source : [["UA:FRnR", 5]],
				extraname : "the Revived 17",
				description : desc([
					"I can now use my cunning action to teleport to an unoccupied space within 30 ft",
					"I don't need to see where I'm going, but it fails if I'd go through a magical force effect",
					"I'm shunted if I appear in an occupied space and take force damage of 2\xD7 the ft moved"
				])
			}
		}
	}
});

// Add Sorcerer subclasses
// Clockwork Soul Sorcerer gets the following UA22CS spells: "aid ua22cs"


// Add Warlock subclasses


// Add Wizard subclasses

