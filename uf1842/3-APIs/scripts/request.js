async function getPuzzle(wordCount) {
	/* let hiddenSentence = "Buena Suerte"; */

	const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
	const data = await response.json();
	return data.puzzle;
}
