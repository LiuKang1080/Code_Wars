// Complementary DNA

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and 
functioning of living organisms. If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA 
(string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at 
all (again, except for Haskell). More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/


function DNAStrand(dna) {
	// create variables
	let dna_result = [];
	// create the DNA Map object
	let dna_map = new Map([
		["A", "T"],
		["T", "A"],
		["C", "G"],
		["G", "C"]
	]);

	// loop through the DNA string
	for (let i = 0; i < dna.length; i++) {
		// push the complementary into the dna_result array
		dna_result.push(dna_map.get(dna[i]));
	}

	// join the array together into a string and return it
	return dna_result.join("");
}


console.log(DNAStrand("ATTGC"));
