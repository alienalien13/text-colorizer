import './styles.sass'



// aux functions
const getById = id => document.getElementById(id),
	getByClass = className => document.getElementsByClassName(className),
	log = console.log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - -



// addons
const trim = str => str.replace(/^\s+|\s+$/g, "");
// - - - - - - - - - - - - - - - - - - - - - - - - - - -



// global funcs
const init = () => {

	// DOM elements
	const text = getById('text'),
		colors = getById('colors'),
		accept = getById('accept');

	// main function
	function textTransform(){

		// input text
		const string = text.innerText.split(' ');

		let actualColor = 0;

		// set random color from colors-arguments
		function setColor(gotten_colors){
			
			function getRandom(){
				let rand = Math.floor( Math.random() * (gotten_colors.length) );
				if (rand === actualColor) return getRandom()
				else return rand
			}

			actualColor = getRandom();			
			return gotten_colors[actualColor];

		}

		/*
			output text
			each word in string to array of letters
			each letter to span
			join letters back to words
			join words separated by ' '
		*/
		const newStr = string.map( word => word.split('').map( symbol => {

			return `<span style="color: ${setColor(['red', 'blue', 'green', 'black', 'yellow'])}">${symbol}</span>`;

		} ).join('') ).join(' ');

		getById('text2').innerHTML = newStr;

		log( getColors(getById('colors').value) )
	}

	accept.addEventListener('click', textTransform);

}

const getColors = inputColorsList => {

	return trim( inputColorsList.split('').map( item => {

		if (item === ',' || item === ';' || item === '') return ' '
		else return item

	} ).join('') )

}

// - - - - - - - - - - - - - - - - - -

window.addEventListener('load', init);

