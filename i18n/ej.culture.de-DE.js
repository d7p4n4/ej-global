ej.addCulture( "de-DE", {
	name: "de-DE",
	englishName: "German (Germany)",
	nativeName: "Deutsch (Deutschland)",
	language: "de",
	numberFormat: {
		pattern: ["-n"],
		",": ".",
		".": ",",
		groupSizes: [3],
		negativeInfinity: "-unendlich",
		positiveInfinity: "+unendlich",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
				namesAbbr: ["So","Mo","Di","Mi","Do","Fr","Sa"],
				namesShort: ["So","Mo","Di","Mi","Do","Fr","Sa"]
			},
			months: {
				names: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],
				namesAbbr: ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "dddd, d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, d. MMMM yyyy HH:mm",
				F: "dddd, d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});