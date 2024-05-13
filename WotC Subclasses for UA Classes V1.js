/*	-INFORMATION-
	Subject:	Subclasses
	Effect:		This script adds the official WotC subclasses to the 2022-2023 series of Unearthed Arcana articles, altering them to be in accordance with the UA subclass progressions.
				This file has been compiled by MasterJedi2014, ripping almost all of its code from MPMB and those who have contributed to the sheet's existing material.
	Code by:	MorePurpleMoreBetter & contributors
	Date:		2024-05-13 (sheet v13.1.0)
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
AddSubClass("fighter_ua23pt7", "purple dragon knight", {
	regExpSearch : /^(((?=.*purple)(?=.*dragon)(?=.*knight))|(?=.*banneret)).*$/i,
	subname : "Purple Dragon Knight",
	fullname : "Purple Dragon Knight",
	source : [["S", 128]],
	features : {
		"subclassfeature3" : {
			name : "Rallying Cry",
			source : [["S", 128]],
			minlevel : 3,
			description : "\n   " + "When I use Second Wind, I also heal three allies within 60 ft that can see or hear me",
			additional : levels.map(function (n) {
				return n < 3 ? "" : n + " HP";
			}),
			action : [["bonus action", "Second Wind (+Rallying Cry)", "Second Wind"]]
		},
		"subclassfeature7" : {
			name : "Royal Envoy",
			source : [["S", 128]],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with the Persuasion skill and I gain expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Performance",
			skillstxt : "Persuasion proficiency and expertise; If already proficient, choose one from Animal Handling, Insight, Intimidation, or Performance",
			skills : ["Persuasion", "full"]
		},
		"subclassfeature10" : {
			name : "Inspiring Surge",
			source : [["S", 128]],
			minlevel : 10,
			description : "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
			additional : levels.map(function (n) {
				return n < 10 ? "" : n < 18 ? "1 ally" : "2 allies"; // level 18 per errata
			})
		},
		"subclassfeature15" : {
			name : "Bulwark",
			source : [["S", 128]],
			minlevel : 15,
			description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same effect and take the result" + "\n   " + "It only works if not incapacitated and the ally is within 60 ft and can see or hear me"
		}
	}
});
AddSubClass("fighter_ua23pt7", "arcane archer", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : [["X", 28]],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Arcane Archer's Lore",
			source : [["X", 28]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with either the Arcana or Nature skill",
				"I also learn either the Prestidigitation or the Druidcraft cantrip"
			]),
			skillstxt : "Arcana or Nature",
			spellcastingBonus : {
				name : "Arcane Archer's Lore",
				spells : ["druidcraft", "prestidigitation"]
			},
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : [["X", 28]],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire an arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				'Use the "Choose Feature" button above to add Arcane Shots Options to the third page'
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Beguiling Arrow [Enchantment]", "Bursting Arrow [Evocation]", "Enfeebling Arrow [Necromancy]", "Grasping Arrow [Conjuration]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6;
			}),
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : [["X", 29]],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"beguiling arrow [enchantment]" : {
				name : "Beguiling Arrow [Enchantment]",
				source : [["X", 29]],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it is charmed by one of my allies within 30 ft of it that I choose",
					"This lasts until my next turn starts or until the chosen ally attacks the target in any way"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : [["X", 29]],
				description : "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"enfeebling arrow [necromancy]" : {
				name : "Enfeebling Arrow [Necromancy]",
				source : [["X", 29]],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks are halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : [["X", 29]],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : [["X", 29]],
				description : desc([
					"With this I don't roll for the attack, but shoot the arrow in a 30-ft long, 1-ft wide line",
					"It passes through objects, ignoring cover, but all creatures in the area take damage",
					"The damage is the same as a normal hit from my attack, plus extra piercing damage",
					"A creature can make a Dexterity save to reduce the damage by half"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 piercing damage"; })
			},
			"seeking arrow [divination]" : {
				name : "Seeking Arrow [Divination]",
				source : [["X", 30]],
				description : desc([
					"With this I don't roll for the attack, but I choose a target I have seen in the last minute",
					"The seeking arrow moves around corners, obstacles, and ignores cover to hit the target",
					"It is hit if it is within the weapon's range and there is a path for the arrow to get to it",
					"The target takes the full damage of the attack plus extra force damage",
					"It can make a Dexterity save to reduce the damage by half; If failed, I know its location"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 force damage"; })
			},
			"shadow arrow [illusion]" : {
				name : "Shadow Arrow [Illusion]",
				source : [["X", 30]],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psychic damage"; })
			}
		},
		"subclassfeature7" : {
			name : "Magic Arrow",
			source : [["X", 28]],
			minlevel : 7,
			description : "\n   " + "Whenever I fire a nonmagical arrow from a short- or longbow, I can make it magical"
		},
		"subclassfeature7.1" : {
			name : "Curving Shot",
			source : [["X", 28]],
			minlevel : 7,
			description : desc([
				"Once per turn when I miss with a magic arrow, I can use a bonus action to redirect it",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : [["X", 28]],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter_ua23pt7", "cavalier", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : [["X", 30]],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["X", 30]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				'Alternatively, I learn one language; Use the "Choose Feature" button above for this'
			]),
			choices : ["Language proficiency", "Skill proficiency: Animal Handling, History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: animal handling, history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				skillstxt : "Choose one from: Animal Handling, History, Insight, Performance, or Persuasion"
			}
		},
		"subclassfeature3.1" : {
			name : "Born in the Saddle",
			source : [["X", 30]],
			minlevel : 3,
			description : desc([
				"I have advantage on saves to avoid falling off my mount, and land on my feet if I fail",
				"Mounting or dismounting a creature costs me only 5 ft of movement instead of half"
			]),
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Unwavering Mark",
			source : [["X", 30]],
			minlevel : 3,
			description : desc([
				"If I hit a creature with a melee weapon attack, I mark it until the end of my next turn",
				"While it is within 5 ft of me, a marked target has disadv. on attacks not directed at me",
				"If it damages anybody but me, I can make a special melee attack vs. it in my next turn",
				"This takes a bonus action, but has adv. and adds half my fighter level to the damage",
				"A mark ends early if I'm incapacitated, die, or somebody else marks the target"
			]),
			usages : "Strength modifier per ",
			usagescalc : "event.value = Math.max(1, What('Str Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + Math.floor(n/2) + " damage";
			}),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/\b(unwavering.?mark|marked)\b/i).test(v.WeaponTextName)) {
							output.extraDmg += Math.floor(classes.known.fighter.level / 2);
						};
					},
					"If I include the words 'Unwavering Mark' or 'Marked' in the name of a melee weapon, it gets half my fighter level added to its Damage."
				]
			}
		},
		"subclassfeature7" : {
			name : "Warding Maneuver",
			source : [["X", 30]],
			minlevel : 7,
			description : desc([
				"As a reaction when I or a creature within 5 ft is hit, I can try to fend off the strike",
				"I add 1d8 to the target's AC; If the attack still hits, the target has resistance against it",
				"I can only do this while wielding a melee weapon or a shield"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest",
			action : ["reaction", ""],
		},
		"subclassfeature10" : {
			name : "Hold the Line",
			source : [["X", 30]],
			minlevel : 10,
			description : desc([
				"Creatures provoke opportunity attacks when moving 5 ft or more while within my reach",
				"If I hit an opportunity attack, the target's speed is reduced to 0 until the end of the turn"
			])
		},
		"subclassfeature15" : {
			name : "Ferocious Charger",
			source : [["X", 31]],
			minlevel : 15,
			description : desc([
				"If I hit a creature after moving 10 ft in a straight line, it must make a Strength save",
				"If failed, the target is knocked prone; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Vigilant Defender",
			source : [["X", 31]],
			minlevel : 18,
			description : desc([
				"I can make opportunity attacks without using my reaction",
				"I can do this only once on every creature's turn, except on my own turn",
				"I can't do this on the same turn that I use my normal reaction"
			])
		}
	}
});
AddSubClass("fighter_ua23pt7", "samurai", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : [["X", 31]],
	fullname : "Samurai",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["X", 31]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with History, Insight, Performance, or Persuasion",
				'Alternatively, I learn one language; Use the "Choose Feature" button above for this'
			]),
			choices : ["Language proficiency", "Skill proficiency: History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with History, Insight, Performance, or Persuasion",
				skillstxt : "Choose one from: History, Insight, Performance, or Persuasion"
			}
		},
		"subclassfeature3.1" : {
			name : "Fighting Spirit",
			source : [["X", 31]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can give myself advantage on weapon attacks and temporary HP",
				"This advantage on weapon attack rolls lasts until the end of my current turn"
			]),
			recovery : "long rest",
			usages : 3,
			additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 5 : n < 15 ? 10 : 15) + " temporary HP"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Elegant Courtier",
			source : [["X", 31]],
			minlevel : 7,
			description : desc([
				"I can add my Wisdom modifier to any Charisma (Persuasion) checks I make",
				"I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves"
			]),
			saves : ["Wis"],
			addMod : { type : "skill", field : "Pers", mod : "max(Wis|0)", text : "I can add my Wisdom modifier to any Charisma (Persuasion) checks I make." }
		},
		"subclassfeature10" : {
			name : "Tireless Spirit",
			source : [["X", 31]],
			minlevel : 10,
			description : "\n   " + "I regain one use of Fighting Spirit if I have no more remaining when I roll initiative"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : [["X", 31]],
			minlevel : 15,
			description : desc([
				"With the Attack action, I can forgo advantage on one attack to make one extra attack",
				"This extra attack is part of the same action; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Strength Before Death",
			source : [["X", 31]],
			minlevel : 18,
			description : desc([
				"If I'm reduced to 0 HP but not killed outright, I can delay falling unconscious",
				"I then immediately take a bonus turn, interrupting the current turn",
				"While I'm at 0 HP, I suffer damage normally and die if I have 3 failed death saves",
				"If I'm still at 0 HP at the end of this bonus turn, I fall unconscious"
			]),
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("fighter_ua23pt7", "echo knight", { // contains contributions by Smashman, @Nod_Hero#2046 (Discord), BraabHimself, and TysonJouglet
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green))(?=.*(knight|fighter|warrior|militant|warlord|phalanx|gladiator|trooper))(?=.*(echo|mirror|mirage|reflection)).*$/i,
	subname : "Echo Knight",
	source : [["W", 183]],
	fullname : "Echo Knight",
	features : {
		"subclassfeature3" : {
			name : "Manifest Echo",
			source : [["W", 183]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can magically manifest a translucent image of myself within 15 ft",
				"My echo lasts until I dismiss it as a bonus action, I manifest another, or I'm incapacitated",
				"It is also destroyed if it is more than 30 ft away from me at the end of my turn",
				"It has 1 HP, immunity to all conditions, uses my save bonuses, and AC 14 + Prof Bonus",
				"On my turn as a free action, I can command it to move up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action on my turn, I can have any attack originate from my echo",
				"I can also make opportunity attacks from the echo's location as if I were in its space"
			]),
			action : [["bonus action", " (summon/dismiss)"], ["bonus action", "Swap Location with Echo"]],
			creaturesAdd : [["Echo"]],
			creatureOptions : [{
				name : "Echo",
				source : [["W", 183]],
				size : 3,
				type : "Echo",
				alignment : "",
				ac : "14+oProf",
				hp : 1,
				hd : [],
				speed : "fly 30 ft (hover)",
				scores : ["", "", "", "", "", ""],
				savesLinked : true,
				condition_immunities : "all conditions",
				passivePerception : 0,
				languages : "",
				senses : "",
				challengeRating : "0",
				proficiencyBonus : 0,
				attacksAction : 0,
				attacks : [],
				features : [{
					name : "Echo",
					description : "The echo is a magical, translucent, gray image of its creator that doesn't act and has no turn in combat. It lasts until it is destroyed, dismissed, another is manifested, or its creator is incapacitated. The echo is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The echo's creator can, as a bonus action, teleport, magically swapping places with the echo at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the echo's creator takes the Attack action on their turn, any attack they make with that action can originate from the echo's space. This choice is made for each attack separately.\n   In addition, when a creature that the echo's creator can see within 5 ft of the echo moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack against that creature as if its creator was in the echo's space."
				}],
				header : "Echo",
				eval : function(prefix, lvl) {
					// Same size as character
					PickDropdown(prefix + "Comp.Desc.Size", tDoc.getField("Size Category").currentValueIndices);
					Value(prefix + "Comp.Desc.Age", What("Age"));
					Value(prefix + "Comp.Desc.Sex", What("Sex"));
					Value(prefix + "Comp.Desc.Height", What("Height"));
					Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
				}
			}]
		},
		"subclassfeature3.1" : {
			name : "Unleash Incarnation",
			source : [["W", 183]],
			minlevel : 3,
			description : desc([
				"When I use the Attack action, I can make one extra melee attack from my echo's position"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Echo Avatar",
			source : [["W", 183]],
			minlevel : 7,
			description : desc([
				"As an action, I can temporarily transfer my consciousness to my echo for up to 10 min",
				"During this time, I see and hear through its eyes and ears, but not my own eyes and ears",
				"While I use my echo this way, it can be up to 1000 ft away from me without issue",
				"I can end this at any time, requiring no action"
			]),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Shadow Martyr",
			source : [["W", 183]],
			minlevel : 10,
			description : desc([
				"As a reaction when a creature I can see is attacked, I can make my echo the target",
				"Before the attack roll, the echo teleports to an empty space within 5 ft of the creature",
				"The attack roll of the triggering attack is then made against the echo instead"
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Reclaim Potential",
			source : [["W", 184]],
			minlevel : 15,
			description : desc([
				"When my echo is destroyed by taking damage, I gain 2d6 + my Con mod in temp HP",
				"I can only gain these temporary hit points if I don't already have temporary hit points"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Legion of One",
			source : [["W", 184]],
			minlevel : 18,
			description : desc([
				"I can now manifest two echoes instead of one with the same bonus action",
				"These two can coexist, but if I manifest a third, the previous two are destroyed",
				"Anything I can do from one echo's position can be done from the other's instead",
				"I regain one use of Unleash Incarnation if I have no more remaining when I roll initiative"
			])
		}
	}
});
AddSubClass("fighter_ua23pt7", "psi warrior", {
	regExpSearch : /^(?=.*\bpsi(onic)?s?\b)(?=.*warrior).*$/i,
	subname : "Psi Warrior",
	source : [["T", 42]],
	fullname : "Psi Warrior",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Psionic Energy Dice",
			source : [["T", 43]],
			minlevel : 3,
			description : desc([
				"I gain twice my proficiency bonus of psionic energy dice (PsiD) that fuel my psionics",
				"I regain all expended psionic energy dice after a long rest",
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
			}]
		},
		"subclassfeature3.1" : {
			name : "Psionic Power: Protective Field",
			source : [["T", 43]],
			minlevel : 3,
			description : " [1 psionic energy die]" + desc([
				"As a reaction when I or a creature I can see within 30 ft takes damage, I can reduce it",
				"I reduce the damage by the roll of the one psionic energy die I expend + my Int mod"
			]),
			action : [["reaction", "Protective Field"]]
		},
		"subclassfeature3.2" : {
			name : "Psionic Power: Psionic Strike",
			source : [["T", 43]],
			minlevel : 3,
			description : " [1 psionic energy die]" + desc([
				"Once on each of my turns after I hit a target in 30 ft and damage it with a weapon,",
				"I can expend a psionic energy die to deal it the die roll + my Int mod in force damage"
			])
		},
		"subclassfeature3.3" : {
			name : "Psionic Power: Telekinetic Movement",
			source : [["T", 43]],
			minlevel : 3,
			description : desc([
				"As an action, I can move a Large or smaller loose object or one willing creature in 30 ft",
				"I must be able to see the target and can move it up to 30 ft to an empty space I can see",
				"If it is a Tiny object, I can also move it to or from my hand; I can't move myself this way",
				"I can do this once per short rest, or by expending a psionic energy die (PsiD)"
			]),
			limfeaname : "Telekinetic Movement",
			action : [["action", ""]],
			usages : 1,
			recovery : "short rest",
			altResource : "PsiD"
		},
		"subclassfeature7.1" : {
			name : "Telekinetic Adept: Psi-Powered Leap",
			source : [["T", 43]],
			minlevel : 7,
			description : desc([
				"As a bonus action, I gain a flying speed of twice my walking speed until the turn ends",
				"I can do this once per short rest, or by expending a psionic energy die (PsiD)"
			]),
			limfeaname : "Psi-Powered Leap",
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "short rest",
			altResource : "PsiD"
		},
		"subclassfeature7.2" : {
			name : "Telekinetic Adept: Telekinetic Thrust",
			source : [["T", 43]],
			minlevel : 7,
			description : " [DC 8 + Prof B. + Int mod]" + desc([
				"When I deal damage with my Psionic Strike, I can have the target make a Strength save",
				"If failed, I knock the target prone or move it up to 10 ft in any direction horizontally"
			]),
		},
		"subclassfeature10" : {
			name : "Guarded Mind",
			source : [["T", 43]],
			minlevel : 10,
			description : desc([
				"I can expend a psionic energy die to end all effects on me causing charmed or frightened",
				"I can do this if at the start of my turn; I also gain resistance to psychic damage"
			]),
			dmgres : ["Psychic"]
		},
		"subclassfeature15" : {
			name : "Bulwark of Force",
			source : [["T", 44]],
			minlevel : 15,
			description : desc([
				"As a bonus action, I can choose up to my Int mod of creatures (min 1) I can see in 30 ft",
				"This can include me; Each chosen gains half cover for 1 minute or until I'm incapacitated",
				"I can do this once per long rest, or by expending a psionic energy die (PsiD)"
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "PsiD"
		},
		"subclassfeature18" : {
			name : "Telekinetic Master",
			source : [["T", 44]],
			minlevel : 18,
			description : desc([
				"I can cast Telekinesis, requiring no spell slot or components, with Int spellcasting ability",
				"As a bonus action while concentrating on this spell, I can make one weapon attack",
				"I can cast Telekinesis once per long rest, or by expending a psionic energy die (PsiD)"
			]),
			spellcastingBonus : {
				name : "Telekinetic Master",
				spells : ["telekinesis"],
				selection : ["telekinesis"],
				firstCol : "Sp"
			},
			spellChanges : {
				"telekinesis" : {
					components : "",
					changes : "Using Telekinetic Master, I can cast Telekinesis without requiring components or spell slots."
				}
			},
			action : [["bonus action", "Weapon Attack while Telekinesis conc."]],
			usages : 1,
			recovery : "long rest",
			altResource : "PsiD"
		}
	}
});
AddSubClass("fighter_ua23pt7", "rune knight", {
	regExpSearch : /^(?=.*rune)(?=.*knight).*$/i,
	subname : "Rune Knight",
	source : [["T", 44]],
	fullname : "Rune Knight",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["T", 44]],
			minlevel : 3,
			description : "\n   I gain proficiency with smith's tools and I learn to speak, read, and write Giant",
			toolProfs : ["Smith's tools"],
			languageProfs : ["Giant"]
		},
		"subclassfeature3.1" : {
			name : "Rune Carver",
			source : [["T", 44]],
			minlevel : 3,
			description : desc([
				"I learn how to use magic runes to enhance my gear that I can wear or hold in my hand",
				'Use the "Choose Feature" button above to select a rune and add it to the third page',
				"When I finish a long rest, I can inscribe each rune I know upon a different item I touch",
				"Each item can hold only one rune and remains there until I finish a long rest",
				"Runes inscribed on a carried object grant both a passive and a limited-use active effect",
				"Whenever I gain a fighter level, I can swap a rune I know for another",
				"The DC for a rune's abilities is 8 + my Proficiency bonus + my Constitution modifier"
			]),
			additional : levels.map(function (n){
				return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5) + " runes known"
			}),
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5;
			}),
			extraname : "Rune Knight 3",
			extrachoices : ["Cloud Rune", "Fire Rune", "Frost Rune", "Stone Rune", "Hill Rune (prereq: level 7 fighter)", "Storm Rune (prereq: level 7 fighter)"],
			"cloud rune" : {
				name : "Cloud Rune",
				source : [["T", 44]],
				description : desc([
					"While I wear an object inscribed with this, I gain a deceptiveness reminiscent of cloud giants",
					"I always gain advantage on Dexterity (Sleight of Hand) and Charisma (Deception) checks",
					"As a reaction when I or another I can see within 30 ft is hit by an attack, I can invoke this",
					"I select another target for the attack within 30 ft of me, using the same roll (ignore range)"
				]),
				action : [["reaction", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Sleight of Hand", true], ["Deception", true] ]
			},
			"fire rune" : {
				name : "Fire Rune",
				source : [["T", 44]],
				description : desc([
					"While I wear an object inscribed with this, I gain craftsmanship reminiscent of great smiths",
					"I always double my proficiency bonus when making an ability check with a tool",
					"When I hit a creature with a weapon attack, I can invoke it to summon fiery shackles",
					"It takes an extra 2d6 fire damage and must make a Str save or be restrained for 1 min",
					"While restrained, the creature takes 2d6 fire damage at the start of each of its turns",
					"It can repeat the save at the end of each of its turns, banishing the shackles on a success"
				]),
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				skillstxt : "expertise with all tools I am proficient with",
				eval : function () { Checkbox('Too Exp', true); },
				removeeval : function () { Checkbox('Too Exp', false); }
			},
			"frost rune" : {
				name : "Frost Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this, I gain might of those surviving wintry wilderness",
					"I always gain advantage on Wisdom (Animal Handling) and Charisma (Intimidation) checks",
					"As a bonus action, I can invoke this to gain +2 on Str and Con checks and saves for 10 min"
				]),
				action : [["bonus action", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Animal Handling", true], ["Intimidation", true] ]
			},
			"stone rune" : {
				name : "Stone Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this, I gain judiciousness reminiscent of stone giants",
					"I always gain advantage on Wisdom (Insight) checks and I gain darkvision out to 120 ft",
					"As a reaction when a creature I can see ends it turn within 30 ft, I can invoke this rune",
					"This causes the creature to make a Wisdom save or be charmed by me for 1 minute",
					"While charmed, it descends into a dreamy stupor, becoming incapacitated and has speed 0",
					"It can repeat the save at the end of each of its turns, ending the effect on a success"
				]),
				action : [["reaction", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				vision : [["Darkvision", 120]],
				advantages : [ ["Insight", true] ]
			},
			"hill rune (prereq: level 7 fighter)" : {
				name : "Hill Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this rune, I gain a resilience reminiscent of hill giants",
					"I always gain advantage on saves against being poisoned and resistance to poison damage",
					"As a bonus action, I can invoke it to gain resistance to bludg/slash/pierc damage for 1 min"
				]),
				prereqeval : function(v) { return classes.known.fighter.level >= 7; },
				action : [["bonus action", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				dmgres : ["Poison"],
				savetxt : { adv_vs : ["poison"] }
			},
			"storm rune (prereq: level 7 fighter)" : {
				name : "Storm Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this rune, I can glimpse the future like storm giants",
					"I always gain adv. on Int (Arcana) checks and I can't be surprised while not incapacitated",
					"As a bonus action, I can invoke it to enter a prophetic state for 1 min or till incapacitated",
					"While in this state, I can use a reaction to cause a roll to gain advantage or disadvantage",
					"I can do this for attacks, saves, and checks of myself or others I can see within 60 ft of me"
				]),
				prereqeval : function(v) { return classes.known.fighter.level >= 7; },
				action : [["bonus action", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Arcana", true] ],
				savetxt : { immune : ["surprised"] },
			}
		},
		"subclassfeature3.2" : {
			name : "Giant's Might",
			source : [["T", 45]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can imbue myself with giant magic for 1 minute and gain benefits:",
				" \u2022 Space permitted, I grow to a larger size category along with everything I'm wearing",
				" \u2022 I have advantage on my Strength check and saves",
				" \u2022 My weapon and unarmed strike attacks deal extra damage"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : (n < 18 ? "Large" : "Huge") + ", +1d" + (n < 10 ? 6 : n < 18 ? 8 : 10) + " damage"
			}),
			action : [["bonus action", ""]],
			savetxt : { text : ["Adv. on Str saves in Giant's Might"] },
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.fighter && classes.known.fighter.level >= 3 && v.isWeapon && (/giant('s)? might/i).test(v.WeaponTextName)) {
							var GMdmgDie = classes.known.fighter.level < 10 ? 'd6' : classes.known.fighter.level < 18 ? 'd8' : 'd10';
							var dmgDieRx = RegExp('(\\d+)' + GMdmgDie, 'i');
							if (dmgDieRx.test(fields.Damage_Die)) {
								var dmgDieMatch = fields.Damage_Die.match(dmgDieRx);
								fields.Damage_Die = fields.Damage_Die.replace(dmgDieRx, Number(dmgDieMatch[1]) + 1 + GMdmgDie);
								fields.Description = fields.Description.replace(/Versatile \((\d+d\d+)\)/i, 'Versatile ($1+1' + GMdmgDie + ')');
							} else if (!isNaN(fields.Damage_Die)) {
								fields.Damage_Die = 1 + GMdmgDie + "+" + fields.Damage_Die;
							} else {
								fields.Description += (fields.Description ? '; ' : '') + '+1' + GMdmgDie + ' damage';
							}
							if (classes.known.fighter.level >= 18 && v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+5 ft reach';
						};
					},
					"If I include the words \"Giant Might\" in the name of a weapon or unarmed strike, it gets treated as a weapon that I use while imbued by my Giant's Might feature. It adds +1d6 weapon damage. From 10th-level onwards, this increases to +1d8 damage. From 18th-level onwards, this increases to +1d10 damage and my reach increases by 5 ft (for melee weapons).",
					8
				]
			}
		},
		"subclassfeature7" : {
			name : "Runic Shield",
			source : [["T", 45]],
			minlevel : 7,
			description : desc([
				"As a reaction when I see a creature within 60 ft get hit by an attack, I can protect it",
				"The attacker must reroll its attack roll and use the new roll"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Great Stature",
			source : [["T", 46]],
			minlevel : 10,
			description : desc([
				"My runes permanently make me grow; I add 3d4 inches to my length",
				"In addition, the extra weapon damage I deal with Giant Might increases to 1d8"
			])
		},
		"subclassfeature15" : {
			name : "Master of Runes",
			source : [["T", 46]],
			minlevel : 15,
			description : "\n   I can now invoke each of my runes twice per short rest instead of once"
		},
		"subclassfeature18" : {
			name : "Runic Juggernaut",
			source : [["T", 46]],
			minlevel : 18,
			description : desc([
				"Giant's Might now adds +1d10 weapon damage, and can make me grow up to Huge",
				"While I'm Huge, my reach increases by 5 ft"
			])
		}
	}
});
AddSubClass("fighter_ua23pt7", "scout-ua", { // Still valid 2021-09-21
	regExpSearch : /scout/i,
	subname : "Scout",
	source : [["UA:KoO", 4]],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["UA:KoO", 4]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with three skills or two skills and Thieves' Tools; For skills choose from:" + "\n   " + "Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, and Survival",
			choices : ["2 Skill proficiencies and Thieves' Tools proficiency", "3 Skill proficiencies"],
			"2 skill proficiencies and thieves' tools proficiency" : {
				name : "Bonus Proficiencies",
				description : desc([
					"I gain proficiency with two skills and Thieves' Tools; For skills choose from:",
					"Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, and Survival"
				]),
				skillstxt : "Choose two from: Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, or Survival",
				toolProfs : [["Thieves' tools", "Dex"]]
			},
			"3 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : desc([
					"I gain proficiency with three skills, chosen from:",
					"Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, and Survival"
				]),
				skillstxt : "Choose three from: Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, or Survival"
			}
		},
		"subclassfeature3.1" : {
			name : "Combat Superiority",
			source : [["UA:KoO", 4]],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling an Athletics, Nature, Perception, Stealth, or Survival check" + "\n       " + "I add half the superiority die to the roll (rounding up)" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "As a reaction when I'm hit while wearing light/medium armor, I add the die to AC" + "\n       " + "If the attack still hits, I only take half damage from it",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest",
			action : ["reaction", " (if hit)"]
		},
		"subclassfeature3.2" : function () {
			var NEfea = newObj(ClassList.ranger.features["natural explorer"]);
			NEfea.source = ["UA:KoO", 4];
			NEfea.minlevel = 3;
			NEfea.additional = ["", "", "1 favored terrain", "1 favored terrain", "1 favored terrain", "1 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains"];
			return NEfea;
		}(),
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : [["UA:KoO", 4]],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : [["UA:KoO", 4]],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter_ua23pt7", "monster hunter-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*monster)(?=.*hunter).*$/i,
	subname : "Monster Hunter",
	source : [["UA:GH", 2]],
	fullname : "Monster Hunter",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["UA:GH", 2]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills or one skill and any one tool" + "\n   " + "For skills I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
			choices : ["1 Skill and 1 Tool proficiencies", "2 Skill proficiencies"],
			"1 skill and 1 tool proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain proficiency with one skill and any one tool of my choice" + "\n   " + "For the skill, I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "Choose one from: Arcana, History, Insight, Investigation, Nature, or Perception",
				toolProfs : [["Any tool", 1]]
			},
			"2 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain 2 skill proficiencies: Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "Choose two from: Arcana, History, Insight, Investigation, Nature, and Perception"
			}
		},
		"subclassfeature3.1" : {
			name : "Combat Superiority",
			source : [["UA:GH", 2]],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "Use after damaging a creature; I add the superiority die to the damage roll" + "\n       " + "Also, the attack imposes disadvantage on any concentration save resulting from it" + "\n    - " + "Use after Int/Wis/Cha save, before knowing success/fail; add the die to the save total" + "\n    - " + "Use with Wis (Perception) to detect hidden or Wis (Insight) to see if lying to me" + "\n       " + "After rolling but before knowing if success/fail; I add the superiority die to the check",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.2" : {
			name : "Hunter's Mysticism",
			source : [["UA:GH", 2]],
			minlevel : 3,
			usages : 1,
			recovery : "long rest",			
			description : "\n   " + "I can cast Detect Magic as a ritual and Protection from Evil & Good once per long rest" + "\n   " + "I gain the ability to speak one of the following languages: Abyssal, Celestial, or Infernal",
			action : ["action", " (Prot vs. Evil/Good)"],
			languageProfs : [["Abyssal, Celestial, or Infernal", 1]],
			spellcastingBonus : [{
				name : "Spirit Seeker",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "(R)",
				spellcastingAbility : 5
			}, {
				name : "Spirit Seeker",
				spells : ["protection from evil and good"],
				selection : ["protection from evil and good"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"detect magic" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				}
			}
		},
		"subclassfeature7" : {
			name : "Monster Slayer",
			source : [["UA:GH", 2]],
			minlevel : 7,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "Whenever I use a superiority die, I can choose to expend two, adding both to the roll" + "\n   " + "If the target is an aberration, fey, fiend, or undead, both dice deal maximum damage",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : [["UA:GH", 2]],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : [["UA:GH", 2]],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter_ua23pt7", "sharpshooter-ua", { // Still valid 2021-09-21
	regExpSearch : /sharpshooter/i,
	subname : "Sharpshooter",
	source : [["UA:FMA", 3]],
	fullname : "Sharpshooter",
	features : {
		"subclassfeature3" : {
			name : "Steady Aim",
			source : [["UA:FMA", 3]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can carefully aim my ranged weapon on a target I can see in range" + "\n   " + "Until the end of my turn, my attacks with this weapon on that target get to:" + "\n   " + "Ignore half and three-quarter cover; Add 2 + half fighter level damage per hit",
			recovery : "short rest",
			usages : 3,
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + (2 + Math.floor(n / 2)) + " damage";
			}),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isRangedWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/steady.{0,3}aim/i).test(v.WeaponTextName)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Ignores 1/2 and 3/4 cover';
						};
					},
					"If I include the words 'Steady Aim' in the name of a ranged weapon, it gets 2 + half my fighter level added to its Damage, and the fact that it ignores half and three-quarter cover added to its description."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isRangedWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/steady.{0,3}aim/i).test(v.WeaponTextName)) { output.extraDmg += 2 + Math.floor(classes.known.fighter.level / 2); };
					}, ""]
			}
		},
		"subclassfeature7" : {
			name : "Careful Eyes",
			source : [["UA:FMA", 4]],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can take the Search action" + "\n   " + "I gain proficiency with one skill, Perception, Investigation, or Survival",
			skillstxt : "Choose one from: Perception, Investigation, or Survival",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Close-Quarters Shooting",
			source : [["UA:FMA", 4]],
			minlevel : 10,
			description : "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile" + "\n   " + "A hostile within 5 ft that I hit with a ranged attack on my turn, can't take reactions" + "\n   " + "This lasts until the end of my turn"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : [["UA:FMA", 4]],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Snap Shot",
			source : [["UA:FMA", 4]],
			minlevel : 18,
			description : "\n   " + "I can make one more ranged attack with my Attack action on my first turn of combat"
		}
	}
});
AddSubClass("fighter_ua23pt7", "brute-ua", {
	regExpSearch : /brute/i,
	subname : "Brute",
	source : [["UA:TS", 2]],
	fullname : "Brute",
	features : {
		"subclassfeature3" : {
			name : "Brute Force",
			source : [["UA:TS", 2]],
			minlevel : 3,
			description : "\n   " + "I do additional damage with weapons that I'm proficient with",
			additional : levels.map(function (n) { 
				return n < 3 ? "" : "+1d" + (n < 10 ? 4 : n < 16 ? 6 : n < 20 ? 8 : 10) + " weapon damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.fighter && classes.known.fighter.level > 2 && !v.isSpell && !v.isNaturalWeapon && fields.Proficiency) {
							fields.Description += (fields.Description ? '; ' : '') + '+1d' + (classes.known.fighter.level < 10 ? 4 : classes.known.fighter.level < 16 ? 6 : classes.known.fighter.level < 20 ? 8 : 10) + ' damage';
						};
					},
					"I do +1d4 damage with weapons that I'm proficient with. This increases to 1d6 at 10th level, 1d8 at 16th level, and 1d10 at 20th level."
				]
			}
		},
		"subclassfeature7" : {
			name : "Brutish Durability",
			source : [["UA:TS", 2]],
			minlevel : 7,
			description : desc([
				"I add +1d6 to all my saving throws, including death saves",
				"If the total of a death save is 20 or more, it counts as rolling a 20"
			]),
			savetxt : { text : ["Add 1d6 to all saves"] }
		},
		"subclassfeature15" : {
			name : "Devastating Critical",
			source : [["UA:TS", 2]],
			minlevel : 15,
			description : "\n   " + "Whenever I score a critical hit with a weapon, I add my fighter level to the damage",
			additional : levels.map(function (n) { return n < 15 ? "" : "+" + n + " damage on crit"; })
		},
		"subclassfeature18" : {
			name : "Survivor",
			source : [["UA:TS", 2]],
			minlevel : 18,
			description : desc([
				"If I have less than half my max HP at the start of my turn, I heal myself",
				"I regain HP equal to 5 + Constitution modifier (min 1); This doesn't work if I'm at 0 HP"
			])
		}
	}
});

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
AddSubClass("sorcerer_ua23pt7", "storm sorcery", {
	regExpSearch : /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
	subname : "Storm Sorcery",
	fullname : "Storm Sorcerer",
	source : [["S", 137], ["X", 51]],
	features : {
		"subclassfeature3" : {
			name : "Wind Speaker",
			source : [["S", 137], ["X", 52]],
			minlevel : 3,
			description : "\n   " + "I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran).",
			languageProfs : ["Primordial"],
		},
		"subclassfeature3.1" : {
			name : "Tempestuous Magic",
			source : [["S", 137], ["X", 52]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, before or after casting a 1st-level or higher spell, I can fly 10 ft.",
				"This movement doesn't provoke opportunity attacks as whirling gust of air surround me."
			]),
			action : ["bonus action", " (with casting)"],
		},
		"subclassfeature6" : {
			name : "Heart of the Storm",
			source : [["S", 137], ["X", 52]],
			minlevel : 6,
			description : desc([
				"I have Resistance to Lightning and Thunder damage.",
				"When I start casting a 1st-level or higher spell that deals Lightning or Thunder damage,",
				"  I deal Lightning or Thunder damage to creatures of my choice that I can see within 10 ft."
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : Math.floor(n/2) + " damage"; }),
			dmgres : ["Lightning", "Thunder"],
		},
		"subclassfeature6.1" : {
			name : "Storm Guide",
			source : [["S", 137], ["X", 52]],
			minlevel : 6,
			description : desc([
				"As an Action, I can stop rain around me in 20-ft radius; Bonus Action for it to resume.",
				"As a Bonus Action, I can choose the direction of wind around me in a 100-ft radius.",
				"This lasts until the end of my next turn and doesn't alter the wind's speed."
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature14" : {
			name : "Storm's Fury",
			source : [["S", 137], ["X", 52]],
			minlevel : 14,
			description : desc([
				"As a Reaction when hit by a melee attack, I can deal Lightning damage to the attacker.",
				"The attacker must also make a Strength save or be pushed up to 20 ft away from me."
			]),
			action : ["reaction", ""],
			additional : levels.map(function (n) { return n < 14 ? "" : n + " Lightning damage"; }),
		},
		"subclassfeature18" : {
			name : "Wind Soul",
			source : [["S", 137], ["X", 52]],
			minlevel : 18,
			description : desc([
				"I have Immunity to Lightning and Thunder damage and gain magical 60 ft Fly Speed.",
				"As an Action, I reduce my fly speed to 30 ft and give allies 30 ft fly speed for 1 hour.",
				"I can do this once per Short Rest for up to 3 + my Charisma modifier allies within 30 ft."
			]),
			action : ["action", ""],
			savetxt : { immune : ["lightning", "thunder"] },
			speed : { fly : { spd : "fixed 60", enc : "fixed 60" } },
			usages : 1,
			recovery : "short rest",
		},
	},
});
AddSubClass("sorcerer_ua23pt7", "divine soul", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*divine)(?=.*soul).*$/i,
	subname : "Divine Soul",
	source : [["X", 50], ["MJ:HB", 0]],
	fullname : "Divine Soul",
	spellcastingList : {
		"class" : ["cleric", "cleric_ua23pt6", "sorcerer", "sorcerer_ua23pt7"],
	},
	features : {
		"subclassfeature3" : {
			name : "Divine Magic",
			source : [["X", 50], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
				"These Cleric spells count as Sorcerer spells for me.",
				'I also learn a spell based on my affinity, use the "Choose Feature" button above for this.'
			]),
			choices : ["Good", "Evil", "Law", "Chaos", "Neutrality"],
			"good" : {
				name : "Divine Magic: Good",
				description : desc([
					"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
					"I also learn Cure Wounds, which doesn't count against my number of spells prepared.",
					"These count as Sorcerer spells for me; I can only replace the bonus spell with a Cleric spell."
				]),
				spellcastingBonus : {
					name : "Divine Magic (Good)",
					"class" : "cleric",
					level : [1,9],
					selection : ["cure wounds", "cure wounds ua23pt8"],
				},
				dependentChoices : "eagle",
			},
			"evil" : {
				name : "Divine Magic: Evil",
				description : desc([
					"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
					"I also learn Inflict Wounds, which doesn't count against my number of spells prepared.",
					"These count as Sorcerer spells for me; I can only replace the bonus spell with a Cleric spell."
				]),
				spellcastingBonus : {
					name : "Divine Magic (Evil)",
					"class" : "cleric",
					level : [1,9],
					selection : ["inflict wounds"],
				},
				dependentChoices : "bat",
			},
			"law" : {
				name : "Divine Magic: Law",
				description : desc([
					"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
					"I also learn Bless, which doesn't count against my number of spells prepared.",
					"These count as Sorcerer spells for me; I can only replace the bonus spell with a Cleric spell."
				]),
				spellcastingBonus : {
					name : "Divine Magic (Law)",
					"class" : "cleric",
					level : [1,9],
					selection : ["bless"],
				},
				dependentChoices : "eagle",
			},
			"chaos" : {
				name : "Divine Magic: Chaos",
				description : desc([
					"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
					"I also learn Bane, which doesn't count against my number of spells prepared.",
					"These count as Sorcerer spells for me; I can only replace the bonus spell with a Cleric spell."
				]),
				spellcastingBonus : {
					name : "Divine Magic (Chaos)",
					"class" : "cleric",
					level : [1,9],
					selection : ["bane"],
				},
				dependentChoices : "bat",
			},
			"neutrality" : {
				name : "Divine Magic: Neutrality",
				description : desc([
					"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
					"I learn Protection from Evil \xD7 Good; It doesn't count against my number of spells prepared.",
					"These count as Sorcerer spells for me; I can only replace the bonus spell with a Cleric spell."
				]),
				spellcastingBonus : {
					name : "Divine Magic (Neutrality)",
					"class" : "cleric",
					level : [1,9],
					selection : ["protection from evil and good"],
				},
				dependentChoices : "dragonfly",
			},
			choiceDependencies : [{
				feature : "subclassfeature14",
				choiceAttribute : true,
			}],
		},
		"subclassfeature3.1" : {
			name : "Favored by the Gods",
			source : [["X", 50]],
			minlevel : 3,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total.",
			recovery : "short rest",
			usages : 1,
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : [["X", 50]],
			minlevel : 6,
			description : desc([
				"Once per turn, when I or an ally in 5 ft roll dice to healing with a spell, I can reroll dice.",
				"By spending 1 Sorcery Point; I can reroll any number of those dice for that spell once."
			]),
			additional : "1 Sorcery Point",
		},
		"subclassfeature14" : {
			name : "Otherworldy Wings",
			source : [["X", 50]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action, I can manifest a pair of spectral wings that give me 30 ft Fly Speed.",
				"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
			]),
			choices : ["eagle", "bat", "dragonfly"],
			choicesNotInMenu : true,
			"eagle" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a Bonus Action, I manifest a pair of spectral eagle wings, giving me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				]),
			},
			"bat" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a Bonus Action, I manifest a pair of spectral bat wings, giving me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				]),
			},
			"dragonfly" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a Bonus Action, I create a pair of spectral dragonfly wings, giving me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				]),
			},
			action : ["bonus action", ""],
			speed : { fly : { spd : 30, enc : 20 } },
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : [["X", 50]],
			minlevel : 18,
			description : desc([
				"As a Bonus Action when I have less than half of my max HP remaining, I can heal myself.",
				"I regain a number of HP equal to half my hit point maximum."
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1,
		},
	},
});
AddSubClass("sorcerer_ua23pt7", "shadow magic", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*shadow).*$/i,
	subname : "Shadow Magic",
	source : [["X", 50]],
	fullname : "Shadow Sorcerer",
	features : {
		"subclassfeature3" : {
			name : "Eyes of the Dark",
			source : [["X", 51]],
			minlevel : 3,
			description : "\n   " + "I gain 120 ft darkvision.",
			vision : [["Darkvision", 120]],
		},
		"subclassfeature3.1" : {
			name : "Strength of the Grave",
			source : [["X", 51]],
			minlevel : 3,
			description : desc([
				"When damage reduces me to 0 HP, that isn't Radiant damage or a Critical Hit,",
				"  I can make a Charisma save (DC 5 + damage taken) to drop to 1 HP instead.",
			]),
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature3" : {
			name : "Darkness",
			source : [["X", 51]],
			minlevel : 3,
			description : desc([
				"I learn Darkness, which doesn't count against my number of spells known.",
				"I can also cast it by spending 2 Sorcery Points and then I can see through it normally.",
			]),
			additional : "2 Sorcery Points",
			action : ["action", " (2 sorcery points)"],
			spellcastingBonus : {
				name : "Eyes of the Dark",
				spells : ["darkness"],
				selection : ["darkness"],
			},
		},
		"subclassfeature6" : {
			name : "Hound of Ill Omen",
			source : [["X", 51]],
			minlevel : 6,
			description : desc([
				"As a Bonus Action, I summon a hound within 30 ft of a creature I see within 120 ft.",
				"The hound has all the stats of a dire wolf with the following exceptions:",
				"\u2022 It is Medium size and counts as a Monstrosity not a beast",
				"\u2022 It starts with a number of Temporary Hit Points equal to half my Sorcerer level",
				"\u2022 At the start of its turn, it automatically knows where the (hidden) target is",
				"\u2022 It can only move towards and make (opportunity) attack against the target",
				"\u2022 It can move through other creatures and objects as if they were Difficult Terrain",
				"\u2022 It takes 5 Force damage if it ends its turn inside an object",
				"The target has Disadvantage on saves vs. my spells while the hound is within 5 ft of it",
				"It disappears if reduced to 0 HP, if the target is reduced to 0 HP, or after 5 minutes",
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : "3 Sorcery Points; " + Math.floor(n/2) + " temporary HP"; }),
			action : [["bonus action", " (3 sorcery points)"]],
			creaturesAdd : [["Hound of Ill Omen", true]],
			creatureOptions : [{
				name : "Hound of Ill Omen",
				source : [["X", 51]],
				size : 3,
				type : "Monstrosity",
				alignment : "Unaligned",
				ac : 14,
				hp : 37,
				hd : [5, 10],
				speed : "50 ft",
				scores : [17, 15, 15, 3, 12, 7],
				skills : {
					"perception" : 3,
					"stealth" : 4
				},
				senses : "Adv. on Wis (Perception) checks using hearing/smell;\nAt the start of each turn, knows where the target is",
				passivePerception : 13,
				challengeRating : "1",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 1,
					damage : [2, 6, "piercing"],
					range : "Melee (5 ft)",
					description : "Target must succeed on a DC 13 Strength saving throw or be knocked prone"
				}],
				traits : [{
					name : "Keen Hearing and Smell",
					description : "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}, {
					name : "Pack Tactics",
					description : "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft of the creature and the ally isn't incapacitated."
				}],
				features : [{
					name : "Actions",
					description : "The hound can only move towards its targets and make attacks or opportunity attacks against its target."
				}, {
					name : "Temporary Hit Points",
					description : "When the hound is summoned, it gains temporary HP equal to half my sorcerer level."
				}, {
					name : "Shadowy Form",
					description : "The hound can move through other creatures and objects as if they were difficult terrain. It takes 5 force damage if it ends its turn inside an object."
				}, {
					name : "Sign of Ill Omen",
					description : "While the hound is within 5 ft of its target, that target has disadvantage on saving throws versus my spells."
				}],
				header : "Summoned",
				eval : function(prefix, lvl) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "The hound of ill omen gains half my sorcerer level as temporary HP when created.");
				},
				removeeval : function(prefix, lvl) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "");
				},
				changeeval : function (prefix, lvl) {
					if (!classes.known.sorcerer) return;
					Value(prefix + 'Comp.Use.HP.Temp', Math.floor(classes.known.sorcerer.level / 2));
				},
			}],
		},
		"subclassfeature14" : {
			name : "Shadow Walk",
			source : [["X", 51]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action when I'm in Dim Light or Darkness, I can teleport up to 120 ft.",
				"The destination has to be unoccupied, within line of sight, and in Dim Light or Darkness.",
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature18" : {
			name : "Umbral Form",
			source : [["X", 51]],
			minlevel : 18,
			additional : "6 Sorcery Points",
			description : desc([
				"As a Bonus Action, I transform into a shadow form for 1 minute.",
				"While transformed, I have Resistance to all damage except Force and Radiant damage.",
				"Also, I can move through other creatures and objects as if they were Difficult Terrain.",
				"I take 5 Force damage if I end my turn inside an object.",
				"This ends early if I end it as a Bonus Action, I die, or I'm Incapacitated.",
			]),
			action : ["bonus action", " (6 Sorcery Points)"],
		},
	},
});
AddSubClass("sorcerer_ua23pt7", "aberrant mind", {
	regExpSearch : /^(?=.*aberrant)(?=.*mind).*$/i,
	subname : "Aberrant Mind",
	source : [["T", 67]],
	features : {
		"subclassfeature3" : {
			name : "Psionic Spells",
			source : [["T", 67]],
			minlevel : 3,
			description : desc([
				"I learn additional spells, which do not count towards the number of spell I can prepare.",
				"Whenever I gain a Sorcerer level, I can replace one of these with another of the same level.",
				"It must be a Divination or Enchantment spell on the Sorcerer, Wizard, or Warlock spell list.",
			]),
			spellcastingBonus : [{
				name : "Psionic Spells (cantrip)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [0, 0],
				extraspells : ["mind sliver"],
				selection : ["mind sliver"],
			}, {
				name : "Psionic Spells (1st-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [1, 1],
				firstCol : "PS",
				extraspells : ["arms of hadar", "dissonant whispers"],
				selection : ["arms of hadar", "dissonant whispers"],
				times : 2,
			}, {
				name : "Psionic Spells (2nd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [2, 2],
				firstCol : "PS",
				extraspells : ["calm emotions", "detect thoughts"],
				selection : ["calm emotions", "detect thoughts"],
				times : levels.map(function (n) { return n < 3 ? 0 : 2; }),
			}, {
				name : "Psionic Spells (3rd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [3, 3],
				firstCol : "PS",
				extraspells : ["hunger of hadar", "sending"],
				selection : ["hunger of hadar", "sending"],
				times : levels.map(function (n) { return n < 5 ? 0 : 2; }),
			}, {
				name : "Psionic Spells (4th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [4, 4],
				firstCol : "PS",
				extraspells : ["evard's black tentacles", "summon aberration"],
				selection : ["evard's black tentacles", "summon aberration"],
				times : levels.map(function (n) { return n < 7 ? 0 : 2; }),
			}, {
				name : "Psionic Spells (5th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [5, 5],
				firstCol : "PS",
				extraspells : ["rary's telepathic bond", "telekinesis"],
				selection : ["rary's telepathic bond", "telekinesis"],
				times : levels.map(function (n) { return n < 9 ? 0 : 2; }),
			}],
		},
		"subclassfeature3.1" : {
			name : "Telepathic Speech",
			source : [["T", 67]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can telepathic link myself with a creature within 30 ft that I can see.",
				"If we share a language, we can talk telepathically while in my Cha mod of miles (min 1).",
				"This last for my level in minutes, until I'm Incapacitated, I die, or I use this feature again."
			]),
			action : [["bonus action", ""]],
			additional : levels.map(function (n) {
				return n + " minute" + (n > 1 ? "s" : "");
			}),
		},
		"subclassfeature6" : {
			name : "Psionic Sorcery",
			source : [["T", 68]],
			minlevel : 6,
			description : desc([
				"I can expend Sorcery Points instead of a spell slot to cast a spell from my Psionic Spells.",
				"This costs the spell's level in Sorcery Points, but in doing so requires no other components.",
				"However, I do need to provide a material component if it is consumed by the spell.",
			]),
		},
		"subclassfeature6.1" : {
			name : "Psychic Defenses",
			source : [["T", 68]],
			minlevel : 6,
			description : "\n   I gain Resistance to Psychic damage and Adv. on saves vs. being Charmed or Frightened.",
			dmgres : ["Psychic"],
			savetxt : { adv_vs : ["charmed", "frightened"] },
		},
		"subclassfeature14" : {
			name : "Revelation in Flesh",
			source : [["T", 68]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action, I can expend 1 or more Sorcery Points to transform for 10 minutes.",
				"For each Sorcery Point used, I gain one of the following benefits of my choice:",
				" \u2022 I can see any Invisible creatures within 60 ft of me not behind Total Cover",
				" \u2022 I gain a Flying Speed equal to my Walking Speed and I can Hover",
				" \u2022 I gain a Swimming Speed equal to twice my Walking Speed \u0026 I can breathe underwater",
				" \u2022 I can move, with equipment, through any space as narrow as 1 inch without squeezing",
				"   Also, I can spend 5 ft of movement to escape form a Grapple or nonmagical restraints."
			]),
			action : [["bonus action", ""]],
			additional : "1+ Sorcery Points",
		},
		"subclassfeature18" : {
			name : "Warping Implosion",
			source : [["T", 68]],
			minlevel : 18,
			description : desc([
				"As an Action, I can teleport to an unoccupied space I can see within 120 ft.",
				"All within 30 ft of where I left take 3d10 Force damage and must make a Strength save.",
				"If failed, each is pulled towards the space I left, ending up in the nearest empty space.",
				"If successful, a creature takes only half damage and isn't pulled.",
				"I can do this once per Long Rest, or by expending 5 Sorcery Points (5 SP)."
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
			altResource : "5 SP",
		},
	},
});
AddSubClass("sorcerer_ua23pt7", "clockwork soul", {
	regExpSearch : /^((?=.*(sorcerer|witch))(?=.*mechanus)|(?=.*clockwork)(?=.*soul)).*$/i,
	subname : "Clockwork Soul",
	source : [["T", 68], ["MJ:HB", 0]],
	fullname : "Clockwork Soul",
	features : {
		"subclassfeature3" : {
			name : "Clockwork Magic",
			source : [["T", 68], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I learn additional spells, which do not count towards the number of spell I can prepare.",
				"Whenever I gain a Sorcerer level, I can replace one of these with another of the same level.",
				"It must be an Abjuration or Transmutation spell on the Sorcerer, Wizard, or Warlock list.",
			]),
			spellcastingBonus : [{
				name : "Clockwork Magic (1st-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [1, 1],
				extraspells : ["alarm", "protection from evil and good"],
				selection : ["alarm", "protection from evil and good"],
				times : 2
			}, {
				name : "Clockwork Magic (2nd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [2, 2],
				extraspells : ["aid", "aid ua22cs", "lesser restoration"],
				selection : ["aid", "aid ua22cs", "lesser restoration"],
				times : 2,
			}, {
				name : "Clockwork Magic (3rd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [3, 3],
				extraspells : ["dispel magic", "protection from energy"],
				selection : ["dispel magic", "protection from energy"],
				times : levels.map(function (n) { return n < 5 ? 0 : 2; }),
			}, {
				name : "Clockwork Magic (4th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [4, 4],
				extraspells : ["freedom of movement", "summon construct"],
				selection : ["freedom of movement", "summon construct"],
				times : levels.map(function (n) { return n < 7 ? 0 : 2; }),
			}, {
				name : "Clockwork Magic (5th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [5, 5],
				extraspells : ["greater restoration", "wall of force"],
				selection : ["greater restoration", "wall of force"],
				times : levels.map(function (n) { return n < 9 ? 0 : 2; }),
			}],
		},
		"subclassfeature3.1" : {
			name : "Restore Balance",
			source : [["T", 69]],
			minlevel : 3,
			description : desc([
				"As a Reaction when a creature I can see in 60 ft is about to roll a d20 with Adv./Disadv.,",
				"  I can prevent that roll from being affected by Advantage and Disadvantage.",
			]),
			action : [["reaction", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Bulwark of Law",
			source : [["T", 69]],
			minlevel : 6,
			description : desc([
				"As an Action, I can imbue a creature I can see within 30 ft with a magical ward.",
				"The ward has a number of d8s equal to the number of Sorcery Points I expend to do this.",
				"As a Reaction when the creature takes damage, it can expend any number of those dice.",
				"The dice roll reduces the damage; The ward lasts until I finish a Long Rest or do this again.",
			]),
			additional : "1-5 Sorcery Points; 1d8 per Point",
			action : [["action", ""]],
		},
		"subclassfeature14" : {
			name : "Trance of Order",
			source : [["T", 69]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action, I can enter a state of clockwork consciousness for 1 minute.",
				"While in this state, attack rolls against me can't benefit from Advantage.",
				"Also, I can then treat a d20 Test roll below 9 as if it had actually rolled a 10.",
				"I can do this once per Long Rest, or by expending 5 Sorcery Points (5 SP).",
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "5 SP",
		},
		"subclassfeature18" : {
			name : "Clockwork Cavalcade",
			source : [["T", 69]],
			minlevel : 18,
			description : desc([
				"As an Action, I can call spirits to bring balance in a 30-ft cube originating from me.",
				"Inside the cube, the intangible spirits do all the following before vanishing:",
				" \u2022 Restore up to 100 HP, divided among the creatures in the cube as I choose",
				" \u2022 Repair all damaged objects entirely in the cube instantly",
				" \u2022 End every spell of 6th-level or lower on objects or creatures of my choice in the cube",
				"I can do this once per Long Rest, or by expending 7 Sorcery Points (7 SP).",
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "7 SP",
		},
	},
});
AddSubClass("sorcerer_ua23pt7", "lunar sorcery", { //Note from MasterJedi2014: This has too many small pieces of custom code that I don't want to break, so I have only changed the 1st lvl subclass features to be 3rd lvl subclass features.
	regExpSearch : /^(?=.*(sorcerer|sorcery|witch))(?=.*(lunar|moon)).*$/i,
	subname : "Lunar Sorcery",
	fullname : "Lunar Sorcerer",
	source : [["D:SotDQ", 0]],
	features : {
		"subclassfeature3" : {
			name : "Lunar Embodiment",
			source : [["D:SotDQ", 0]],
			minlevel : 3,
			additional : levels.map(function (n) { return (n < 3 ? 3 : n < 5 ? 6 : n < 7 ? 9 : n < 9 ? 12 : 15) + " additional spells known"}),
			spellcastingExtra : [
				// full moon
				"shield", "lesser restoration", "dispel magic", "death ward", "rary's telepathic bond",
				// new moon
				"ray of sickness", "blindness/deafness", "vampiric touch", "confusion", "hold monster",
				// crescent moon
				"color spray", "alter self", "phantom steed", "hallucinatory terrain", "mislead"
			],
			spellcastingExtraApplyNonconform : true,
			description : levels.map(function(n) {
				var phases = {
					"\u25CB Full: " : ["Shield", "Lesser Restoration", "Dispel Magic", "Death Ward", "Rary's Telepathic Bond"],
					"\u25CF New: " : ["Ray of Sickness", "Blindness/deafness", "Vampiric Touch", "Confusion", "Hold Monster"],
					"\u25D6 Crescent: " : ["Color Spray", "Alter Self", "Phantom Steed", "Hallucinatory Terrain", "Mislead"]
				};
				var aReturn = [
					"When I finish a long rest, I can choose a lunar phase: Full, New, or Crescent Moon",
					"I can cast the 1st-level spell of that lunar phase once per long rest without a spell slot"
				];
				var iSpellsAdd = n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
				for (var phase in phases) {
					aReturn.push(phase + phases[phase].slice(0,iSpellsAdd).join(", "));
				}
				//aReturn.push("I know all " + (iSpellsAdd * 3) + " spells above; They don't count towards the number of spells I can know");
				return desc(aReturn);
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "sorcerer" && !isDuplicate && CurrentSpells.sorcerer.extra.indexOf(spellKey) !== -1) {
							var phases = {
								"F" : ["shield", "lesser restoration", "dispel magic", "death ward", "rary's telepathic bond"],
								"N" :  ["ray of sickness", "blindness/deafness", "vampiric touch", "confusion", "hold monster"],
								"C" : ["color spray", "alter self", "phantom steed", "hallucinatory terrain", "mislead"]
							};
							for (var phase in phases) {
								if (phases[phase].indexOf(spellKey) !== -1) {
									spellObj.firstCol = phase;
									return true;
								}
							}
						}
					},
					'The letters "F", "N", or "C" in the first column are used to indicate that a spell belongs to either the Full Moon, New Moon, or Crescent Moon lunar phase.'
				]
			},
			spellFirstColTitle : "Ph",
			extraLimitedFeatures : [{
				name : "1st-level lunar phase spell",
				usages : 1,
				recovery : "long rest"
			}]
		},
		"subclassfeature3.1" : {
			name : "Moon Fire",
			source : [["D:SotDQ", 0]],
			minlevel : 3,
			description : desc("I know the Sacred Flame cantrip and can use it on 2 creatures within 5 ft of each other"),
			spellcastingBonus : {
				name : "Moon Fire",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			},
			weaponsAdd : ["Sacred Flame"],
			spellChanges : {
				"sacred flame" : {
					description : "Up to 2 creas I see, max 5 ft apart, save or 1d8 Radiant dmg; no cover bonus; +1d8 at CL 5, 11, and 17",
					descriptionShorter : "Up to 2 creas I see, max 5 ft apart, save or 1d8 Radiant dmg; no cover bonus; +1d8 CL 5/11/17",
					descriptionCantripDie : "Up to 2 creas I see, max 5 ft apart, save or `CD`d8 Radiant dmg; no bonus for cover on save",
					changes : "When I cast Sacred Flame, I can target one creature as normal or target two creatures within range that are within 5 feet of each other."
				}
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == 'sacred flame') {
							fields.Description = fields.Description.replace("1 creature", "up to 2 creatures within 5 ft");
						}
					},
					"When I cast Sacred Flame, I can target one creature as normal or target two creatures within range that are within 5 feet of each other."
				]
			}
		},
		"subclassfeature6" : {
			name : "Lunar Boons",
			source : [["D:SotDQ", 0]],
			minlevel : 6,
			description : desc([
				"Each lunar phase is additionally associated with spells of the following schools of magic:",
				"\u25CB Full: Abjur \u0026 Div\t\t\u25CF New: Ench \u0026 Necro\t" + (typePF ? "\t" : Array(8).join(" ")) + "\u25D6 Crescent: Illus \u0026 Trans",
				"I can reduce the sorcery point needed for Metamagic of spells of my current phase by 1"
			]),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6.1" : {
			name : "Waxing and Waning",
			source : [["D:SotDQ", 0]],
			minlevel : 6,
			description : " [1 sorcery point]" + desc([
				"As a bonus action, I can spend 1 sorcery point to change my lunar phase",
				"I can cast each lunar phase's 1st-level spells once per long rest, if it is my current phase"
			]),
			action : [["bonus action", ""]],
			extraLimitedFeatures : [{
				name : "Shield (in Full lunar phase)",
				usages : 1,
				recovery : "long rest"
			}, {
				name : "Ray of Sickness (in New lunar phase)",
				usages : 1,
				recovery : "long rest"
			}, {
				name : "Color Spray (in Crescent lunar phase)",
				usages : 1,
				recovery : "long rest"
			}],
			eval : function () {
				RemoveFeature("1st-level lunar phase spell", 0, "", "", "Lunar Sorcerer: Lunar Embodiment");
			},
			removeeval : function () {
				AddFeature("1st-level lunar phase spell", 1, "", "long rest", "Lunar Sorcerer: Lunar Embodiment");
			}
		},
		"subclassfeature14" : {
			name : "Lunar Empowerment",
			source : [["D:SotDQ", 0]],
			minlevel : 14,
			description : " [passive benefits for current phase]" + desc([
				"\u25CB Full: I shed bright light in a 10-ft radius \u0026 dim light for extra 10 ft",
				"  Myself and creatures I choose in 10 ft have adv. on Investigation and Perception checks",
				"\u25CF New: I have adv. on Stealth checks; While I'm in darkness, attacks have disadv. vs me",
				"\u25D6 Crescent: I have resistance to Necrotic and Radiant damage"
			]),
			dmgres : [
				["Necrotic", "Necro. (in crescent)"],
				["Radiant", "Rad. (in crescent)"]
			]
		},
		"subclassfeature18" : {
			name : "Lunar Phenomenon",
			source : [["D:SotDQ", 0]],
			minlevel : 18,
			description : " [per phase: 1\xD7 per long rest or 5 SP]" + desc([
				"As a bonus action, or as part of changing phase, I can use a power of the (new) phase:",
				"\u25CB Full: Chosen creatures within 30 ft of me must make a Constitution save or be blinded",
				"  This lasts until their next turn ends; I also heal one creature within 30 ft for 3d8 HP",
				"\u25CF New: Chosen creatures within 30 ft of me must make a Dexterity save",
				"  If failed, they take 3d10 Necrotic damage and have 0 speed until their next turn ends",
				"  Also, I become invisible until the end of my next turn, or until I attack or cast a spell",
				"\u25D6 Crescent: I can magically teleport to an unoccupied space I can see within 60 ft",
				"  Both of us gain resistance to all damage until the start of my next turn",
				"I can use each phase's bonus action 1/LR, or by spending 5 sorcery points to use it again"
			]),
			action : [["bonus action", ""]],
			extraLimitedFeatures : [{
				name : "Lunar Phenomenon (Full)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}, {
				name : "Lunar Phenomenon (New)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}, {
				name : "Lunar Phenomenon (Crescent)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}]
		}
	}
});
AddSubClass("sorcerer_ua23pt7", "favored soul-ua2", { //this code includes contributions by /u/SoilentBrad, as well as LamentingDemon on GitHub
	regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
	subname : "Favored Soul (UA:SO)",
	source : [["UA:SO", 1]],
	fullname : "Favored Soul",
	spellcastingList : {
		"class" : ["cleric", "cleric_ua23pt6", "sorcerer", "sorcerer_ua23pt7"],
	},
	features : {
		"subclassfeature3" : {
			name : "Divine Magic",
			source : [["UA:SO", 1]],
			minlevel : 3,
			description : "\n   " + "When I select my 1st level or higher spells, I can also pick spells from the Cleric spell list." + "\n   " + "These Cleric spells count as Sorcerer spells for me."
		},
		"subclassfeature3.1" : {
			name : "Supernatural Resilience",
			source : [["UA:SO", 1]],
			minlevel : 3,
			description : "\n   " + "My hit point maximum increases by an amount equal to my Sorcerer level.",
			calcChanges : {
				hp : function (totalHD) {
					if (classes.known.sorcerer) {
						return [classes.known.sorcerer.level, "Supernatural Resilience (sorcerer level)"];
					}
				}
			}
		},
		"subclassfeature3.2" : {
			name : "Favored by the Gods",
			source : [["UA:SO", 1]],
			minlevel : 3,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total.",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Blessed Countenance",
			source : [["UA:SO", 1]],
			minlevel : 6,
			description : "\n   " + 'Choose an otherworldly quality using the "Choose Feature" button above.' + "\n   " + "When my Proficiency Bonus applies to a Charisma check, I double that bonus.",
			choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
			"beautiful" : {
				name : "Beautiful",
				source : [["UA:SO", 1]],
				description : "\n   " + "My appearance takes on an otherworldly quality of beauty." + "\n   " + "When my Proficiency Bonus applies to a Charisma check, I double that bonus."
			},
			"youthful" : {
				name : "Youthful",
				source : [["UA:SO", 1]],
				description : "\n   " + "My appearance takes on an otherworldly quality of youthfulness." + "\n   " + "When my Proficiency Bonus applies to a Charisma check, I double that bonus."
			},
			"kind" : {
				name : "Kind",
				source : [["UA:SO", 1]],
				description : "\n   " + "My appearance takes on an otherworldly quality of kindness." + "\n   " + "When my Proficiency Bonus applies to a Charisma check, I double that bonus."
			},
			"imposing" : {
				name : "Imposing",
				source : [["UA:SO", 1]],
				description : "\n   " + "My appearance takes on an otherworldly quality of imposingness." + "\n   " + "When my Proficiency Bonus applies to a Charisma check, I double that bonus."
			},
			skillstxt : "I gain expertise in any Charisma-based skill I'm proficient with.",
			skills : [["Deception", "only"], ["Intimidation", "only"], ["Performance", "only"], ["Persuasion", "only"]]
		},
		"subclassfeature14" : {
			name : "Divine Purity",
			source : [["UA:SO", 1]],
			minlevel : 14,
			description : "\n   " + "I become Immune to Disease and Poison",
			savetxt : { immune : ["poison", "disease"] }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : [["UA:SO", 1]],
			minlevel : 18,
			description : "\n   " + "As a Bonus Action when I have less than half of my max HP, I can heal myself." + "\n   " + "I regain a number of HP equal to half my maximum hit points.",
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer_ua23pt7", "phoenix sorcery-ua", { // Still valid 2021-09-21; this code includes contributions by /u/SoilentBrad, as well as Toby L.
	regExpSearch : /^(?=.*phoenix)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Phoenix Sorcery",
	source : [["UA:SO", 1]],
	fullname : "Phoenix Sorcerer",
	features : {
		"subclassfeature3" : {
			name : "Ignite",
			source : [["UA:SO", 2]],
			minlevel : 3,
			description : "\n   " + "As an Action, I can magically ignite a flammable object by touching it with my hand.",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Mantle of Flame",
			source : [["UA:SO", 2]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can wreathe myself in fire for 1 minute, gaining these benefits:",
				" - I shed Bright Light in a 30-ft radius and Dim Light for an additional 30 ft",
				" - I deal my Charisma modifier in Fire damage to all that touch me",
				" - I also deal this damage to all that hit me with a melee attack from within 5 ft",
				" - When I roll for Fire damage on my turn, I add my Charisma damage to the result"
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Phoenix Spark",
			source : [["UA:SO", 2]],
			minlevel : 6,
			description : desc([
				"As a Reaction when I am reduced to 0 HP, I can draw on the phoenix to stay at 1 HP",
				"All creatures within 10 ft of me take half my Sorcerer level + my Cha mod Fire damage",
				"If I have Mantle of Flame active, this damage is my Sorcerer level + twice my Cha mod",
				"If I use this feature, my Mantle of Flame immediately ends"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return Math.floor(n / 2) + "+Cha \u007Cor\u007C " + n + "+2\xD7Cha";
			}),
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Nourishing Fire",
			source : [["UA:SO", 2]],
			minlevel : 14,
			description : desc([
				"When I cast a spell using a spell slot that includes a Fire damage roll, I regain HP",
				"The HP regained is equal to the spell slot level + my Charisma modifier"
			])
		},
		"subclassfeature18" : {
			name : "Form of the Phoenix",
			source : [["UA:SO", 2]],
			minlevel : 18,
			description : desc([
				"While my Mantle of Flame is active, I gain the following additional benefits:",
				"- I have a Flying Speed of 40 ft and can Hover",
				"- I have Resistance to all damage",
				"- If I use my Phoenix Spark, it deals an extra 20 Fire damage to each creature"
			]),
			dmgres : [["All", "All (Mantle of Flame)"]]
		}
	}
});
AddSubClass("sorcerer_ua23pt7", "sea sorcery-ua", { // Still valid 2021-09-21; this code includes contributions by /u/SoilentBrad
	regExpSearch : /^(?=.*sea)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Sea Sorcery",
	source : [["UA:SO", 2]],
	fullname : "Sea Sorcerer",
	features : {
		"subclassfeature3" : {
			name : "Soul of the Sea",
			source : [["UA:SO", 3]],
			minlevel : 3,
			description : "\n   " + "I can breathe underwater and I have a Swim Speed equal to my Walking Speed.",
			speed : { swim : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature3.1" : {
			name : "Curse of the Sea",
			source : [["UA:SO", 3]],
			minlevel : 3,
			description : desc([
				"I can curse a target that I hit with a cantrip or that fails its save against my cantrip",
				"This lasts until the end of my next turn or until I curse another target like this",
				"Once per turn when I cast a spell, I can trigger an active curse, if a condition is met",
				" - If spell dealt Cold damage to it, its has -15 ft Speed until the end of my next turn",
				" - If the spell dealt Lightning damage to it, that damage is increased with my Cha mod",
				" - If the spell moved the target, it is moved an additional 15 ft",
				"Only one of these effects can be applied, even if the spell meets multiple conditions",
				"If the spell triggering the curse is a cantrip, the target stays cursed for another round"
			])
		},
		"subclassfeature6" : {
			name : "Watery Defense",
			source : [["UA:SO", 3]],
			minlevel : 6,
			description : desc([
				"I gain Resistance to Fire damage",
				"I can protect myself when an attack deals Bludgeoning, Piercing, or Slashing damage",
				"As a Reaction when that happens, I reduce the damage by my sorcerer level + Charisma",
				"I can then also move up to 30 ft without provoking opportunity attacks"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return n + " + Charisma score";
			}),
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1,
			dmgres : ["Fire"]
		},
		"subclassfeature14" : {
			name : "Shifting Form",
			source : [["UA:SO", 3]],
			minlevel : 14,
			description : desc([
				"I gain the ability to enter a liquid state while moving, squeezing through small spaces",
				"When I move on my turn, I take half damage from opportunity attacks",
				"I can move through any enemy's space, but can't willingly end my move in that space",
				"On my turn, I can move through any opening of at least 3 inches in diameter",
				"I can't end my move in a space smaller than one size category smaller than I am"
			])
		},
		"subclassfeature18" : {
			name : "Water Soul",
			source : [["UA:SO", 3]],
			minlevel : 18,
			description : desc([
				"I no longer need to eat, drink, or sleep; Critical hits against me become normal hits",
				"I gain Resistance to Bludgeoning, Piercing, and Slashing damage"
			]),
			dmgres : ["Bludgeoning", "Piercing", "Slashing"]
		}
	}
});
AddSubClass("sorcerer_ua23pt7", "stone sorcery-ua", { // Still valid 2021-09-21; this code includes contributions by /u/SoilentBrad
	regExpSearch : /^(?=.*stone)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Stone Sorcery",
	source : [["UA:SO", 3]],
	fullname : "Stone Sorcerer",
	spellcastingExtra : ["compelled duel", "searing smite", "searing smite ua23pt6", "thunderous smite", "thunderous smite ua23pt6", "wrathful smite", "wrathful smite ua23pt6", "branding smite", "magic weapon", "blinding smite", "banishing smite ua23pt6", "elemental weapon", "staggering smite", "staggering smite ua23pt6"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["UA:SO", 4]],
			minlevel : 3,
			description : "\n   " + "I gain Proficiency with Shields, Simple Weapons and Martial Weapons",
			armorProfs : [false, false, false, true],
			weaponProfs : [true, true]
		},
		"subclassfeature3.1" : {
			name : "Metal Magic",
			source : [["UA:SO", 4]],
			minlevel : 3,
			description : "\n   " + "My affinity for metal allows me to select from a broader range of spells"
		},
		"subclassfeature3.2" : {
			name : "Stone's Durability",
			source : [["UA:SO", 4]],
			minlevel : 3,
			description : desc([
				"My hit point maximum increases by an amount equal to my Sorcerer level",
				"As an Action, I can gain an AC of 13 + Constitution modifier + shield (not Shield spell)",
				"This AC lasts until I don armor, I'm Incapacitated, or use a Bonus Action to end it"
			]),
			action : [["action", " (start)"], ['bonus action', " (end)"]],
			calcChanges : {
				hp : function (totalHD) {
					if (classes.known.sorcerer) {
						return [classes.known.sorcerer.level, "Stone's Durability (sorcerer level)"];
					}
				}
			},
			armorOptions : [{
				regExpSearch : /^(?=.*stone)(?=.*durability).*$/i,
				name : "Stone's Durability",
				source : [["UA:SO", 4]],
				ac : "13+Con",
				dex : -10,
				affectsWildShape : true
			}],
			armorAdd : "Stone's Durability"
		},
		"subclassfeature6" : {
			name : "Stone Aegis",
			source : [["UA:SO", 4]],
			minlevel : 6,
			description : desc([
				"As a Bonus Action, I can grant an aegis to an ally I can see within 60 ft of me",
				"The aegis reduces any Bludgeoning, Piercing, or Slashing damage taken by the target",
				"This aegis lasts for 1 minute, until I use it again, or until I'm Incapacitated",
				"As a Reaction when the protected ally is attacked with a melee attack, I can teleport",
				"I can do this only if the attacker is within 60 ft of me and I can see it",
				"I teleport to an empty space next to it and make one melee weapon attack against it",
				"If this attack hits, the attack deals extra Force damage"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return (Math.floor(n / 4) + 2) + " damage reduction; +" + (n < 11 ? 1 : n < 17 ? 2 : 3) + "d10 Force damage";
			}),
			action : [["bonus action", ""], ['reaction', 'Aegis Teleport']]
		},
		"subclassfeature14" : {
			name : "Stone's Edge",
			source : [["UA:SO", 4]],
			minlevel : 14,
			description : desc([
				"Once per casting of a spell that deals damage, I can choose one creature damaged by it",
				"That creature takes extra Force damage equal to half my Sorcerer level"
			]),
			additional : levels.map( function(n) {
				return n < 14 ? "" : Math.floor(n / 2) + " Force damage";
			})
		},
		"subclassfeature18" : {
			name : "Earth Master's Aegis",
			source : [["UA:SO", 4]],
			minlevel : 18,
			description : "\n   " + "My Stone's Aegis can now affect up to three creatures"
		}
	}
});
AddSubClass("sorcerer_ua23pt7", "favoured soul-uars", {
	regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
	subname : "Favored Soul (UA:RS)",
	source : [["UA:RS", 5], ["MJ:HB", 0]],
	fullname : "Favored Soul",
	spellcastingList : {
		"class" : ["cleric", "cleric_ua23pt6", "sorcerer", "sorcerer_ua23pt7"],
	},
	features : {
		"subclassfeature3" : {
			name : "Divine Magic",
			source : [["UA:RS", 5], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"When I change my prepared/known spells/cantrips, I can pick from the Cleric spell list.",
				"These Cleric spells count as Sorcerer spells for me.",
				"I also learn Cure Wounds, which doesn't count against my number of spells prepared."
			]),
			spellcastingBonus : {
				name : "Divine Magic",
				spells : ["cure wounds", "cure wounds ua23pt8"],
				selection : ["cure wounds", "cure wounds ua23pt8"],
			}
		},
		"subclassfeature3.1" : {
			name : "Favored by the Gods",
			source : [["UA:RS", 5]],
			minlevel : 3,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : [["UA:RS", 5]],
			minlevel : 6,
			description : " [1 Sorcery Point]" + desc([
				"When I roll dice for healing with one of my Sorcerer spells, I can reroll them once",
				"By spending 1 Sorcery Point, I can reroll any number of those dice for that spell"
			])
		},
		"subclassfeature14" : {
			name : "Angelic Form",
			source : [["UA:RS", 5]],
			minlevel : 14,
			description : desc([
				'Choose an otherworldly quality using the "Choose Feature" button above.',
				"As a Bonus Action, I can manifest a pair of spectral wings that give me 30 ft Fly Speed.",
				"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
			]),
			choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
			"beautiful" : {
				name : "Angelic Form: Beautiful",
				description : desc([
					"My appearance takes on an otherworldly quality of beauty.",
					"As a Bonus Action, I can manifest a pair of spectral wings that give me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				])
			},
			"youthful" : {
				name : "Angelic Form: Youthful",
				description : desc([
					"My appearance takes on an otherworldly quality of youthfulness.",
					"As a Bonus Action, I can manifest a pair of spectral wings that give me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				])
			},
			"kind" : {
				name : "Angelic Form: Kind",
				description : desc([
					"My appearance takes on an otherworldly quality of kindness.",
					"As a Bonus Action, I can manifest a pair of spectral wings that give me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				])
			},
			"imposing" : {
				name : "Angelic Form: Imposing",
				description : desc([
					"My appearance takes on an otherworldly quality of imposingness.",
					"As a Bonus Action, I can manifest a pair of spectral wings that give me 30 ft Fly Speed.",
					"These wings last until I become Incapacitated or I dismiss them as a Bonus Action.",
				])
			},
			action : ["bonus action", " Wings"],
			speed : { fly : { spd : 30, enc : 20 } }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : [["UA:RS", 6]],
			minlevel : 18,
			description : desc([
				"As a Bonus Action when I have less than half of my max HP remaining, I can heal myself",
				"I regain a number of HP equal to half my hit point maximum"
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer_ua23pt7", "giant soul-ua", {
	regExpSearch : /^(?=.*giant)(?=.*soul)(?=.*sorcerer).*$/i,
	subname : "Giant Soul",
	source : [["UA:GSS", 1], ["MJ:HB", 0]],
	fullname : "Giant Soul Sorcerer",
	features : {
		"subclassfeature3" : {
			name : "Jotun Resilience",
			source : [["UA:GSS", 1]],
			minlevel : 3,
			description : "\n   " + "My hit point maximum increases by an amount equal to my Sorcerer level",
			calcChanges : {
				hp : function (totalHD) {
					if (classes.known.sorcerer) {
						return [classes.known.sorcerer.level, "Jotun Resilience (sorcerer level)"];
					}
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Mark of Ordning",
			source : [["UA:GSS", 1], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				'Choose a giant heritage using the "Choose Feature" button above',
				"I learn spells based on my giant heritage, which I add to my prepared spells"
			]),
			choices : ["Cloud Giant", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant"],
			"cloud giant" : {
				name : "Mark of Ordning: Cloud Giant",
				description : desc([
					"I add Minor Illusion, Fog Cloud and Invisibility to my prepared sorcerer spells",
					"These do not count against the number of cantrips/spells I can know/prepare"
				]),
				spellcastingExtra : ["minor illusion", "fog cloud", "invisibility"],
			},
			"fire giant" : {
				name : "Mark of Ordning: Fire Giant",
				description : desc([
					"I add Fire Bolt, Burning Hands, and Flaming Sphere to my prepared sorcerer spells",
					"These do not count against the number of cantrips/spells I can know/prepare"
				]),
				spellcastingExtra : ["fire bolt", "burning hands", "flaming sphere"],
			},
			"frost giant" : {
				name : "Mark of Ordning: Frost Giant",
				description : desc([
					"I add Ray of Frost, Armor of Agathys, and Hold Person to my prepared sorcerer spells",
					"These do not count against the number of cantrips/spells I can know/prepare"
				]),
				spellcastingExtra : ["ray of frost", "armor of agathys", "hold person"],
			},
			"hill giant" : {
				name : "Mark of Ordning: Hill Giant",
				description : desc([
					"I add Shillelagh, Heroism, and Enlarge/Reduce to my prepared sorcerer spells",
					"These do not count against the number of cantrips/spells I can know/prepare"
				]),
				spellcastingExtra : ["shillelagh", "shillelagh ua23bc", "heroism", "enlarge/reduce"],
			},
			"stone giant" : {
				name : "Mark of Ordning: Stone Giant",
				description : desc([
					"I add Resistance, Entangle, and Spike Growth to my prepared sorcerer spells",
					"These do not count against the number of cantrips/spells I can know/prepare"
				]),
				spellcastingExtra : ["resistance", "resistance ua22cs", "entangle", "spike growth"],
			},
			"storm giant" : {
				name : "Mark of Ordning: Storm Giant",
				description : desc([
					"I add Thunderwave, Shocking Grasp, and Gust of Wind to my prepared sorcerer spells",
					"These do not count against the number of cantrips/spells I can know/prepare"
				]),
				spellcastingExtra : ["thunderwave", "shocking grasp", "shocking grasp ua23bc", "gust of wind"],
			},
			choiceDependencies : [{ feature : "subclassfeature6" }]
		},
		"subclassfeature6" : {
			name : "Soul of Lost Ostoria",
			source : [["UA:GSS", 1]],
			minlevel : 6,
			description : "\n   " + 'Use the "Choose Feature" button above to select the giant heritage',
			choices : ["Cloud Giant", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant"],
			choicesNotInMenu : true,
			"cloud giant" : {
				name : "Soul of Lost Ostoria: Cloud Giant",
				description : desc([
					"As a Bonus Action after casting any of my Mark of Ordning spells, I can teleport",
					"I teleport to an unoccupied space that I can see up to my Con mod + 10 ft away"
				]),
				action : ["bonus action", ""]
			},
			"fire giant" : {
				name : "Soul of Lost Ostoria: Fire Giant",
				description : "\n   " + "I add my Constitution modifier (min 1) to the damage of my Mark of Ordning spells",
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == 'fire bolt') output.extraDmg += Math.max(What('Con Mod'), 1);
						},
						"I add my Constitution modifier (min 1) to the damage of my Mark of Ordning spells: Fire Bolt, Burning Hands, and Flaming Sphere"
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (spName == "sorcerer" && (/^(fire bolt|burning hands|flaming sphere)$/i).test(spellKey)) {
								spellObj.description = spellObj.description.replace(/d(6|10)/, "d$1+" + Math.max(1, What("Con Mod")));
								return true;
							};
						},
						"I add my Constitution modifier (min 1) to the damage of my Mark of Ordning spells: Fire Bolt, Burning Hands, and Flaming Sphere"
					]
				}
			},
			"frost giant" : {
				name : "Soul of Lost Ostoria: Frost Giant",
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I gain temporary HP",
					"I gain my Con mod in temporary HP (min 1) and its added to that of the spell (if any)"
				])
			},
			"hill giant" : {
				name : "Soul of Lost Ostoria: Hill Giant",
				source : [["UA:GSS", 2]],
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I can magically push others",
					"I can select up to two creatures within 5 ft of me that each have to make a Str save",
					"If failed, it is pushed my Con mod (min 1) + 5 ft away from me; It can choose to fail"
				])
			},
			"stone giant" : {
				name : "Soul of Lost Ostoria: Stone Giant",
				source : [["UA:GSS", 2]],
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I gain a bonus to AC",
					"My AC increases with my Constitution modifier (min +1) until the end of my next turn"
				])
			},
			"storm giant" : {
				name : "Soul of Lost Ostoria: Storm Giant",
				source : [["UA:GSS", 2]],
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I shoot lightning",
					"Up to 3 targets in 30 ft that I can see take my Con mod (min 1) in Lightning damage"
				])
			}
		},
		"subclassfeature14" : {
			name : "Rage of Fallen Ostoria",
			source : [["UA:GSS", 2]],
			minlevel : 14,
			description : desc([
				"When I start casting a Sorcerer spell using a spell slot on my turn, I can grow in size",
				"It lasts for 1 min or until I die or am Incapacitated; I can activate it only once per turn",
				"While it lasts, I enjoy the following benefits (which are cumulative, except the damage):",
				"\u2022 I increase size by one category (from Medium to Large, for example)",
				"\u2022 My current HP and maximum HP increase by a number equal to my Sorcerer level",
				"\u2022 My reach and Walking Speed both increase by 5 ft",
				"\u2022 I gain Advantage on Strength checks and Strength saving throws",
				"\u2022 I add my Constitution modifier to the damage of my melee weapon attacks (min +1)"
			]),
			additional : levels.map(function(n) {
				return n < 14 ? "" : "+" + n + " HP";
			}),
			usages : levels.map(function(n) {
				return n < 14 ? "" : n < 18 ? 1 : 2;
			}),
			recovery : "short rest"
		},
		"subclassfeature18" : {
			name : "Blessing of the All Father",
			source : [["UA:GSS", 2]],
			minlevel : 18,
			description : "\n   " + "I add +2 to my Constitution and its maximum increases to 22",
			scores : [0, 0, 2, 0, 0, 0],
			scoresMaximum : [0, 0, 22, 0, 0, 0]
		}
	}
});
/*RunFunctionAtEnd(function() { //Note from MasterJedi2014: This has one large piece of custom code that I think I didn't break by altering, but I might be wrong.
	var SorcererSubclassFavoredSoul = AddSubClass("sorcerer_ua23pt7", "favored soul-ua", {
		regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
		subname : "Favored Soul (UA:MC)",
		source : [["UA:MC", 8]],
		fullname : "Favored Soul",
		attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "Bonus Proficiencies",
				source : [["UA:MC", 9]],
				minlevel : 3,
				description : "\n   " + "I gain proficiency with Light Armor, Medium Armor, Shields, and Simple Weapons",
				armorProfs : [true, true, false, true],
				weaponProfs : [true, false]
			},
			"subclassfeature3.1" : {
				name : "Chosen of the Gods",
				source : [["UA:MC", 8]],
				minlevel : 3,
				description : "\n   " + 'Choose a Cleric Domain using the "Choose Feature" button above.' + "\n   " + "The chosen domain's spells count as Sorcerer spells, but do not count against the number of spells I can prepare.",
				choices : []
			},
			"subclassfeature14" : {
				name : "Divine Wings",
				source : [["UA:MC", 8]],
				minlevel : 14,
				description : "\n   " + "As a Bonus Action, I sprout feathered or bat wings from my back unless blocked by armor." + "\n   " + "I gain a Fly Speed equal to my current Speed until I dismiss the wings as a Bonus Action.",
				action : ["bonus action", " (start/stop)"],
				speed : { fly : { spd : "walk", enc : "walk" } }
			},
			"subclassfeature18" : {
				name : "Power of the Chosen",
				source : [["UA:MC", 8]],
				minlevel : 18,
				description : "\n   " + "When I cast a spell I gained from the Chosen of the Gods class feature, I heal myself." + "\n   " + "I regain a number of HP equal to my Charisma modifier (minimum 1) + the spell's level."
			},
		},
	});
	// Adding all cleric domain spells to the options of the first level ability "Chosen of the Gods"
	var FSfeat = ClassSubList[SorcererSubclassFavoredSoul].features["subclassfeature1.1"];
	for (var i = 0; i < ClassList.cleric_ua23pt6.subclasses[1].length; i++) {
		var cDomain = ClassSubList[ClassList.cleric_ua23pt6.subclasses[1][i]];
		if (cDomain && cDomain.spellcastingExtra) {
			var eSpells = newObj(cDomain.spellcastingExtra);
			eSpells[100] = "AddToKnown";
			var dSource = cDomain.source ? cDomain.source : cDomain.features["subclassfeature3"] && cDomain.features["subclassfeature3"].source ? cDomain.features["subclassfeature3"].source :[["UA:MC", 8]];
			
			var suffix = 1;
			var entryDoNm = cDomain.subname;
			while (FSfeat.choices.indexOf(entryDoNm) !== -1) {
				suffix += 1;
				entryDoNm = cDomain.subname + " (" + suffix + ")";
			};
			FSfeat.choices.push(entryDoNm);
			FSfeat[entryDoNm.toLowerCase()] = {
				name : "Chosen of the Gods: " + cDomain.subname,
				source : dSource,
				spellcastingExtra : eSpells,
				description : "\n   " + "I add the " + cDomain.subname.toLowerCase() + " spells to my prepared spells." + "\n   " + "These count as sorcerer spells, but do not count against the number of spells I can prepare."
			};
		};
	};
});*/

// Add Warlock subclasses
AddSubClass("warlock_ua23pt7", "the undying", {
	regExpSearch : /^(?!.*light)(?=.*warlock)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname : "the Undying",
	source : [["S", 139]],
	spellcastingExtra : ["spare the dying", "spare the dying ua23bc", "false life", "ray of sickness", "blindness/deafness", "silence", "feign death", "speak with dead", "aura of life", "death ward", "contagion", "legend lore"],
	features : {
		"subclassfeature3" : {
			name : "Among the Dead",
			source : [["S", 139]],
			minlevel : 3,
			description : "\n   " + "I learn the Spare the Dying cantrip and gain advantage on saving throws vs. diseases" + "\n   " + "If an undead targets me directly with an attack or spell, it must make a Wisdom save" + "\n   " + "On a fail, it must choose a new target or forfeit its attack or harmful spell" + "\n   " + "On a success or if I attack or cast a harmful spell on it, it is immune for 24 hours",
			savetxt : { adv_vs : ["disease"] },
		},
		"subclassfeature6" : {
			name : "Defy Death",
			source : [["S", 140]],
			minlevel : 6,
			description : "\n   " + "I regain 1d8 + my Constitution modifier in HP when I succeed on a Death saving throw" + "\n   " + "I also regain this amount whenever I use Spare the Dying to stabilize a creature",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Undying Nature",
			source : [["S", 140]],
			minlevel : 10,
			description : "\n   " + "I can hold my breath indefinitely; I don't require food, water, or sleep (I still need rest)" + "\n   " + "I age more slowly, only 1 year for every 10 years that pass; I can't be magically aged"
		},
		"subclassfeature14" : {
			name : "Indestructible Life",
			source : [["S", 140]],
			minlevel : 14,
			description : "\n   " + "As a Bonus Action, I can regain HP and reattach severed body parts",
			action : ["bonus action", ""],
			recovery : "short rest",
			usages : 1,
			additional : levels.map(function (n) { return n < 14 ? "" : "1d8 + " + n + " HP"; })
		}
	}
});
AddSubClass("warlock_ua23pt7", "the hexblade", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : [["X", 55]],
	spellcastingExtra : ["shield", "wrathful smite", "wrathful smite ua23pt6", "blur", "branding smite", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "staggering smite ua23pt6", "banishing smite", "banishing smite ua23pt6", "cone of cold"],
	features : {
		"subclassfeature3" : {
			name : "Hexblade's Curse",
			source : [["X", 55]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can curse a creature I can see within 30 ft of me for 1 minute",
				"\u2022 I add my Proficiency Bonus to damage rolls against the cursed target",
				"\u2022 My attack rolls against the cursed target score a critical hit on a roll of 19 and 20",
				"\u2022 If the target dies while cursed, I regain HP equal to my Warlock level + Cha mod",
				"The curse ends after 1 minute, when the target dies, I die, or I'm Incapacitated"
			]),
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isDC && (/curse/i).test(v.WeaponTextName) && !v.CritChance) {
							v.CritChance = 19;
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
						}
					},
					"If I include the word 'Curse' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description.",
					19
				],
				atkCalc : [
					function (fields, v, output) {
						if ((/curse/i).test(v.WeaponTextName)) output.extraDmg += output.prof;
					}, ""]
			}
		},
		"subclassfeature3.1" : {
			name : "Hex Warrior",
			source : [["X", 55]],
			minlevel : 3,
			description : desc([
				"I gain Proficiency with Medium Armor, Shields, and Martial Weapons",
				"When I finish a Long Rest, I can imbue one weapon I touch with my will",
				"Until my next Long Rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be Proficient with the weapon and it can't have the Two-Handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction"
			]),
			armorProfs : [false, true, false, true],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (v.pactWeapon || v.theWea.pactWeapon || /^(?=.*hexblade)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b).*$/i.test(v.WeaponText))) {
							fields.Mod = 6;
						};
					},
					"If I include the word 'Hexblade' in the name of a weapon that is not two-handed, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. Alternatively, if I have the Pact of the Blade feature, this will also work for any weapons set to be my Pact Weapon."
				]
			}
		},
		"subclassfeature6" : {
			name : "Accursed Specter",
			source : [["X", 56]],
			minlevel : 6,
			description : desc([
				"When I slay a humanoid, I can curse its soul and have it rise as a specter from its corpse",
				"It has the stats of a specter with Temporary Hit Points equal to half my Warlock level",
				"It rolls Initiative and has its own turns, obeying my verbal commands",
				"It gains a bonus to attack rolls equal to my Charisma modifier (min +0)",
				"The specter remains until the end of my next Long Rest, at which point it vanishes"
			]),
			additional : levels.map( function(n) { return n < 6 ? "" : Math.floor(n/2) + " temp HP"; }),
			usages : 1,
			recovery : "long rest",
			creaturesAdd : [["Accursed Specter", true]],
			creatureOptions : [{
				name : "Accursed Specter",
				nameAlt : ["Accursed Spectre"],
				source : [["X", 56]],
				size : 3,
				type : "Undead",
				alignment : "Chaotic Evil",
				ac : 12,
				hp : 22,
				hd : [5, 8],
				speed : "fly 50 ft (hover)",
				scores : [1, 14, 11, 10, 10, 12],
				damage_resistances : "acid; cold; fire; lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
				damage_immunities : "necrotic, poison",
				condition_immunities : "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
				senses : "Darkvision 60 ft; While in sunlight, disadv. on Wis (Perception) checks using sight",
				passivePerception : 10,
				languages : "all languages it knew in life, but can't speak",
				challengeRating : "1",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Life Drain",
					ability : 2,
					damage : [3, 6, "necrotic"],
					range : "Melee (5 ft)",
					description : "DC 10 Con save or HP max reduced by same as damage taken until a long rest",
					modifiers : ["max(oCha|0)", ""],
					abilitytodamage : false,
					tooltip : "A target of the specter's life drain must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}],
				traits : [{
					name : "Incorporeal Movement",
					description : "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
				}, {
					name : "Sunlight Sensitivity",
					description : "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}, {
					name : "Life Drain",
					description : "A target of the specter's life drain must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}],
				features : [{
					name : "Bound Spirit",
					description : "The specter obeys my verbal commands and remains in my service until the end of my next long rest, at which point it vanishes to the afterlife. It acts on its own turn with its own initiative."
				}],
				header : "Bound Spirit",
				eval : function(prefix) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "The accursed specter gains half my warlock level as temporary HP when created.");
				},
				removeeval : function(prefix) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "");
				},
				changeeval : function (prefix, newLvl) {
					if (!classes.known.warlock) return;
					Value(prefix + 'Comp.Use.HP.Temp', Math.floor(classes.known.warlock.level / 2));
				}
			}]
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : [["X", 56]],
			minlevel : 10,
			description : desc([
				"As a Reaction when a Hexblade's Curse recipient hits me with an attack, I can roll a d6",
				"On a result of 4 or higher, the attacks misses me instead, regardless of its d20 roll"
			])
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : [["X", 56]],
			minlevel : 14,
			description : desc([
				"When the target of my Hexblade's Curse dies, I can curse another I can see within 30 ft",
				"I can't do this while Incapacitated and I don't regain HP from the death of the previous"
			])
		}
	}
});
AddSubClass("warlock_ua23pt7", "the fathomless", {
	regExpSearch : /^(?=.*warlock)(?=.*fathomless).*$/i,
	subname : "the Fathomless",
	source : [["T", 72]],
	spellcastingExtra : ["create or destroy water", "thunderwave", "gust of wind", "silence", "lightning bolt", "sleet storm", "control water", "summon elemental", "bigby's hand", "cone of cold"],
	features : {
		"subclassfeature3" : {
			name : "Tentacle of the Deeps",
			source : [["T", 72]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can summon or move a spectral tentacle and make an attack with it",
				"I can summon it to a space within 60 ft that I can see or move an existing one 30 ft",
				"I make melee spell attacks with 10 ft reach with it that deal Cold damage",
				"Creatures hit by the tentacle suffer 10 ft Speed reduction until the start of my next turn",
				"The 10-ft long tentacle lasts for 1 minute or until I summon another"
			]),
			action : [["bonus action", " (summon/move)"]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8";
			}),
			weaponsAdd : ['Tentacle of the Deeps'],
			weaponOptions : [{
				regExpSearch : /^(?=.*tentacle)(?=.*\b(deeps?|spectral)\b).*$/i,
				name : "Tentacle of the Deeps",
				source : [["T", 72]],
				ability : 6,
				type : "Spell",
				damage : [1, 8, "Cold"],
				range : "Melee (10 ft)",
				description : "On hit, -10 ft speed until my next turn starts",
				abilitytodamage : false,
				tentacleOfTheDeeps : true
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.tentacleOfTheDeeps && classes.known.warlock.level >= 10) {
							fields.Damage_Die = '2d8';
						};
					},
					'',
					1
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Gift of the Sea",
			source : [["T", 72]],
			minlevel : 3,
			description : "\n   I have a Swimming Speed of 40 ft and I can breathe underwater",
			speed : { swim : { spd : 40, enc : 30 } }
		},
		"subclassfeature6" : {
			name : "Oceanic Soul",
			source : [["T", 73]],
			minlevel : 6,
			description : desc([
				"I gain Resistance to Cold damage now that I'm even more at home in the depths",
				"While I'm fully submerged, others who are as well can understand my speech and I theirs"
			]),
			dmgres : ["Cold"],
			spellChanges : {
				"summon elemental" : {
					description : "Summon Water Elemental Spirit; obeys commands; takes turn after mine; vanishes at 0 hp (400gp)",
					changes : "My warlock spell Summon Elemental can only call forth an elemental spirit of water."
				}
			}
		},
		"subclassfeature6.1" : {
			name : "Guardian Coil",
			source : [["T", 73]],
			minlevel : 6,
			description : desc([
				"As a Reaction when I or a creature I see in 10 ft of my tentacle is damaged, it can help",
				"The tentacle interposes itself, reducing the damage of the attack for that creature"
			]),
			action : [["reaction", ""]],
			additional : levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8 damage reduced";
			})
		},
		"subclassfeature10" : {
			name : "Grasping Tentacles",
			source : [["T", 73]],
			minlevel : 10,
			description : desc([
				"I learn Evard's Black Tentacles; Once per long rest, I can cast it without using a spell slot",
				"It counts as a Warlock spell for me, but not towards the number of spell I can prepare",
				"Whenever I cast it, I gain temporary hit points equal to my Warlock level",
				"Moreover, damage can't break my concentration on this spell"
			]),
			action : [["action", ""]],
			additional : levels.map(function (n) {
				return n < 10 ? "" : n + " temp HP; 1\xD7 per long rest no SS";
			}),
			spellcastingBonus : {
				name : "Grasping Tentacles",
				spells : ["evard's black tentacles"],
				selection : ["evard's black tentacles"],
				firstCol : "oncelr"
			},
			extraLimitedFeatures : [{
				name : "Evard's Black Tentacles (no spell slot)",
				usages : 1,
				recovery : "long rest"
			}],
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey === "evard's black tentacles") {
							spellObj.description = "I temp hp; All enter/start in 20-ft rad save or restrained \u0026 3d6 Bludg. dmg/rnd; Str/Dex check escape";
							spellObj.duration = "Conc*, 1 min";
							return true;
						}
					},
					"Whenever I cast Evard's Black Tentacles, I gain temporary hit points equal to my warlock level.\n \u2022 Damage can't break my concentration on this spell."
				]
			}
		},
		"subclassfeature14" : {
			name : "Fathomless Plunge",
			source : [["T", 73]],
			minlevel : 14,
			description : desc([
				"As an Action, I can teleport myself and up to 5 willing creatures I can see within 30 ft",
				"We reappear up to 1 mile away, inside or within 30 ft of a body of water I've seen"
			]),
			action : [["action", ""]],
			recovery : "short rest",
			usages : 1
		}
	}
});
AddSubClass("warlock_ua23pt7", "the genie", {
	regExpSearch : /^(?=.*warlock)(?=.*(genie|dao|djinni|efreeti|marid)).*$/i,
	subname : "the Genie",
	source : [["T", 73], ["UA:SR", 2]],
	features : {
		"subclassfeature3" : {
			name : "Choose Genie Kind",
			source : [["T", 73], ["UA:SR", 3]],
			minlevel : 3,
			description : '\n   Use the "Choose Feature" button above to choose the kind of genie your patron is',
			calcChanges : {
				spellList : [
					function(spList, spName, spType) {
						if (spType.indexOf("bonus") !== -1 && spList.name && /mystic arcanum/i.test(spList.name) && spList.level[0] === 9) {
							spList.extraspells.push("wish");
						} else if (spType.indexOf("bonus") === -1 && spName === "warlock") {
							if (!spList.notspells) spList.notspells = [];
							spList.notspells.push("wish");
						}
					},
					"The Genie patron adds Wish as a spell available for my 9th-level Mystic Arcanum selection."
				]
			},
			choices : ["Dao (earth)", "Djinni (air)", "Efreeti (fire)", "Marid (water)"],
			"dao (earth)" : {
				name : "Dao Genie Patron",
				description : "\n   My genie patron is a Dao, associated with earth",
				spellcastingExtra : ["detect evil and good", "sanctuary", "phantasmal force", "spike growth", "create food and water", "meld into stone", "phantasmal killer", "stone shape", "creation", "wall of stone", "wish"]
			},
			"djinni (air)" : {
				name : "Djinni Genie Patron",
				description : "\n   My genie patron is a Djinni, associated with air",
				spellcastingExtra : ["detect evil and good", "thunderwave", "gust of wind", "phantasmal force", "create food and water", "wind wall", "greater invisibility", "phantasmal killer", "creation", "seeming", "wish"]
			},
			"efreeti (fire)" : {
				name : "Efreeti Genie Patron",
				description : "\n   My genie patron is an Efreeti, associated with fire",
				spellcastingExtra : ["burning hands", "detect evil and good", "phantasmal force", "scorching ray", "create food and water", "fireball", "fire shield", "phantasmal killer", "creation", "flame strike", "wish"]
			},
			"marid (water)" : {
				name : "Marid Genie Patron",
				description : "\n   My genie patron is a Marid, associated with water",
				spellcastingExtra : ["detect evil and good", "fog cloud", "blur", "phantasmal force", "create food and water", "sleet storm", "control water", "phantasmal killer", "cone of cold", "creation", "wish"]
			},
			choiceDependencies : [{
				feature : "subclassfeature3.3"
			}, {
				feature : "subclassfeature6"
			}]
		},
		"subclassfeature3.1" : {
			name : "Genie's Vessel",
			source : [["T", 73], ["UA:SR", 3]],
			minlevel : 3,
			description : desc([
				"My patron gifts me a magical vessel, a Tiny object, granting me a measure of its power",
				"I choose the vessel's appearance; I can use it as my spellcasting focus for Warlock spells",
				"The vessel's AC is my spell save DC and it has my warlock level + Proficiency Bonus in HP",
				"If it is destroyed or lost, I can get a replacement with a 1-hour ceremony during a rest"
			])
		},
		"subclassfeature3.2" : {
			name : "Genie's Vessel: Bottled Respite",
			source : [["T", 74], ["UA:SR", 3]],
			minlevel : 3,
			description : desc([
				"As an Action, I can vanish and enter the extradimensional space inside my genie's vessel",
				"The vessel stays in its location; The space inside is a 20-ft high, 20-ft radius cylinder",
				"As a Bonus Action, I can exit my vessel; I exit it early if I die or the vessel is destroyed",
				"I can remain inside for twice my Proficiency Bonus in hours; Objects can be left inside"
			]),
			limfeaname : "Bottled Respite",
			action : [["action", " (enter)"], ["bonus action", " (eject)"]],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature3.3" : {
			name : "Genie's Wrath",
			source : [["T", 73], ["UA:SR", 3]],
			minlevel : 3,
			description : desc([
				"I can deal bonus damage on my attacks, its type depending on my patron's genie kind",
				'Use the "Choose Feature" button above to choose the kind of genie your patron is'
			]),
			choices : ["dao (earth)", "djinni (air)", "efreeti (fire)", "marid (water)"],
			choicesNotInMenu : true,
			"dao (earth)" : {
				name : "Dao's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Prof Bonus in extra Bludgeoning damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' bludgeoning damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Bludgeoning damage equal to my proficiency bonus."
					]
				}
			},
			"djinni (air)" : {
				name : "Djinni's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra Thunder damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' thunder damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Thunder damage equal to my proficiency bonus."
					]
				}
			},
			"efreeti (fire)" : {
				name : "Efreeti's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra Fire damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' fire damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Fire damage equal to my proficiency bonus."
					]
				}
			},
			"marid (water)" : {
				name : "Marid's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra Cold damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' cold damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Cold damage equal to my proficiency bonus."
					]
				}
			}
		},
		"subclassfeature6" : {
			name : "Elemental Gift",
			source : [["T", 75], ["UA:SR", 3]],
			minlevel : 6,
			description : desc([
				"I gain Resistance to a damage type depending on my patron's genie kind",
				'Use the "Choose Feature" button above to choose the kind of genie your patron is',
				"As a Bonus Action, I can gain a Flying Speed of 30 ft and I can Hover, for 10 minutes"
			]),
			choices : ["dao (earth)", "djinni (air)", "efreeti (fire)", "marid (water)"],
			choicesNotInMenu : true,
			"dao (earth)" : {
				name : "Dao's Elemental Gift",
				description : desc([
					"I gain Resistance to Bludgeoning damage",
					"As a Bonus Action, I can gain a Flying Speed of 30 ft and I can Hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Bludgeoning"]
			},
			"djinni (air)" : {
				name : "Djinni's Elemental Gift",
				description : desc([
					"I gain Resistance to Thunder damage",
					"As a Bonus Action, I can gain a Flying Speed of 30 ft and I can Hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Thunder"]
			},
			"efreeti (fire)" : {
				name : "Efreeti's Elemental Gift",
				description : desc([
					"I gain Resistance to Fire damage",
					"As a Bonus Action, I can gain a Flying Speed of 30 ft and I can Hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Fire"]
			},
			"marid (water)" : {
				name : "Marid's Elemental Gift",
				description : desc([
					"I gain Resistance to Cold damage",
					"As a Bonus Action, I can gain a Flying Speed of 30 ft and I can Hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Cold"]
			},
			additional : "Fly 10 min",
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Sanctuary Vessel",
			source : [["T", 75], ["UA:SR", 3]],
			minlevel : 10,
			description : desc([
				"When I enter my vessel I can have up to 5 willing creatures I can see in 30 ft join me",
				"As a Bonus Action, I can eject any number of creatures from my genie's vessel",
				"Everyone is ejected when I leave it, I die, or if the vessel is destroyed",
				"Anyone who remains in the vessel for at least 10 min gains the benefits of a Short Rest",
				"Also, HD spend as part of this short rest has my Proficiency Bonus added to the roll"
			])
		},
		"subclassfeature14" : {
			name : "Limited Wish",
			source : [["T", 75], ["UA:SR", 3]],
			minlevel : 14,
			description : " [1\xD7 per 1d4 long rests]" + desc([
				"As an Action, I can cast a 6th-level or lower spell with a casting time time of one action",
				"This can be any spell; It doesn't require any costly components, it simply takes effect"
			]),
			action : [["action", ""]],
			extraLimitedFeatures : [{
				name : "Limited Wish",
				usages : 1,
				recovery : "1d4 LR"
			}]
		}
	}
});
AddSubClass("warlock_ua23pt7", "the undead",{
	regExpSearch : /^(?=.*undead)(?=.*warlock).*$/i,
	subname : "the Undead",
	source : [["VRGtR", 30]],
	spellcastingExtra : ["bane", "false life", "blindness/deafness", "phantasmal force", "phantom steed", "speak with dead", "death ward", "greater invisibility", "antilife shell", "cloudkill"],
	features : {
		"subclassfeature3" : {
			name : "Form of Dread",
			source : [["VRGtR", 30]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can transform for 1 minute and gain the following benefits:",
				" \u2022 I gain Temporary Hit Points equal to 1d10 + my Warlock level",
				" \u2022 I am immune to the Frightened condition",
				" \u2022 Once per turns when I hit an attack, I can force the target to make a Wis save",
				"   If the target fails this save, it is Frightened of me until the end of my next turn"
			]),
			additional : levels.map(function (n) {
				return "1d10+" + n + " temp HP";
			}),
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]],
			savetxt : { immune : ["frightened (Form of Dread)"] }
		},
		"subclassfeature6" : {
			name : "Grave Touched",
			source : [["VRGtR", 30]],
			minlevel : 6,
			description : desc([
				"I no longer need to eat, drink, or breathe",
				"Once per turn if I damage a creature with an attack, I can change its type to Necrotic",
				"While I'm in my Form of Dread, I can roll one extra damage die for this Necrotic damage"
			])
		},
		"subclassfeature10" : {
			name : "Necrotic Husk",
			source : [["VRGtR", 31]],
			minlevel : 10,
			description : desc([
				"I have Resistance to Necrotic damage, or Immunity while I'm in my Form of Dread",
				"As a Reaction when reduced to 0 HP, I can drop to 1 HP instead and erupt with energy",
				"Each creature of my choice within 30 ft takes 2d10 + my Warlock level Necrotic damage",
				"After this, I gain 1 level of Exhaustion and must complete 1d4 Long Rests to do so again"
			]),
			additional : levels.map(function (n) {
				return n < 10 ? "" : "2d10+" + n + " damage, 1\xD7 per 1d4 long rests"
			}),
			action : [["reaction", ""]],
			dmgres : [["Necrotic"]],
			savetxt : { immune : ["necrotic (Form of Dread)"] },
			extraLimitedFeatures : [{
				name : "Necrotic Husk (revive)",
				usages : 1,
				recovery : "1d4 LR"
			}]
		},
		"subclassfeature14" : {
			name : "Spirit Projection",
			source : [["VRGtR", 31]],
			minlevel : 14,
			description : desc([
				"As an action, I can project my spirit from my body, leaving it suspended and Unconscious",
				"This lasts 1 hour or until my concentration is broken; Damage and effects affect both",
				"When it ends, I can have my spirit return to my body or my body teleport to my spirit",
				"My spirit has my abilities, but no gear; While projecting I gain the following benefits:",
				" \u2022 My spirit and body gain Resistance to Bludgeoning, Piercing, and Slashing damage",
				" \u2022 My Conjuration/Necromancy spells need no Verbal, Somatic, non-costly Material comp.",
				" \u2022 I gain a Flying Speed equal to my Walking Speed and can Hover",
				" \u2022 Move through creatures/objects as Difficult Terrain; 1d10 force damage if end turn in",
				" \u2022 While in my Form of Dread, once per turns when I deal Necrotic damage, I can heal",
				"   I regain hit points equal to half the amount of Necrotic damage dealt"
			]),
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		}
	}
});
AddSubClass("warlock_ua23pt7", "ghost in the machine-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*warlock)(?=.*ghost)(?=.*(machine|computer)).*$/i,
	subname : "the Ghost in the Machine",
	source : [["UA:MM", 2]],
	spellcastingExtra : ["infallible relay-ua", "remote access-ua", "arcane hacking-ua", "digital phantom-ua", "haywire-ua", "invisibility to cameras-ua", "conjure knowbot-ua", "system backdoor-ua", "shutdown-ua", "synchronicity-ua"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["UA:MM", 2]],
			minlevel : 3,
			description : "\n   " + "I am proficient with hacking tools and know the On/Off cantrip",
			toolProfs : ["Hacking tools"],
			spellcastingBonus : {
				name : "Bonus Cantrip (On/Off)",
				spells : ["on/off-ua"],
				selection : ["on/off-ua"]
			}
		},
		"subclassfeature3.1" : {
			name : "Information Surge",
			source : [["UA:MM", 2]],
			minlevel : 3,
			description : desc([
				"As an action, I can cause a computerized device within 30 ft to make an Int save",
				"If the device is held/used by a creature, that creature makes the saving throw",
				"If the device is not held/used, it makes a save with a +0 modifier and disadvantage",
				"On a failed save, the device stops functioning until the end of my next turn"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Wire Walk",
			source : [["UA:MM", 3]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can teleport through a hardwired network to a point I can see",
				"Both where I start and end must be a device, cable, or socket connected to the network"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Personal Encryption",
			source : [["UA:MM", 3]],
			minlevel : 10,
			description : desc([
				"I have adv. on saves vs. scrying, thought detection, and magics for learning my location",
				"If the effect doesn't let me a save, the user has disadv. on checks to use it on me, if any"
			])
		},
		"subclassfeature14" : {
			name : "Technovirus",
			source : [["UA:MM", 3]],
			minlevel : 14,
			description : desc([
				"As an action, I make a melee spell attack to infect someone with a techno-organic virus",
				"The target takes 8d10 psychic damage, or half that with a successful Con save",
				"If it failed its save, I can use an action to cast Command on it while it remains infected",
				"It makes its save vs. this Command with disadvantage and I can cast it at any range",
				"It is infected until my next long rest; The virus can be removed with Lesser Restoration"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock_ua23pt7", "the undying light-ua", {
	regExpSearch : /^(?=.*warlock)(?=.*light)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname : "the Undying Light",
	source : [["UA:LDU", 3]],
	spellcastingExtra : ["burning hands", "flaming sphere", "daylight", "fire shield", "flame strike"],
	features : {
		"subclassfeature3" : {
			name : "Radiant Soul",
			source : [["UA:LDU", 3]],
			minlevel : 3,
			description : "\n   " + "I add my Cha modifier to cantrips/spells I cast that deal fire or radiant damage" + "\n   " + "I have resistance to radiant damage and know the Light and Sacred Flame cantrips",
			spellcastingBonus : [{
				name : "Radiant Soul",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Radiant Soul",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}],
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.isSpell && (/fire|radiant/i).test(fields.Damage_Type)) output.extraDmg += What('Cha Mod');
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire|radiant", "Cha");
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage."
				]
			}
		},
		"subclassfeature6" : {
			name : "Searing Vengeance",
			source : [["UA:LDU", 3]],
			minlevel : 6,
			description : "\n   " + "When I would make a death saving throw, I can instead spring back to my feet" + "\n   " + "I immediately stand up and recover HP equal to half my current HP maximum" + "\n   " + "Also, all hostiles within 30 ft of me take 10 + Charisma modifier in radiant damage" + "\n   " + "Damaged creatures are blinded until the end of my next turn",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Radiant Resilience",
			source : [["UA:LDU", 4]],
			minlevel : 10,
			description : "\n   " + "When I finish a short or long rest, I and up to five allies gain temporary hit points" + "\n   " + "I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
		},
		"subclassfeature14" : {
			name : "Healing Light",
			source : [["UA:LDU", 4]],
			minlevel : 14,
			description : "\n   " + "As a bonus action, I touch a creature and heal it by expending dice from my pool" + "\n   " + "I subtract the number of d6's used from my pool; I can expend up to 5d6 at a time" + "\n   " + "The target heals HP equal to the roll of the dice; I regain expended uses with a long rest",
			usages : "15d6 per ",
			usagescalc : "event.value = '15d6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("warlock_ua23pt7", "the seeker-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*warlock)(?=.*seeker).*$/i,
	subname : "the Seeker",
	source : [["UA:TF", 1]],
	spellcastingExtra : ["feather fall", "jump", "jump ua23pt7", "levitate", "locate object", "clairvoyance", "sending", "arcane eye", "locate creature", "legend lore", "passwall"],
	features : {
		"subclassfeature3" : {
			name : "Shielding Aurora",
			source : [["UA:TF", 1]],
			minlevel : 3,
			description : "\n   " + "As a Bonus Action, I create a whirling aurora of brilliant energy around me" + "\n   " + "It lasts until the end of my next turn and grants me Resistance to all damage" + "\n   " + "Any hostile ending its turn in 10 ft of me get Warlock level + Cha mod Radiant damage",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Astral Refuge",
			source : [["UA:TF", 2]],
			minlevel : 6,
			description : "\n   " + "As an action, I can step into an astral refuge, coming back at the end of the turn" + "\n   " + "While in the astral refuge, I can take two actions to cast spells targeting just me",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Far Wanderer",
			source : [["UA:TF", 2]],
			minlevel : 10,
			description : "\n   " + "I no longer need to breathe, and I gain Resistance to Fire damage and Cold damage",
			dmgres : ["Cold", "Fire"]
		},
		"subclassfeature14" : {
			name : "Astral Sequestration",
			source : [["UA:TF", 2]],
			minlevel : 14,
			description : "\n   " + "With a 5 minutes ritual, I can shift myself and ten willing creatures to the Astral Plane" + "\n   " + "While sequestered on Astral Plane, we gain the full benefits of a Short Rest" + "\n   " + "After this rest, we return to the same space as before, without any time having passed",
			usages : 1,
			recovery : "long rest"
		}
	}
});
AddSubClass("warlock_ua23pt7", "the raven queen-ua", { // Still valid 2021-09-21; this code includes contributions by Ben Y. and Wizzard
	regExpSearch : /^(?=.*\braven)(?=.*queen\b).*$/i,
	subname : "the Raven Queen",
	source : [["UA:WnW", 2]],
	spellcastingExtra : ["false life", "sanctuary", "silence", "spiritual weapon", "spiritual weapon ua22cs", "feign death", "speak with dead", "ice storm", "locate creature", "commune", "cone of cold"],
	features : {
		"subclassfeature3" : {
			name : "Sentinel Raven",
			source : [["UA:WnW", 2]],
			minlevel : 3,
			description : desc([
				"I gain the services of a spirit in the form of a raven (using the stats of a raven)",
				"It always obeys my commands, rolls its own Initiative, and can be slain",
				"While it's within 100 ft, I can telepathically speak with it and see/hear what it does",
				"While it's on my shoulder, I gain Darkvision 30 ft and add my Cha mod to Perception",
				"While it's on my shoulder, it can't be targeted, take damage, or take actions",
				"It vanishes if it is more than 5 miles away from me, it dies, or if I die",
				"If it dies, I gain advantage on all attack rolls against its killer for 24 hours",
				"After a Short Rest, I can recall it to me regardless of its location or if it died"
			]),
			vision : [["Darkvision", 30]],
			addMod : { type : "skill", field : "Perc", mod : "max(Cha|0)", text : "While my sentinel raven is perched on my shoulder, I can add my Charisma modifier to Perception." },
			creaturesAdd : [["Sentinel Raven"]],
			creatureOptions : [{
				name : "Sentinel Raven",
				source : [["UA:WnW", 2]],
				size : 5,
				type : "Beast",
				alignment : "Unaligned",
				ac : 12,
				hp : 1,
				hd : [1, 4],
				speed : "10 ft, fly 50 ft",
				scores : [2, 14, 8, 2, 12, 6],
				skills : {
					"perception" : 3
				},
				senses : "",
				passivePerception : 13,
				challengeRating : "0",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Beak",
					ability : 2,
					damage : [1, "", "piercing"],
					range : "Melee (5 ft)",
					description : "",
					abilitytodamage : false
				}],
				traits : [{
					name : "Mimicry",
					description : "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
				}, {
					name : "Sentinel",
					description : "The raven doesn't require sleep. While it is within 100 feet of me, it can awaken me from sleep as a bonus action."
				}, {
					name : "Shoulder Perch",
					description : "While perched on my shoulder, the raven can't be targeted by any attack or other harmful effect; only I can cast spells on it; it can't take damage; and it is incapacitated. It then also grants me darkvision 30 ft and a bonus to my Wisdom (Perception) equal to my Charisma modifier."
				}],
				features : [{
					name : "Sent by the Raven Queen",
					description : "The raven acts independently of me, but it always obeys my commands. In combat, it rolls its own initiative and acts on its own turn, but I control how it acts. If it is slain by a creature, I gain advantage on all attack rolls against the killer for the next 24 hours. While the raven is within 100 ft of me, I can telepathically command it and see through its eyes and hear what it hears.\n   The raven vanishes when it dies, if I die, or if we are separated by more than 5 miles. At the end of a short or long rest, I can call the raven back to reappear within 5 ft of me, regardless where it is or if it died."
				}]
			}]
		},
		"subclassfeature6" : {
			name : "Soul of the Raven",
			source : [["UA:WnW", 2]],
			minlevel : 6,
			description : desc([
				"As a Bonus Action, when my raven is perched on my shoulder, I can merge our bodies",
				"I become Tiny and replace my Speed with the raven's (10 ft, fly 50 ft)",
				"I can then use my action only to Dash, Disengage, Dodge, Help, Hide, or Search",
				"While merged, I still get all the benefits of my raven being perched on my shoulder",
				"I can end this as an action"
			]),
			action : [["bonus action", " (start)"], ['action', ' (end)']]
		},
		"subclassfeature10" : {
			name : "Raven's Shield",
			source : [["UA:WnW", 3]],
			minlevel : 10,
			description : "\n   " + "I can't be Frightened, have Advantage on death saves, and Resistance to Necrotic damage",
			savetxt : { immune : ["frightened"], adv_vs : ["death"] },
			dmgres : ["Necrotic"]
		},
		"subclassfeature14" : {
			name : "Queen's Right Hand",
			source : [["UA:WnW", 3]],
			minlevel : 14,
			description : "\n   " + "I can cast Finger of Death once per long rest",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Queen's Right Hand",
				spells : ["finger of death"],
				selection : ["finger of death"],
				firstCol : "oncelr"
			}
		}
	}
});
AddSubClass("warlock_ua23pt7", "the lurker in the deep-ua", {
	regExpSearch : /^(?=.*warlock)(?=.*lurker)(?=.*(deep|depth)).*$/i,
	subname : "the Lurker in the Deep",
	source : [["UA:SnW", 2]],
	spellcastingExtra : ["create or destroy water", "thunderwave", "gust of wind", "shatter", "lightning bolt", "sleet storm", "control water", "evard's black tentacles", "commune with nature", "cone of cold"],
	features : {
		"subclassfeature3" : {
			name : "Grasp of the Deep",
			source : [["UA:SnW", 3]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can summon or move a spectral tentacle and make an attack with it",
				"I can summon it to a space within 60 ft that I can see or move an existing one 30 ft",
				"I make melee spell attacks with 10 ft reach with it that deal Cold or Lightning damage",
				"Creatures hit by the tentacle suffer 10 ft Speed reduction until the start of my next turn",
				"The 10-ft long tentacle lasts for 1 minute or until I summon another"
			]),
			action : [["bonus action", " (summon/move)"]],
			recovery : "long rest",
			additional : levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8";
			}),
			usages : "Cha mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			weaponOptions : [{
				regExpSearch : /^((?=.*grasp)(?=.*deep)|(?=.*spectral)(?=.*tentacle)).*$/i,
				name : "Grasp of the Deep",
				source : [["UA:SnW", 3]],
				ability : 6,
				type : "Spell",
				damage : [1, 8, "Cold/Lightning"],
				range : "Melee (10 ft)",
				description : "My choice of Cold or Lightning damage; Target -10 ft speed until my next turn starts",
				abilitytodamage : false,
				litdGraspOfTheDeep : true
			}],
			weaponsAdd : ['Grasp of the Deep'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.litdGraspOfTheDeep && classes.known.warlock.level >= 10) {
							fields.Damage_Die = '2d8';
						};
					}
				]
			}
		},
		"subclassfeature1.1" : {
			name : "Scion of the Deep",
			source : [["UA:SnW", 3]],
			minlevel : 1,
			description : desc([
				"I can communicate telepathically with any Aberration, Beast, Elemental, or Monstrosity",
				"The creature must be within 120 ft of me and have an innate Swimming Speed"
			])
		},
		"subclassfeature6" : {
			name : "Fathomless Soul",
			source : [["UA:SnW", 3]],
			minlevel : 6,
			description : " [cold resistance]\n   I have a Swimming Speed equal to my Walking Speed; I can breathe both air and water",
			dmgres : ["Cold"],
			speed : { swim : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature6.1" : {
			name : "Guardian Grasp",
			source : [["UA:SnW", 3]],
			minlevel : 6,
			description : desc([
				"As a Reaction when a creature in 10 ft of my tentacle takes damage, I can have it help",
				"One creature takes only half damage and my spectral tentacle vanishes"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Devouring Maw",
			source : [["UA:SnW", 3]],
			minlevel : 10,
			description : desc([
				"As an action, I can summon a 10-ft radius translucent maw within 60 ft for 1 minute",
				"Creatures in the maw as it appear must Str save or be Restrained, can repeat save as action",
				"Creatures starting their turn in the maw take 3d6 Cold or Lightning damage (my choice)",
				"If a creature is in the maw at the start of my turn, I gain my Warlock level in Temp HP"
			]),
			action : [["action", ""]],
			additional : levels.map(function (n) {
				return n < 10 ? "" : n + " temp HP";
			}),
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Unleash the Depths",
			source : [["UA:SnW", 4]],
			minlevel : 14,
			description : desc([
				"As an action, I can choose one of the following effects to occur within 30 ft of me:",
				"\u2022 Teleport myself and up to 5 willing creatures I can see within 30 ft of the chosen point",
				"  The destination must be within 100 miles and visited by me within the last 24 hours",
				"\u2022 5 creatures within 30 ft of the chosen point that I can see are attacked by tentacles",
				"  The targets take 6d10 Cold or Lightning damage (my choice) and are knocked Prone",
				"  Each can make a Dexterity save to halve the damage and avoid being knocked Prone"
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("warlock_ua23pt7", "the noble genie-ua", {
	regExpSearch : /^(?=.*warlock)(?=.*noble)(?=.*\b(genie|djinni|dao|efreeti)\b).*$/i,
	subname : "the Noble Genie",
	source : [["UA:SP1", 4]],
	spellcastingExtra : ["fog cloud", "sleep", "enlarge/reduce", "phantasmal force", "create food and water", "protection from energy", "polymorph", "phantasmal killer", "bigby's hand", "creation"],
	features : {
		"subclassfeature3" : {
			name : "Collector's Vessel",
			source : [["UA:SP1", 5]],
			minlevel : 3,
			description : desc([
				"My patron gives me a magical vessel, a Tiny object which I can use as a spellcasting focus",
				"If I lose it, I can perform a 1-hour ceremony during a rest to receive a replacement",
				"As an action while holding it, I can create a tether to a willing target I can see in 100 ft",
				"This lasts for 1 hour, until I do this again, or the tethered target is reduced to 0 HP",
				"It also ends when the tethered target ends its turn further than 100 ft from me",
				"While the tether lasts, I add my Cha mod (min +1) to my Wis (Perception) checks",
				"Also, I can have spells I cast originate from the tethered creature's space"
			]),
			action : [["action", ""]],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Elemental Resistance",
			source : [["UA:SP1", 5]],
			minlevel : 6,
			description : desc([
				"When I finish a Long Rest, I can gain Acid, Cold, Fire, or Lightning Resistance (my choice)",
				"This lasts until I finish my next Long Rest; A creature tethered to my vessel also gains this"
			])
		},
		"subclassfeature10" : {
			name : "Protective Wish",
			source : [["UA:SP1", 5]],
			minlevel : 10,
			description : desc([
				"As a Reaction when I or my tethered creature is hit by an attack, we can swap places",
				"As we both teleport to each others location, the one hit by the attack switches as well"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10.1" : {
			name : "Genie's Entertainment",
			source : [["UA:SP1", 6]],
			minlevel : 10,
			description : desc([
				"As an action, I can have a creature I can see within 90 ft make a Charisma save",
				"If failed, it is drawn into my vessel and teleported to my patron's court for 1 minute",
				"In there it is Stunned but unharmed; At the end of each of its turns it can save to return"
			]),
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Collector's Call",
			source : [["UA:SP1", 6]],
			minlevel : 14,
			description : desc([
				"As an action, I can implore my patron if I make a Persuasion check vs. my spell save DC",
				"If I fail, the use is wasted; If I succeed, I can choose one of the following effects:",
				" \u2022 A creature I can see in 60 ft heals 8d6 HP and 1 Condition affecting it ends",
				"   This condition can be Blinded, Charmed, Deafened, Frightened, Paralyzed, or Poisoned",
				" \u2022 A creature I can see in 60 ft has Disadv. on attacks \u0026 saves until my next turn starts",
				" \u2022 I can cast Legend Lore without using material components",
				"I can regain a use of this by sacrificing 500 gp of nonmagical treasure to my patron"
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
			spellcastingBonus : {
				name : "Collector's Call",
				spells : ["legend lore"],
				selection : ["legend lore"],
				firstCol : 'Sp'
			},
			spellChanges : {
				"legend lore" : {
					components : "V,S",
					compMaterial : "",
					description : "Learn summary of lore of named or described person, place, or object",
					changes : "When I use my Collector's Call feature to cast Legend Lore, it doesn't require any material components."
				}
			}
		}
	}
});

// Add Wizard subclasses
AddSubClass("wizard_ua23pt7", "conjuration", {
	regExpSearch : /(conjuration|conjurer)/i,
	subname : "School of Conjuration",
	fullname : "Conjurer",
	source : [["P", 116], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Conjuration Savant",
			source : [["P", 116], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can add two Conjuration spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Conjuration spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Conj. spells", "2 Conj. spells", "3 Conj. spells", "3 Conj. spells", "4 Conj. spells", "4 Conj. spells", "5 Conj. spells", "5 Conj. spells", "6 Conj. spells", "6 Conj. spells", "7 Conj. spells", "7 Conj. spells", "8 Conj. spells", "8 Conj. spells", "9 Conj. spells", "9 Conj. spells", "10 Conj. spells", "10 Conj. spells"],
			spellcastingBonus : {
				name : "From the Conjuration school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Conj"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Minor Conjuration",
			source : [["P", 116]],
			minlevel : 3,
			description : "\n   " + "As an action, I can conjure an object up to 3 ft on each side and no more than 10 lbs" + "\n   " + "It must be of a form of a nonmagical object I have seen and is created within 10 ft" + "\n   " + "The object disappears after 1 hour, if it takes or deals damage, or when I use this again",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Benign Transposition",
			source : [["P", 116]],
			minlevel : 6,
			description : "\n   " + "As an action, I can teleport to a place within 30 ft that I can see" + "\n   " + "Instead, I can swap places with a willing Small/Medium creature in 30 ft that I can see" + "\n   " + "I can do this again after a long rest or casting a 1st-level or higher conjuration spell",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Focused Conjuration",
			source : [["P", 116]],
			minlevel : 10,
			description : "\n   " + "While I am concentrating on a conjuration spell, it can't be broken by taking damage"
		},
		"subclassfeature14" : {
			name : "Durable Summons",
			source : [["P", 116]],
			minlevel : 14,
			description : "\n   " + "Any creature I summon or create with a conjuration spell has 30 temporary hit points",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey.indexOf("conjure") !== -1 && !(/barrage|volley|knowbot/i).test(spellKey)) {
							spellObj.description = spellObj.description.replace(/verbal commands/i, "command").replace(/^summon /i, '') + "; +30 temp hp";
							return true;
						} else if ((/find (greater )?(steed|familiar)/i).test(spellKey)) {
							spellObj.description = spellObj.description.replace(/Gain the services of a ([^;]+)/i, "A $1 (+30 temp hp)");
							return true;
						}
					},
					"Any creature I summon or create with a conjuration spell gains 30 temporary hit points."
				]
			}
		}
	}
});
AddSubClass("wizard_ua23pt7", "enchantment", {
	regExpSearch : /(enchantment|enchanter)/i,
	subname : "School of Enchantment",
	fullname : "Enchanter",
	source : [["P", 117], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Enchantment Savant",
			source : [["P", 117], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can add two Enchantment spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Enchantment spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Ench. spells", "2 Ench. spells", "3 Ench. spells", "3 Ench. spells", "4 Ench. spells", "4 Ench. spells", "5 Ench. spells", "5 Ench. spells", "6 Ench. spells", "6 Ench. spells", "7 Ench. spells", "7 Ench. spells", "8 Ench. spells", "8 Ench. spells", "9 Ench. spells", "9 Ench. spells", "10 Ench. spells", "10 Ench. spells"],
			spellcastingBonus : {
				name : "From the Enchantment school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Ench"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Hypnotic Gaze",
			source : [["P", 117]],
			minlevel : 3,
			description : "\n   " + "As an action, a seen enemy within 5 ft must make a Wis save or be charmed" + "\n   " + "This doesn't work if it can't see/hear me; It's also incapacitated and reduced to 0 speed" + "\n   " + "This lasts until the end of my next turn, but I can use an action to extend the duration" + "\n   " + "It also ends if it takes damage, can't see or hear me, or is more than 5 ft from me" + "\n   " + "On success or once it ends, I can't use this on it again until after a long rest",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Instinctive Charm",
			source : [["P", 117]],
			minlevel : 6,
			description : "\n   " + "As a reaction, when someone I can see in 30 ft attacks me, it must make a Wis save" + "\n   " + "If failed, it must instead attack the closest creature within range (not me or self)" + "\n   " + "On a success, the target is immune to this until after my long rest; This is a charm effect",
			action : ["reaction", " (when attacked)"]
		},
		"subclassfeature10" : {
			name : "Split Enchantment",
			source : [["P", 117]],
			minlevel : 10,
			description : "\n   " + "When I cast an enchantment spell with only one target, I can target a second in range" + "\n   " + "This does not apply to cantrips",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || !spellObj.level || spellObj.school !== "Ench") return;
						var startDescr = spellObj.description;
						switch(spellKey) {
							case "animal messenger" :
								spellObj.description = spellObj.description.replace("Tiny beast delivers", "2 tiny beasts deliver single");
								break;
							case "antipathy/sympathy" :
								spellObj.description = spellObj.description.replace("Creature,", "2 crea, 1");
								break;
							case "heroism" :
							case "command" :
								spellObj.description = spellObj.description.replace(/, halt| as spell lasts/i, "");
							default :
								spellObj.description = spellObj.description.replace("1+1/SL", "2 or 1+1/SL").replace(/1 (crea(ture)?|beast|humanoid)/i, "2 $1s").replace(/creas\b/gi, "crea");
						}
						return startDescr !== spellObj.description;
					},
					"My enchantment, single-target 1st-level or higher spells can affect two targets instead of only one."
				]
			}
		},
		"subclassfeature14" : {
			name : "Alter Memories",
			source : [["P", 117]],
			minlevel : 14,
			description : "\n   " + "When I cast an enchantment spell that charms, I can have one target be unaware of it" + "\n   " + "Also, once before that spell ends, I can have that target forget time while affected" + "\n   " + "It must make an Intelligence save or lose up to 1 + Charisma modifier hours of memory"
		}
	}
});
AddSubClass("wizard_ua23pt7", "necromancy", {
	regExpSearch : /necromancy|necromancer|necromantic/i,
	subname : "School of Necromancy",
	fullname : "Necromancer",
	source : [["P", 118], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Necromancy Savant",
			source : [["P", 118], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can add two Necromancy spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Necromancy spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Necro. spells", "2 Necro. spells", "3 Necro. spells", "3 Necro. spells", "4 Necro. spells", "4 Necro. spells", "5 Necro. spells", "5 Necro. spells", "6 Necro. spells", "6 Necro. spells", "7 Necro. spells", "7 Necro. spells", "8 Necro. spells", "8 Necro. spells", "9 Necro. spells", "9 Necro. spells", "10 Necro. spells", "10 Necro. spells"],
			spellcastingBonus : {
				name : "From the Necromancy school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Necro"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Grim Harvest",
			source : [["P", 118]],
			minlevel : 3,
			description : "\n   " + "Once per turn, when I kill something with a 1st-level or higher spell, I regain hit points" + "\n   " + "The number of hit points regained is 2\xD7 the spell's level (or 3\xD7 with necromancy spells)" + "\n   " + "This doesn't occur for constructs/undead"
		},
		"subclassfeature6" : {
			name : "Undead Thralls",
			source : [["P", 119]],
			minlevel : 6,
			description : "\n   " + "I add Animate Dead to my spellbook and can have an additional target when casting it" + "\n   " + "Undead created by my necromancy spells have the following benefits:" + "\n   " + "They add my proficiency bonus to damage and my wizard level to their HP maximums",
			spellcastingBonus : {
				name : "Undead Thralls",
				spells : ["animate dead"],
				selection : ["animate dead"]
			},
			spellChanges : {
				"animate dead" : {
					description : "Turn corpses into 2+2/SL Skeletons or Zombies; control for 24h; bns a command within 60 ft",
					changes : "My Undead Thralls class feature allows me to animate one more corpse than normal with Animate Dead."
				}
			}
		},
		"subclassfeature10" : {
			name : "Inured to Undead",
			source : [["P", 119]],
			minlevel : 10,
			description : "\n   " + "I have resistance to necrotic damage and my hit point maximum can't be reduced",
			dmgres : ["Necrotic"]
		},
		"subclassfeature14" : {
			name : "Command Undead",
			source : [["P", 11]],
			minlevel : 14,
			description : "\n   " + "As an action, an undead within 60 ft that I can see must make a Charisma save" + "\n   " + "If its Int is > 7, it has adv. on the save; If its Int is > 11, it repeats the save every hour" + "\n   " + "If failed, it becomes friendly to me and obeys my commands until I use this on another" + "\n   " + "On success, it becomes permanently immune to my further attempts",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard_ua23pt7", "transmutation", {
	regExpSearch : /(transmutation|transmuter)/i,
	subname : "School of Transmutation",
	fullname : "Transmuter",
	source : [["P", 119], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Transmutation Savant",
			source : [["P", 119], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can add two Transmutation spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Transmutation spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Trans. spells", "2 Trans. spells", "3 Trans. spells", "3 Trans. spells", "4 Trans. spells", "4 Trans. spells", "5 Trans. spells", "5 Trans. spells", "6 Trans. spells", "6 Trans. spells", "7 Trans. spells", "7 Trans. spells", "8 Trans. spells", "8 Trans. spells", "9 Trans. spells", "9 Trans. spells", "10 Trans. spells", "10 Trans. spells"],
			spellcastingBonus : {
				name : "From the Transmutation school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Trans"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Minor Alchemy",
			source : [["P", 119]],
			minlevel : 3,
			description : "\n   " + "I can transform an object of wood/stone/iron/copper/silver into another of those" + "\n   " + "For each 10 min I spend, I can transform up to 1 cubic foot of the material" + "\n   " + "It reverts back when I lose concentration or after 1 hour"
		},
		"subclassfeature6" : {
			name : "Transmuter's Stone",
			source : [["P", 119]],
			minlevel : 6,
			description : desc([
				"In 8 hours, I can create a transmuter's stone that gives its wielder one of the following:",
				" \u2022 Darkvision 60 ft",
				" \u2022 10 ft increase to speed while unencumbered",
				" \u2022 Proficiency in Constitution saving throws",
				" \u2022 Resistance to either acid, cold, fire, lightning, or thunder damage",
				"The benefit is chosen at creation; I can have only one active stone at a time",
				"I can change the benefit when I cast a 1st-level or higher transmutation spell with it"
			])
		},
		"subclassfeature10" : {
			name : "Shapechanger",
			source : [["P", 119]],
			minlevel : 10,
			description : "\n   " + "I add Polymorph to my spellbook; I can cast it on myself without using a spell slot" + "\n   " + "When I do that, I can only transform into a beast with a challenge rating of 1 or lower",
			recovery : "short rest",
			usages : 1,
			spellcastingBonus : [{
				name : "Add to spellbook",
				spells : ["polymorph"],
				selection : ["polymorph"]
			}, {
				name : "1/SR no spell slot",
				spells : ["polymorph"],
				selection : ["polymorph"],
				firstCol : "oncesr"
			}],
			spellChanges : {
				"polymorph" : {
					name : "Polymorph (special)",
					range : "Self",
					description : "I transformed into a beast of my choice with a CR 1 or lower; see book",
					changes : "Using my Shapechanger class feature, I can cast Polymorph once per short rest without using a spell slot, but when I do so I can only cast it on myself and transform into a beast."
				}
			}
		},
		"subclassfeature14" : {
			name : "Master Transmuter",
			source : [["P", 119]],
			minlevel : 14,
			description : "\n   " + "As an action, I can destroy my transmuter's stone and do one of the four following:" + "\n    " + "1) Major Transformation" + "\n      " + "In 10 minutes, I transmute one nonmagical object up to 5 cubic foot into another" + "\n      " + "This new, nonmagical object must be of similar size and mass and equal or less value" + "\n    " + "2) Panacea" + "\n      " + "One touched has all curses, diseases, and poisons removed and is healed to max HP" + "\n    " + "3) Restore Life" + "\n      " + "I cast Raise Dead without using spell slots or needing to have it in my spellbook" + "\n    " + "4) Restore Youth" + "\n      " + "A touched creature's apparent age is reduced by 3d10 years (to a minimum of 13)",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard_ua23pt7", "bladesinging", {
	regExpSearch : /(bladesinging|bladesinger)/i,
	subname : "Tradition of Bladesinging",
	fullname : "Bladesinger",
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	source : [["S", 142], ["T", 76]],
	features : {
		"subclassfeature3" : {
			name : "Training in War and Song",
			source : [["S", 142], ["T", 76]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with light armor, a one-handed melee weapon, and Performance",
			armorProfs : [true, false, false, false],
			skills : ["Performance"]
		},
		"subclassfeature3.1" : {
			name : "Bladesong",
			source : [["S", 142], ["T", 76]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can start the bladesong for 1 minute; I can dismiss it at any time",
				"It stops when I wear a shield, medium or heavy armor, or attack with two hands",
				"While the bladesong is active I have the following benefits:",
				" \u2022 Intelligence modifier (min 1) to AC",
				" \u2022 Base walking speed increases by 10 foot",
				" \u2022 Advantage on Dexterity (Acrobatics) checks",
				" \u2022 Intelligence modifier (min 1) to concentration saves for maintaining conc. on a spell"
			]),
			action : [["bonus action", " (start)"]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Extra Attack",
			source : [["S", 142], ["T", 77]],
			minlevel : 6,
			description : desc([
				"I can attack twice instead of once when I take the Attack action on my turn",
				"Moreover, I can cast one of my cantrips in place of one of those attacks"
			])
		},
		"subclassfeature10" : {
			name : "Song of Defense",
			source : [["S", 142], ["T", 77]],
			minlevel : 10,
			description : desc([
				"As a reaction while my bladesong is active, I can expend a spell slot to reduce damage",
				"The damage I take is reduced by 5 for every level of the spell slot I expend"
			]),
			action : [["reaction", " (in bladesong)"]]

		},
		"subclassfeature14" : {
			name : "Song of Victory",
			source : [["S", 142], ["T", 77]],
			minlevel : 14,
			description : "\n   " + "While my bladesong is active, I add my Int mod (min 1) to melee weapon attack damage",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon && (/blade.?song/i).test(v.WeaponTextName)) {
							output.extraDmg += Math.max(1, Number(What('Int Mod')));
						};
					},
					"If I include the word 'Bladesong' in the name or description of a melee weapon, it gets my Intelligence modifier added to its Damage."
				]
			}
		}
	}
});
AddSubClass("wizard_ua23pt7", "war magic", {
	regExpSearch : /^(?=.*war)(?=.*(wizard|magic|mage)).*$/i,
	subname : "War Magic",
	source : [["X", 59]],
	fullname : "War Mage",
	features : {
		"subclassfeature3" : { //has to be identical to a feature named in the ClassList
			name : "Arcane Deflection",
			source : [["X", 59]],
			minlevel : 3,
			description : desc([
				"As a reaction when I'm hit by an attack, I can gain +2 to my AC against that attack",
				"As a reaction when I fail a save, I can gain +4 bonus to that saving throw",
				"After I do either, I can't cast spells other than cantrips until the end of my next turn"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Tactical Wit",
			source : [["X", 60]],
			minlevel : 3,
			description : "\n   " + "I gain a bonus to my initiative rolls equal to my Intelligence modifier",
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Power Surge",
			source : [["X", 60]],
			minlevel : 6,
			description : desc([
				"I have a pool of stored power surges that I can use to empower my damaging spells",
				"I gain a power surge whenever I successfully end a spell with Dispel Magic or Counterspell",
				"This pool can store a number of power surges equal to my Intelligence modifier (min 1)",
				"It resets to 1 power surge after a long rest or when I have 0 surges left after a short rest",
				"When I deal damage with a wizard spell, I can spend a power surge to do extra damage",
				"One target takes half my wizard level in force damage; I can do this only once per turn"
			]),
			usages : "Resets to 1 after ",
			usagescalc : "event.value = !event.value || event.value == 'Resets to 1 after ' ? 1 : event.value;",
			recovery : "long rest",
			additional : levels.map( function(n) { return n < 6 ? "" : "+" + Math.floor(n/2) + " force damage"; })
		},
		"subclassfeature10" : {
			name : "Durable Magic",
			source : [["X", 60]],
			minlevel : 10,
			description : "\n   " + "While I'm maintaining concentration on a spell, I gain +2 to AC and all saving throws"
		},
		"subclassfeature14" : {
			name : "Deflecting Shroud",
			source : [["X", 60]],
			minlevel : 14,
			description : desc([
				"When I use my Arcane Deflection feature, magical energy arcs from me to creatures",
				"Up to 3 targets I can see within 60 ft of me take half my wizard level in force damage"
			]),
			additional : levels.map( function(n) { return n < 14 ? "" : Math.floor(n/2) + " force damage"; })
		}
	}
});
AddSubClass("wizard_ua23pt7", "chronurgy magic", { // contains contributions by bassbogan on GitHub and @Nod_Hero#2046 on Discord
	regExpSearch : /chronurgy|chronomancer|chronurgist/i,
	subname : "Chronurgy Magic",
	source : [["W", 184]],
	fullname : "Chronurgist",
	features : {
		"subclassfeature3" : {
			name : "Chronal Shift",
			source : [["W", 184]],
			minlevel : 3,
			description : desc([
				"As a reaction after I or a creature I see rolls a check, save, or attack, I can force a reroll",
				"I can do this after I see if the roll fails or succeeds; The target must use the second roll."
			]),
			action : [["reaction", ""]],
			usages : 2,
			recovery : "long rest",
			eval : function() {
				// Always have access to dunamancy spells enabled
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") === -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true]);
				}
			},
			removeeval : function() {
				// Remove access to dunamancy spells when removing subclass
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") !== -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true], "remove");
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Temporal Awareness",
			source : [["W", 184]],
			minlevel : 3,
			description : desc([
				"I gain a bonus to my initiative rolls equal to my Intelligence modifier"
			]),
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Momentary Stasis",
			source : [["W", 184]],
			minlevel : 6,
			description : desc([
				"As an action, I can have a Large or smaller creature I can see in 60 ft make a Con save",
				"If failed, it is encased in a field of magical energy, incapacitated and has a speed of 0",
				"This lasts until the end of my next turn or until the creature takes any damage"
			]),
			action : [["action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Arcane Abeyance",
			source : [["W", 184]],
			minlevel : 10,
			description : desc([
				"When I use a spell slot to cast a 4th-level or lower spell, I can condense it into a mote",
				"The spell is frozen in time at the moment of casting and held within a grey bead",
				"The bead is a Tiny object with 1 HP, AC 15, and immune to poison and psychic damage",
				"After 1 hour or if it is destroyed, it vanishes with a flash of light and the spell is lost",
				"As an action, a creature holding the bead can release the spell within as if they cast it",
				"The spell still uses my spell attack bonus and save DC; The bead vanishes once used"
			]),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Convergent Future",
			source : [["W", 185]],
			minlevel : 14,
			description : desc([
				"As a reaction after I or a creature I see rolls a check, save, or attack, I can choose the roll",
				"I decide the number rolled, if it is the minimum needed to succeed or 1 less than that",
				"When I use this feature, I gain a level of exhaustion which only a long rest can remove"
			]),
			action : [["reaction", ""]]
		}
	}
});
AddSubClass("wizard_ua23pt7", "graviturgy magic", { // contains contributions by bassbogan on GitHub and @Nod_Hero#2046 on Discord
	regExpSearch : /^((?=.*graviturgy)(?=.*(wizard|magic|mage))|gravimancer|graviturgist).*$/i,
	subname : "Graviturgy Magic",
	source : [["W", 185]],
	fullname : "Graviturgist",
	features : {
		"subclassfeature3" : {
			name : "Adjust Density",
			source : [["W", 185]],
			minlevel : 3,
			description : desc([
				"As an action, I can magically double or halve the weight of a creature I can see in 30 ft",
				"If doubled, it has -10 ft speed and advantage on Strength checks and Strength saves",
				"If halved, it has +10 ft speed, can jump twice as far, and disadv. on Str checks and saves",
				"This lasts for 1 minute or until my concentration ends (like concentrating on a spell)"
			]),
			action : [["action", ""]],
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 10 ? "Large" : "Huge") + " or smaller creatures";
			}),
			eval : function() {
				// Always have access to dunamancy spells enabled
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") === -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true]);
				}
			},
			removeeval : function() {
				// Remove access to dunamancy spells when removing subclass
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") !== -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true], "remove");
				}
			}
		},
		"subclassfeature6" : {
			name : "Gravity Well",
			source : [["W", 185]],
			minlevel : 6,
			description : desc([
				"Whenever I cast a spell on a creature, I can move it 5 ft to an empty space of my choice",
				"This only works if the target is willing, fails its save vs. the spell, or the spell attack hits it"
			]),
		},
		"subclassfeature10" : {
			name : "Violent Attraction",
			source : [["W", 185]],
			minlevel : 10,
			description : desc([
				"As a reaction when I or a creature I see in 60 ft hits a weapon attack, I can improve it",
				"I increase the weapon's velocity, causing it to deal an extra 1d10 damage",
				"As a reaction if a creature within 60 ft is damaged by a fall, I can increase it by 2d10"
			]),
			action : [["reaction", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Event Horizon",
			source : [["W", 185]],
			minlevel : 14,
			description : desc([
				"As an action, I can magically emit powerful gravitational magic that pulls on hostiles",
				"Whenever a creature hostile to me starts it turn within 30 ft, it must make Str save",
				"If failed, it takes 2d10 force damage and its speed is 0 until the start of its next turn",
				"If successful, it takes half the damage and every foot it moves this turn costs 2 extra feet",
				"This lasts for 1 minute or until my concentration ends (like concentrating on a spell)",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
		}
	}
});
AddSubClass("wizard_ua23pt7", "order of scribes", {
	regExpSearch : /^(?=.*wizard)(?=.*order)(?=.*scribes?).*$|scrivener/i,
	subname : "Order of Scribes",
	source : [["T", 77]],
	features : {
		"subclassfeature3" : {
			name : "Wizardly Quill",
			source : [["T", 77]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can magically create a Tiny quill with the following properties:",
				" \u2022 It doesn't require ink and produces ink in the color of my choice when writing with it",
				" \u2022 I require only 2 minutes per spell level to transcribe spells into my spellbook with it",
				" \u2022 As a bonus action, I can use it to erase a text written with it if within 5 ft of the text",
				"The quill disappear if I create another or if I die"
			]),
			action : [["bonus action", " (create/erase)"]]
		},
		"subclassfeature3.1" : {
			name : "Awakened Spellbook",
			source : [["T", 77]],
			minlevel : 3,
			description : desc([
				"My spellbook gains sentience and grants me the following benefits while I am holding it:",
				" \u2022 I can use the book as a spellcasting focus for my wizard spells",
				" \u2022 When I cast a wizard spell using a spell slot, I can temporarily replace its damage type",
				"   The new type must appear in my spellbook in a spell of the same level as the spell slot",
				" \u2022 Once per long rest, I can ritual cast a wizard spell without 10 min extra casting time",
				"I can replace it over a short rest, transferring its spells and sentience to a blank book"
			]),
			additional : "fast ritual cast",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Manifest Mind",
			source : [["T", 78]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can have the mind of my awakened spellbook manifest within 60 ft",
				"The spellbook needs to be on my person to do this; The mind is a Tiny spectral object",
				"The mind is intangible, doesn't occupy a space, hovers, and sheds dim light in 10 ft",
				"It can hear, see, has 60 ft darkvision, and telepathically shares with me what it perceives",
				"As a bonus action, I can dismiss it or move it up to 30 ft to an empty space I can see",
				"It can pass through creatures; It stops manifesting if it's over 300 ft from me or I die",
				"It also stop manifesting if Dispel Magic is cast on it or the awakened spellbook is no more",
				"I can do this once per long rest, or by expending a spell slot (SS 1+) to manifest it again"
			]),
			action : [["bonus action", " (conjure/move/dismiss)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 1+"
		},
		"subclassfeature6.1" : {
			name : "Manifest Mind: Cast Spell",
			source : [["T", 78]],
			minlevel : 6,
			description : desc([
				"I can have wizard spells I cast on my turn originate from the mind while its manifested"
			]),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Master Scrivener",
			source : [["T", 78]],
			minlevel : 10,
			description : desc([
				"When I finish a long rest, I can write a spell in my awakened spellbook on a blank paper",
				"It must be a level 1 or 2 spell with 1 action casting time; My spellbook must be in 5 ft",
				"As an action, I can use this scroll to cast the spell on it at one higher level than normal",
				"Only I can use the scroll; The scroll turns blank again when I use it or finish a long rest",
				"Also, using my Wizardly Quill, the gold and time I need to craft spell scrolls is halved"
			]),
			action : [["action", " (cast scroll)"]],
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Master Scrivener scoll",
				"class" : "wizard",
				level : [1, 2],
				firstCol : "MS"
			},
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (!isDuplicate && spName === "wizard" && spellObj.firstCol === "MS" && (spellObj.level === 1 || spellObj.level === 2)) {
							// Calculate upcasting to be exactly 1 level higher
							var rxMatch = /(\d*d?\d+)\+(\d*d?\d+)\/(\d*SL)\b/i;
							while (rxMatch.test(spellObj.description)) {
								var aMatch = spellObj.description.match(rxMatch);
								var strDie1 = !isNaN(aMatch[1]) ? true : /\d+d\d+/i.test(aMatch[1]) ? aMatch[1].replace(/\d+(d\d+)/i, "$1") : false;
								var strDie2 = !isNaN(aMatch[2]) ? true : /\d+d\d+/i.test(aMatch[2]) ? aMatch[2].replace(/\d+(d\d+)/i, "$1") : undefined;
								if (!/^SL$/i.test(aMatch[3])) {
									// only increases if more than 1 level higher spell slot, so nothing we can do with it, just remove all upcasting
									removeSpellUpcasting(spellObj);
								} else if (/^\d/.test(aMatch[1]) && strDie1 === strDie2) {
									// identical type steps (e.g. 1d6+1d6/SL or 3+1/SL), so add the second to the first
									var strNew = (Number(aMatch[1].replace(/^(\d+).*/, "$1")) + Number(aMatch[2].replace(/^(\d+).*/, "$1"))) + aMatch[1].replace(/^\d+(.*)/, "$1");
									spellObj.description = spellObj.description.replace(rxMatch, strNew);
								} else {
									// non-identical steps, so leave the first and second along, but remove the /SL
									spellObj.description = spellObj.description.replace(rxMatch, "$1+$2");
								}
							}
							// Remove costly material components
							spellObj.description = spellObj.description.replace(/ \(\d+ ?gp( cons\.?)?\)/i, '');
							// List only the scroll as a component from the spell
							spellObj.components = "M\u2020";
							spellObj.compMaterial = "Spells cast from spell scrolls don't require any components other than the spell scroll itself.";
							return true;
						}
					},
					"When I finish a long rest, I can create a scroll of a spell in my spellbook using my Master Scrivener class feature. I can then cast this spell from the scroll and the spell is cast as if using a spell slot one level higher than its spell level."
				]
			}
		},
		"subclassfeature14" : {
			name : "One with the Word",
			source : [["T", 78]],
			minlevel : 14,
			description : ' [see 3rd page "Notes" section]',
			action : [["reaction", " (when damaged)"]],
			advantages : [["Arcana", true]],
			"one with the word" : {
				name : "One with the Word",
				extraname : "Order of Scribes 14",
				source : [["T", 78]],
				description : desc([
					"While my awakened spellbook is on my person, I have advantage on Int (Arcana) checks",
					"As a reaction when I take damage while my spellbook's mind is manifested, I can dismiss it",
					"In dismissing the manifested mind like this, I prevent all of the damage taken by me",
					"After doing so, I lose spells with a combined level of 3d6 from my awakened spellbook",
					"If I do not have enough spells left to cover the number rolled, I drop to 0 HP instead",
					"The spells vanish from my spellbook, reappearing only after I finish 1d6 long rests",
					"I can't cast spells that I lost this way, even if found on a scroll or in another spellbook"
				]),
				usages : 1,
				recovery : "long rest"
			},
			autoSelectExtrachoices : [{
				extrachoice : "one with the word"
			}]
		}
	}
});
AddSubClass("wizard_ua23pt7", "artificer-ua", {
	regExpSearch : /^((?=.*(wizard|mage|magus))(?=.*artificer))|(?=.*infuser).*$/i,
	subname : "Tradition of the Artificer",
	source : [["UA:E", 3]],
	fullname : "Wizard (Artificer)",
	features : {
		"subclassfeature3" : {
			name : "Infuse Potions",
			source : [["UA:E", 3]],
			minlevel : 3,
			description : "\n   " + "I can produce magic potions if I spend 10 minutes and expend a spell slot" + "\n   " + "I can not regain the spell slot until the potion is consumed or a week has passed",
			additional : ["", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions"]
		},
		"subclassfeature3.1" : {
			name : "Infuse Scrolls",
			source : [["UA:E", 4]],
			minlevel : 3,
			description : "\n   " + "I can produce a scroll after a short rest if I spend 10 minutes and my Arcane Recovery" + "\n   " + "I subtract the spell's level from the levels worth of slots I regain using Arcane Recovery" + "\n   " + "This reduction applies till the scroll is used and I finish a long rest",
			additional : ["", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls"]
		},
		"subclassfeature6" : {
			name : "Infuse Weapons and Armor",
			source : [["UA:E", 4]],
			minlevel : 6,
			description : "\n   " + "I can spend 10 minutes to produce a magic weapon, armor, a shield, or ammunition" + "\n   " + "The item retains its magic for 8 hours and the spell slot I expend is:" + "\n   " + "2nd: +1 ammunition (20 pieces), 3rd: +1 weapon or +1 shield, 4th: +1 armor," + "\n   " + "5th: +2 weapon or +2 ammunition (20 pieces), 6th: +3 armor.",
			additional : ["", "", "", "", "", "1 weapon or armor", "1 weapon or armor", "1 weapon or armor", "1 weapon or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor"]
		},
		"subclassfeature10" : {
			name : "Superior Artificer",
			source : [["UA:E", 4]],
			minlevel : 10,
			description : "\n   " + "I can create one additional scroll, potion, weapon, or armor when I use Infuse"
		},
		"subclassfeature14" : {
			name : "Master Artificer",
			source : [["UA:E", 4]],
			minlevel : 14,
			description : "\n   " + "I can produce a variety of magic items from Tables A and B from the DMG" + "\n   " + "It takes 1 week for such an item and I cannot do it again for a month",
			usages : 1,
			recovery : "Month"
		}
	}
});
AddSubClass("wizard_ua23pt7", "technomancy-ua", { // Still valid 2021-09-21
	regExpSearch : /technomancy|technomancer/i,
	subname : "Technomancy",
	source : [["UA:MM", 3]],
	fullname : "Technomancer",
	features : {
		"subclassfeature3": {
			name : "Bonus Proficiencies",
			source : [["UA:MM", 3]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with sidearms and hacking tools",
			weaponProfs : [false, false, ["Sidearms"]],
			toolProfs : ["Hacking tools"]
		},
		"subclassfeature3.1": {
			name : "Technological Savant",
			source : [["UA:MM", 3]],
			minlevel : 3,
			description : desc([
				"I can use a single tablet computer (or similar) instead of a spellbook",
				"Spells copied into this device cost half the normal amount of gp"
			])
		},
		"subclassfeature6": {
			name : "Program Spell",
			source : [["UA:MM", 4]],
			minlevel : 6,
			description : desc([
				"I can cast a spell into a device of at least smartphone-level of computing power",
				"Variables of the spell are chosen at time of casting; I can have only one active at a time",
				"As an action within the next 48 hours, the spell can be cast from the device",
				"I can't activate a concentration spell in this way if I am concentrating on another spell"
			]),
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature10": {
			name : "Online Casting",
			source : [["UA:MM", 4]],
			minlevel : 10,
			description : desc([
				"I can cast a spell, that is not area-of-effect, through networked electronic devices",
				"If the spell requires sight/hearing, the audio/visual must be transmitted electronically",
				"The spell's range is determined from me to my device plus from the target to its device"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature14": {
			name : "Chained Device",
			source : [["UA:MM", 4]],
			minlevel : 14,
			description : "\n   " + "I can use a held/worn tablet computer to concentrate on a spell I cast instead of me" + "\n   " + "If the device is separated from me, turned off, or broken, the effect is lost",
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("wizard_ua23pt7", "lore mastery-ua", { // Still valid 2021-09-21; this code includes contributions by /u/magicmanfk
	regExpSearch : /^(?=.*\blore)(?=.*mastery?\b).*$/i,
	subname : "Lore Mastery",
	source : [["UA:WnW", 5]],
	fullname : "Lore Master",
	features : {
		"subclassfeature3" : {
			name : "Lore Master",
			source : [["UA:WnW", 6]],
			minlevel : 3,
			description : desc([
				"I can use my Intelligence modifier for initiative instead of my Dexterity modifier",
				"I get expertise with each Arcana, History, Nature, and Religion, if I'm proficient with it"
			]),
			skills : [["Arcana", "only"], ["History", "only"], ["Nature", "only"], ["Religion", "only"]],
			addMod : { type : "skill", field : "Init", mod : "max(Int-Dex|0)", text : "I use my Intelligence modifier for initiative rolls instead of Dexterity." }
		},
		"subclassfeature3.1" : {
			name : "Spell Secrets: Elements",
			source : [["UA:WnW", 6]],
			minlevel : 3,
			description : desc([
				"I can change the damage type of spells I cast using spell slots (so not cantrips)",
				"I can swap out acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage"
			])
		},
		"subclassfeature2.2" : {
			name : "Spell Secrets: Saves",
			source : [["UA:WnW", 6]],
			minlevel : 2,
			description : "\n   " + "I can change the saving throw ability score to another for a spell I cast using a spell slot",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Alchemical Casting",
			source : [["UA:WnW", 6]],
			minlevel : 6,
			description : desc([
				"When I cast a spell with a spell slot, I can expend one additional spell slot to augment it",
				" - 1st-level slot: one damage roll of the spell adds +2d10 force damage",
				" - 2nd-level slot: if the range of the spell is at least 30 ft, it becomes 1 mile",
				" - 3rd-level slot: the spell's save DC increases by 2"
			])
		},
		"subclassfeature10" : {
			name : "Prodigious Memory",
			source : [["UA:WnW", 6]],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can replace one of my prepared spells with another from my book",
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Master of Magic",
			source : [["UA:WnW", 6]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can call to mind one spell of my choice from any class' spell list",
				"This spell must be of a level I have spell slots for and that I don't already have prepared",
				"I can then cast it using the normal spellcasting rules, including expending a spell slot",
				"It counts a wizard spell; I can only cast the spell during the same turn I call it to mind"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("wizard_ua23pt7", "school of invention-ua", {
	regExpSearch : /^(?=.*wizard)(?=.*invent(ion|or)).*$/i,
	subname : "School of Invention",
	source : [["UA:TS", 2]],
	fullname : "Wizard (Inventor)",
	features : {
		"subclassfeature3" : {
			name : "Tools of the Inventor",
			source : [["UA:TS", 3]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with light armor and two tools of my choice",
			toolProfs : [["Any one tool", 2]],
			armorProfs : [true, false, false, false]
		},
		"subclassfeature3.1" : {
			name : "Arcanomechanical Armor",
			source : [["UA:TS", 3]],
			minlevel : 3,
			description : desc([
				"After a long rest, I can transform a studded leather armor into arcanomechanical armor",
				"This is a magic light armor that gives AC 12 + Dex mod and force resistance, if attuned",
				"Only I can attune to it; Creating a new one removes the magic from the previous"
			]),
			dmgres : ["Force"],
			armorOptions : [{
				regExpSearch : /arcanomechanical/i,
				name : "Arcanomechanical",
				source : [["UA:TS", 3]],
				type : "light",
				ac : 12,
				weight : 8,
				invName : "Arcanomechanical armor"
			}],
			armorAdd : "Arcanomechanical"
		},
		"subclassfeature3.2" : {
			name : "Reckless Casting",
			source : [["UA:TS", 3]],
			minlevel : 3,
			description : desc([
				"As an action, I can attempt to cast a random spell or cantrip by rolling a d10 on a table",
				"On a roll of 10, I roll again twice on that table and cast both results",
				"However, if I then roll 10 on either dice, the whole casting fails and the action is wasted",
				"If I choose cantrip, I roll on the table once and cast the result",
				"If I choose a spell, I expend a spell slot and roll twice on the table for the slot's level",
				"I can then choose which of the results I use; Use 5th-level table for spell slots over level 5"
			]),
			toNotesPage : [{
				name : "Reckless Casting Tables",
				note : "\nd10\tCantrip\t\td10\tCantrip" + desc([
					" 1\tAcid Splash\t\t    6\tRay of Frost",
					" 2\tChill Touch\t\t    7\tShocking Grasp",
					" 3\tFire Bolt\t\t    8\tSacred Flame",
					" 4\tLight\t\t    9\tThorn Whip",
					" 5\tPoison Spray\t  10\tRoll twice; Another 10, all is wasted"
				]) + "\n\nd10\t1st-Level Spell\td10\t1st-Level Spell" + desc([
					" 1\tBurning Hands\t    6\tFog Cloud",
					" 2\tChromatic Orb\t    7\tJump",
					" 3\tColor Spray\t\t    8\tMagic Missile",
					" 4\tFaerie Fire\t\t    9\tThunderwave",
					" 5\tFalse Life\t\t  10\tRoll twice; Another 10, all is wasted"
				]) + "\n\nd10\t2nd-Level Spell\td10\t2nd-Level Spell" + desc([
					" 1\tBlur\t\t    6\tLevitate",
					" 2\tDarkness\t\t    7\tMelf's Acid Arrow",
					" 3\tEnlarge/Reduce\t    8\tScorching Ray",
					" 4\tGust of Wind\t    9\tShatter",
					" 5\tInvisibility\t\t  10\tRoll twice; Another 10, all is wasted"
				]) + "\n\nd10\t3rd-Level Spell\td10\t3rd-Level Spell" + desc([
					" 1\tBlink\t\t    6\tGaseous Form",
					" 2\tFear\t\t    7\tLightning Bolt",
					" 3\tFeign Death \t    8\tSleet Storm",
					" 4\tFireball\t\t    9\tStinking Cloud",
					" 5\tFly\t\t  10\tRoll twice; Another 10, all is wasted"
				]) + "\n\nd10\t4th-Level Spell\td10\t4th-Level Spell" + desc([
					" 1\tBlight\t\t    6\tIce Storm",
					" 2\tConfusion\t\t    7\tPhantasmal Killer",
					" 3\tEvard's Black Tentacles\t    8\tStoneskin",
					" 4\tFire Shield\t\t    9\tWall of Fire",
					" 5\tGreater Invisibility\t  10\tRoll twice; Another 10, all is wasted"
				]) + "\n\nd10\t5th-Level Spell\td10\t5th-Level Spell" + desc([
					" 1\tCloudkill\t\t    6\tInsect Plague",
					" 2\tCone of Cold\t    7\tMass Cure Wounds",
					" 3\tDestructive Wave\t    8\tWall of Force",
					" 4\tFlame Strike\t    9\tWall of Stone",
					" 5\tHold Monster\t  10\tRoll twice; Another 10, all is wasted"
				])
			}]
		},
		"subclassfeature6" : {
			name : "Alchemical Casting",
			source : [["UA:TS", 4]],
			minlevel : 6,
			description : desc([
				"I can manipulate spells cast while wearing and attuned to my Arcanomechanical Armor",
				"By expending an additional 1st or 2nd-level spell slot, I do the following:",
				"\u2022 1st: I can substitute acid, cold, fire, lightning, or thunder damage for another type",
				"\u2022 2nd: I increase the spells damage, if any, by 2d10 force damage against one target"
			])
		},
		"subclassfeature10" : {
			name : "Prodigious Inspiration",
			source : [["UA:TS", 4]],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can replace a prepared spell with another from my spellbook",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Controlled Chaos",
			source : [["UA:TS", 4]],
			minlevel : 14,
			description : desc([
				"When I expend a spell slot to cast a spell using Reckless Casting, it is more powerful",
				"I can roll on the table that is one level higher than the spell slot expended"
			])
		}
	}
});
AddSubClass("wizard_ua23pt7", "onomancy-ua", {
	regExpSearch : /onomancy|onomancer/i,
	subname : "Onomancy",
	source : [["UA:CDnW", 4]],
	fullname : "Onomancer",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["UA:CDnW", 4]],
			minlevel : 3,
			description : "\n   I learn a language of my choice and gain proficiency with calligrapher's tools",
			toolProfs : ["Calligrapher's tools"],
			languageProfs : [1]
		},
		"subclassfeature3.1" : {
			name : "Extract Name",
			source : [["UA:CDnW", 4]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can have a creature I can see within 60 ft make a Wisdom save",
				"If failed, it is charmed by me until my next turn ends and I mentally learn its true name",
				"If successful, I know that my magic failed and can't use this feature again on it"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature3.2" : {
			name : "Fateful Naming",
			source : [["UA:CDnW", 4]],
			minlevel : 3,
			description : desc([
				"I add Bane and Bless to my spellbook and they count as wizard spells for me",
				"These are always prepared, but don't count against the number of spells I can prepare",
				"I can cast either spell without using a spell slot by speaking the true name of a target"
			]),
			spellcastingBonus : {
				name : "Fateful Naming",
				spells : ["bane", "bless"],
				selection : ["bane", "bless"],
				times : 2,
				firstCol : "markedbox"
			},
			additional : "with true name",
			usages : "Int mod per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Resonants",
			source : [["UA:CDnW", 4]],
			minlevel : 6,
			description : desc([
				'Use the "Choose Feature" button above to add Resonants to the third page',
				"Whenever I gain a wizard level, I can replace a Resonant I know with another"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : (n < 10 ? 2 : 4) + " resonants known";
			}),
			extraTimes : levels.map(function (n) {
				return n < 6 ? 0 : n < 10 ? 2 : 4;
			}),
			extraname : "Resonant",
			extrachoices : ["Absorption", "Devastation", "Dissolution", "Nullification", "Puppetry", "Sympathy"],
			"absorption" : {
				name : "Absorption",
				source : [["UA:CDnW", 5]],
				description : "\n   When the spell deals damage to the named target, I gain a number of temporary hit points",
				additional : levels.map(function (n) {
					return (n < 10 ? 3 : n < 14 ? 4 : 5) + "d6 temporary hit points";
				})
			},
			"devastation" : {
				name : "Devastation",
				source : [["UA:CDnW", 5]],
				description : "\n   The named creature has disadvantage on its first saving throw against the spell"
			},
			"dissolution" : {
				name : "Dissolution",
				source : [["UA:CDnW", 5]],
				description : "\n   The first time the named creature takes damage from the spell, it takes extra damage",
				additional : levels.map(function (n) {
					return "+" + (n < 10 ? 2 : n < 14 ? 3 : 4) + "d8 force damage";
				})
			},
			"nullification" : {
				name : "Nullification",
				source : [["UA:CDnW", 5]],
				description : desc([
					"If the named creature is affected by any other spells, I know what those spells are",
					"In addition, I can try to end one of my choice with an Int check (DC 10 + spell level)"
				])
			},
			"puppetry" : {
				name : "Puppetry",
				source : [["UA:CDnW", 5]],
				description : desc([
					"The first time the named creature takes damage from the spell, it is moved as well",
					"I choose to knock it prone or move it up to 10 ft directly towards me or away from me"
				])
			},
			"sympathy" : {
				name : "Sympathy",
				source : [["UA:CDnW", 5]],
				description : "\n   I can target the named creature with the spell even if I can't see it or it is has total cover"
			}
		},
		"subclassfeature6.1" : {
			name : "Resonant Utterance",
			source : [["UA:CDnW", 4]],
			minlevel : 6,
			description : desc([
				"When I use a spell slot to cast a wizard spell, I can use one resonant that I know",
				"The resonant will only work if I speak the true name of a creature targeted by the spell"
			]),
			usages : "half wizard level per ",
			usagescalc : "event.value = classes.known.wizard ? Math.floor(classes.known.wizard.level / 2) : 0;",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Relentless Naming",
			source : [["UA:CDnW", 5]],
			minlevel : 14,
			description : desc([
				"When I speak the true name of a creature when I cast a damage dealing spell at it,",
				"I can have that spell deal force or psychic damage instead of its normal damage type"
			])
		}
	}
});
AddSubClass("wizard_ua23pt7", "psionics-ua", {
	regExpSearch : /^((?=.*(wizard|mage|magus))(?=.*psionics)|(?=.*(psionicist|mentalist)))(?!.*(wild mage|\bpsion\b|mystic)).*$/i,
	subname : "Psionics",
	source : [["UA:FRnW", 3]],
	fullname : "Psionicist",
	features : {
		"subclassfeature3" : {
			name : "Psionic Focus",
			source : [["UA:FRnW", 3]],
			minlevel : 3,
			description : desc([
				"I learn to channel psionic energy through an object special to me, my psionic focus",
				"It allows me to reroll a roll of 1 on any psychic or force damage die for my wizard spells",
				"I can use this as my spellcasting focus; If lost, I can recreate it by meditating for 1 hour"
			])
		},
		"subclassfeature3.1" : {
			name : "Psionic Devotion",
			source : [["UA:FRnW", 4]],
			minlevel : 3,
			description : desc([
				'I learn one cantrip: Friends, Mage Hand, or Message; Use "Choose Feature" button above',
				"While my psionic focus is on me, I can cast it as a bonus action without components"
			]),
			choices : ["Friends", "Mage Hand", "Message"],
			"friends" : {
				name : "Psionic Devotion: Friends",
				description : desc([
					"I learn the Friends cantrip and while my psionic focus in on me, I am better at casting it",
					"I can cast it as a bonus action without components and the target doesn't become hostile"
				]),
				spellcastingBonus : {
					name : "Psionic Devotion",
					spells : ["friends"],
					selection : ["friends"],
					firstCol : "atwill"
				},
				spellChanges : {
					"friends" : {
						time : "1 bns",
						components : "",
						compMaterial : "",
						description : "Adv. on Cha checks vs. 1 crea currently not hostile; when spell ends, crea realizes I used magic",
						changes : "While my psionic focus is on my person, I can cast Friends as a bonus action without requiring any components and when the spell ends, the target doesn't become hostile to me."
					}
				}
			},
			"mage hand" : {
				name : "Psionic Devotion: Mage Hand",
				description : desc([
					"I learn Mage Hand and while my psionic focus in on me, I am better at casting it",
					"I can then cast it as a bonus action without components and can make the hand invisible",
					"Also, I can control the hand as a bonus action instead of an action"
				]),
				spellcastingBonus : {
					name : "Psionic Devotion",
					spells : ["mage hand"],
					selection : ["mage hand"],
					firstCol : "atwill"
				},
				spellChanges : {
					"mage hand" : {
						time : "1 bns",
						components : "",
						description : "Create invisible hand for simple tasks or carry up to 10 lb; 1 bns action to control; can't have multiples",
						changes : "While my psionic focus is on my person, I can cast Mage Hand as a bonus action without requiring any components, can make the hand invisible, and controlling the hand is a bonus action for me."
					}
				}
			},
			"message" : {
				name : "Psionic Devotion: Message",
				description : desc([
					"I learn the Message cantrip and while my psionic focus in on me, I'm better at casting it",
					"I can then cast it as a bonus action without components",
					"Also, I don't need to point at the target or whisper the message out loud"
				]),
				spellcastingBonus : {
					name : "Psionic Devotion",
					spells : ["message"],
					selection : ["message"],
					firstCol : "atwill"
				},
				spellChanges : {
					"message" : {
						time : "1 bns",
						components : "",
						compMaterial : "",
						description : "1 crea hears message I think; can reply with a whisper; nobody can overhear; needs no straight line",
						changes : "While my psionic focus is on my person, I can cast Message as a bonus action without requiring any components, don't need to point toward the target, and I don't need to whisper my message out loud."
					}
				}
			}
		},
		"subclassfeature6" : {
			name : "Thought Form",
			source : [["UA:FRnW", 4]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can use my psionic focus to transform my body into luminous energy",
				"I chose the shape (my size); It sheds 5-ft radius dim light; My equipment melds into it",
				"My psionic focus hovers within the energy; In this form, I have the following benefits:",
				" \u2022 Spells I cast require no verbal, somatic, or material components without a gold cost",
				" \u2022 I have resistance to psychic and nonmagical bludgeoning/piercing/slashing damage",
				"This lasts for 10 minutes or until I'm incapacitated, die, or use a bonus action to end it"
			]),
			action : [["bonus action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Mental Discipline",
			source : [["UA:FRnW", 4]],
			minlevel : 10,
			description : desc([
				'I learn one spell: Dominate Person, Scrying, or Telekinesis; Use "Choose Feature" button',
				"I can cast the spell without a spell slot once per long rest (and normally with a spell slot)"
			]),
			usages : 1,
			recovery : "long rest",
			choices : ["Dominate Person", "Scrying", "Telekinesis"],
			"dominate person" : {
				name : "Mental Discipline: Dominate Person",
				description : desc([
					"I add Dominate Person to my spellbook and can cast it without requiring components",
					"Once per long rest, I can cast it without using a spell slot; I can also prepare it as normal"
				]),
				limfeaname : "Dominate Person (without spell slot)",
				spellcastingBonus : {
					name : "Mental Discipline",
					spells : ["dominate person"],
					selection : ["dominate person"]
				},
				spellChanges : {
					"dominate person" : {
						components : "",
						changes : "I can cast Dominate Person without requiring any components. Once per long rest, I can cast it without using a spell slot. I can also cast it by using spell slots as normal."
					}
				}
			},
			"scrying" : {
				name : "Mental Discipline: Scrying",
				description : desc([
					"I add Scrying to my spellbook and can cast it without requiring components",
					"Once per long rest, I can cast it without using a spell slot; I can also prepare it as normal"
				]),
				limfeaname : "Scrying (without spell slot)",
				spellcastingBonus : {
					name : "Mental Discipline",
					spells : ["scrying"],
					selection : ["scrying"]
				},
				spellChanges : {
					"scrying" : {
						components : "",
						compMaterial : "",
						changes : "I can cast Scrying without requiring any components. Once per long rest, I can cast it without using a spell slot. I can also cast it by using spell slots as normal."
					}
				}
			},
			"telekinesis" : {
				name : "Mental Discipline: Telekinesis",
				description : desc([
					"I add Telekinesis to my spellbook and can cast it without requiring components",
					"Once per long rest, I can cast it without using a spell slot; I can also prepare it as normal"
				]),
				limfeaname : "Telekinesis (without spell slot)",
				spellcastingBonus : {
					name : "Mental Discipline",
					spells : ["telekinesis"],
					selection : ["telekinesis"]
				},
				spellChanges : {
					"telekinesis" : {
						components : "",
						changes : "I can cast Telekinesis without requiring any components. Once per long rest, I can cast it without using a spell slot. I can also cast it by using spell slots as normal."
					}
				}
			}
		},
		"subclassfeature10.1" : {
			name : "Empowered Psionics",
			source : [["UA:FRnW", 5]],
			minlevel : 10,
			description : "\n   I add my Int modifier to one target of my wizard spells that do psychic or force damage",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("wizard") != -1) {
							return genericSpellDmgEdit(spellKey, spellObj, "force|psychic", "Int", true);
						}
					},
					"When I deal psychic or force damage with a wizard spell, I can add my Intelligence modifier to the damage against one of the spell's targets."
				]
			}
		},
		"subclassfeature14" : {
			name : "Thought Travel",
			source : [["UA:FRnW", 5]],
			minlevel : 14,
			description : desc([
				"While in my thought form, I gain a fly speed equal to my walking speed and I can hover",
				"I can then also move through creatures and objects as if they were difficult terrain",
				"I take 1d10 force damage if I end my turn inside an object",
				"If I end my thought form while inside an object, I'm shunted to the nearest empty space",
				"I then take 1d10 force damage for every 5 ft traveled"
			])
		}
	}
});
AddSubClass("wizard_ua23pt7", "runecrafter-ua", {
	regExpSearch : /runecrafting|runecrafter/i,
	subname : "Tradition of Runecrafting",
	fullname : "Runecrafter",
	source : [["UA:GO", 3]],
	features : {
		"subclassfeature3" : {
			name : "Runes of Understanding",
			source : [["UA:GO", 3]],
			minlevel : 3,
			description : desc([
				"I always have Comprehend Languages prepared and can cast it without using a spell slot",
				"It doesn't count against the number of spells I can prepare"
			]),
			spellcastingBonus : [{
				name : "Runes of Understanding",
				spells : ["comprehend languages"],
				selection : ["comprehend languages"],
				firstCol : "atwill"
			}]
		},
		"subclassfeature3.1" : {
			name : "Runic Empowerment",
			source : [["UA:GO", 3]],
			minlevel : 3,
			description : desc([
				"When I cast a spell using a spell slot, I can invoke one of the following runes:",
				" \u2022 Life Rune: Me or a creature I can see within 30 ft gains 5 temp HP per spell slot level",
				" \u2022 War Rune: A creature I can see within 30 ft is marked until the end of my next turn",
				"   Attack rolls against it gain a bonus equal to half the spell slot level, rounded up",
				" \u2022 Wind Rune: Until my next turn starts, my speed increases by 5 ft per spell slot level",
				"   Additionally, my movement doesn't provoke opportunity attacks"
			]),
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Sigils of Warding",
			source : [["UA:GO", 3]],
			minlevel : 6,
			description : desc([
				"As a reaction when I fail a Strength, Dexterity, or Constitution save, I can call on a rune",
				"I expend a use of my Runic Empowerment feature and succeed on the save instead"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Rune Maven",
			source : [["UA:GO", 3]],
			minlevel : 10,
			description : desc([
				"Whenever I use Arcane Recovery, I also regain uses of Runic Empowerment",
				"I regain a number of uses equal to half my Intelligence modifier, rounded up (min 1)"
			])
		},
		"subclassfeature14" : {
			name : "Engraved Enmity",
			source : [["UA:GO", 3]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can have a creature I can see within 60 ft make a Wisdom save",
				"If failed, it is marked by an enmity rune for 1 min, or until I lose my concentration",
				"A glowing energy mote hovers over the marked and it suffers the following effects:",
				" \u2022 The marked has disadvantage on saving throws against spells I cast",
				" \u2022 The glow makes the marked visible even if invisible, and they can't become invisible",
				" \u2022 When marking and as a bonus action on subsequent turns, I can curse the creature",
				"   The next time an ally hits the cursed with an attack, it also takes 1d8 force damage",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 3+",
			action : [["bonus action", ""]]
		}
	}
});
/*RunFunctionAtEnd(function() {
	var theTheurgySubclass = AddSubClass("wizard_ua23pt7", "theurgy-ua", { // Still valid 2021-09-21
		regExpSearch : /^((?=.*mystic)(?=.*theurge))|(?=.*(theurgy|theurgist)).*$/i,
		subname : "Theurgy",
		source : [["UA:TF", 1], ["UA:WR", 1]],
		fullname : "Theurgist",
		features : {
			"subclassfeature3" : {
				name : "Arcane Initiate",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 3,
				description : "\n   " + 'Choose a Cleric Domain using the "Choose Feature" button above' + "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the chosen domain spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks",
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if (spName !== "wizard_ua23pt7" || spType.indexOf("bonus") !== -1 || !CurrentSpells.wizard_ua23pt7.extra || !CurrentSpells.wizard_ua23pt7.selectSp || !spList.level || !spList.level[1]) return;
							var domainSpells = CurrentSpells.wizard.extra;
							// now stop this function if even one of the domain spells is not already in the spellbook
							var knownSpells = [].concat(CurrentSpells.wizard_ua23pt7.selectSp ? CurrentSpells.wizard_ua23pt7.selectSp : []).concat(CurrentSpells.wizard_ua23pt7.selectSpSB ? CurrentSpells.wizard_ua23pt7.selectSpSB : []);
							for (var i = 0; i < domainSpells.length; i++) {
								if (knownSpells.indexOf(domainSpells[i]) == -1) return;
							}
							// get all the cleric spells, level 1-9
							var clericSpells = CreateSpellList({"class" : "cleric", level : [1,9]}, false, false, false);
							spList.extraspells = spList.extraspells.concat(clericSpells);
						},
						"When I gain a wizard level after my spellbook already has all the spells of my chosen domain, I can instead select any cleric spell of a level I can cast as one of the spells I gain from levelling up."
					]
				},
				choices : [],
				choiceDependencies : [{
					feature : "subclassfeature3.3"
				}, {
					feature : "subclassfeature6"
				}, {
					feature : "subclassfeature10"
				}, {
					feature : "subclassfeature14"
				}]
			},
			"subclassfeature3.1" : {
				name : "Channel Arcana",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 3,
				description : "\n   " + "I can channel arcane energy from my deity; the save for this is my wizard spell DC",
				usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
				recovery : "short rest"
			},
			"subclassfeature3.2" : {
				name : "Channel Arcana: Divine Arcana",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 3,
				description : "\n   " + "As a bonus action, I speak a prayer to control the flow of magic around me" + "\n   " + "The next spell I cast gains a +2 bonus to its attack roll or saving throw DC",
				action : ["bonus action", ""]
			},
			"subclassfeature3.3" : {
				name : "Channel Arcana: Domain",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 3,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			},
			"subclassfeature6" : {
				name : "Arcane Acolyte",
				source : [["UA:TF", 3], ["UA:WR", 1]],
				minlevel : 6,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			},
			"subclassfeature10" : {
				name : "Arcane Priest",
				source : [["UA:TF", 3], ["UA:WR", 2]],
				minlevel : 10,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			},
			"subclassfeature14" : {
				name : "Arcane High Priest",
				source : [["UA:TF", 3], ["UA:WR", 2]],
				minlevel : 14,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			}
		}
	});
	var MTfeat = ClassSubList[theTheurgySubclass].features;
	for (var i = 0; i < ClassList.cleric_ua23pt6.subclasses[1].length; i++) {
		var aDomain = ClassSubList[ClassList.cleric_ua23pt6.subclasses[1][i]];
		if (!aDomain) continue;
		var dSource = aDomain.source ? aDomain.source : aDomain.features["subclassfeature3"] && aDomain.features["subclassfeature3"].source ? aDomain.features["subclassfeature3"].source : [["UA:TF", 0], ["UA:WR", 0]];
		
		var suffix = 1;
		var entryDoNm = aDomain.subname;
		while (MTfeat["subclassfeature3"].choices.indexOf(entryDoNm) !== -1) {
			suffix += 1;
			entryDoNm = aDomain.subname + " (" + suffix + ")";
		};
		MTfeat["subclassfeature3"].choices.push(entryDoNm);
		MTfeat["subclassfeature3"][entryDoNm.toLowerCase()] = {
			name : "Arcane Initiate: " + aDomain.subname,
			source : dSource,
			spellcastingExtra : aDomain.spellcastingExtra,
			description : "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the " + aDomain.subname.toLowerCase() + " spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks"
		};
		var AIdomain = MTfeat["subclassfeature3"][entryDoNm.toLowerCase()];
		for (var aFea in aDomain.features) {
			var dFea = aDomain.features[aFea];
			if (dFea.minlevel === 2 && (/channel divinity/i).test(dFea.name)) {
				MTfeat["subclassfeature3.3"].choices.push(entryDoNm);
				MTfeat["subclassfeature3.3"][entryDoNm.toLowerCase()] = newObj(dFea);
				MTfeat["subclassfeature3.3"][entryDoNm.toLowerCase()].name = MTfeat["subclassfeature3.3"][entryDoNm.toLowerCase()].name.replace(/channel divinity/i, "Channel Arcana");
			};
			if (dFea.minlevel === 1 && !dFea.armor && !dFea.weapons && !dFea.armorProfs && !dFea.weaponProfs) {
				if (MTfeat["subclassfeature6"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature6"].choices.push(entryDoNm);
					MTfeat["subclassfeature6"][entryDoNm.toLowerCase()] = newObj(dFea);
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature6"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
			if (dFea.minlevel === 6 && !dFea.armor && !dFea.weapons && !dFea.armorProfs && !dFea.weaponProfs) {
				if (MTfeat["subclassfeature10"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature10"].choices.push(entryDoNm);
					MTfeat["subclassfeature10"][entryDoNm.toLowerCase()] = newObj(dFea);
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature10"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
			if (dFea.minlevel === 17 && !dFea.armor && !dFea.weapons && !dFea.armorProfs && !dFea.weaponProfs) {
				if (MTfeat["subclassfeature14"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature14"].choices.push(entryDoNm);
					MTfeat["subclassfeature14"][entryDoNm.toLowerCase()] = newObj(dFea);
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature14"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
		};
	};
});*/