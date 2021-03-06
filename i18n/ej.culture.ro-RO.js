ej.addCulture( "ro-RO", {
	name: "ro-RO",
	englishName: "Romanian (Romania)",
	nativeName: "română (România)",
	language: "ro",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NaN (nu este un număr)",
		negativeInfinity: "-Infinit",
		positiveInfinity: "Infinit",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "RON"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],
				namesAbbr: ["D","L","Ma","Mi","J","V","S"],
				namesShort: ["D","L","Ma","Mi","J","V","S"]
			},
			months: {
				names: ["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie",""],
				namesAbbr: ["ian.","feb.","mar.","apr.","mai.","iun.","iul.","aug.","sep.","oct.","nov.","dec.",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			patterns: {
				d: "dd.MM.yyyy",
				D: "d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d MMMM yyyy H:mm",
				F: "d MMMM yyyy H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
