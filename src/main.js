import './styles.sass'



// aux functions
const getById = id => document.getElementById(id),
	log = console.log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - -



// global funcs
const init = () => {

	// DOM elements / their values
	const text = getById('text').innerText,
		accept = getById('accept');

	// main function
	function textTransform(){

		// input text
		const string = text.split(' ');

		let actualColor = 0;

		// set random color from colors-arguments
		function setColor(gotten_colors){
			
			function getRandom(){
				let rand = Math.floor( Math.random() * (gotten_colors.length) );
				if (rand === actualColor) return getRandom()
				else return rand
			}

			/* (gotten_colors.length < 2) ? actualColor = 0 :  */actualColor = getRandom();			
			return gotten_colors[actualColor];

		}

		/*
			output text
			each word in string to array of letters
			each letter to span
			join letters back to words
			join words separated by ' '
		*/
		const newStr = string.map( word =>
			word.split('')
			.map( symbol =>

				`<span style="color: ${setColor( getColors( getById('colors').value ) )}">${symbol}</span>`

			)
			.join('') )
			.join(' ');

		getById('text2').innerHTML = newStr;

		log(getColors( getById('colors').value ))
	}

	accept.addEventListener('click', textTransform);

}

// getting colors array from input textarea
const getColors = inputColorsList => {

	let newList = inputColorsList
		.split('')
		.map( item => 

			(item === ',' || item === ';' || item === '\u000A') ?
			' ' :
			item

		)
		.join('')
		.split(' ')
		.filter( item => item !== '')

	let colorsList = new Set(newList)

	return Array.from(colorsList)

}
// - - - - - - - - - - - - - - - - - -

window.addEventListener('load', init);

