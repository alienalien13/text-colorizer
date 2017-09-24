import './styles.sass'



// aux functions
const getById = id => document.getElementById(id),
	log = console.log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - -



// global funcs
const init = () => {

	const string = getById('text').innerText.split(' '), // input text
		accept = getById('accept'); // accept button

	// main function
	function textTransform(colors){

		let actualColor = 0 // actualColor value init

		// set random color from colors-arguments
		function setColor(gottenColors){

			function getRandom(){
				let rand = Math.floor( Math.random() * (gottenColors.length) );
				if (rand === actualColor) return getRandom()
				else return rand
			}

			if (gottenColors.length > 1) {
				actualColor = getRandom();
				return gottenColors[actualColor]
			} else if (gottenColors.length === 1) return gottenColors[0]

		}

		const newString = string.map( word => // words array
			word.split('') // symbols array
				.map( symbol =>

					`<span style="color: ${setColor(colors)}">${symbol}</span>`

				) // transform symbol to <span>
				.join('') ) // join symbols to words
				.join(' '); // join words to string

		getById('text').innerHTML = newString;

	}

	accept.addEventListener('click', function(){

		let allowedColors = ['red', 'black', 'gray', 'green', 'yellow', 'silver', 'blue', 'gold', 'white'],
			unexpectedSymbols = (getById('colors').value.match(/[^a-zA-Z\s\n,;\u000A]/ig));

		(unexpectedSymbols || !getById('colors').value) ?
		log('ERROR', unexpectedSymbols ? new Set(unexpectedSymbols) :'EMPTY') :
		textTransform( getColors( getById('colors').value , allowedColors) );

		log( getColors( getById('colors').value, allowedColors ) )

	});

}

// getting colors array from input textarea
const getColors = (inputColorsList, allowableColors) => Array.from(

	new Set(
		inputColorsList
			.split('') // symbols array
			.map( symbol => 

				(symbol === ',' || symbol === ';' || symbol === '\u000A') ?
				' ' :
				symbol

			) // replace ',' ';' and 'line break' with spacees
			.join('') // get single line string
			.split(' ') // get words
			.filter( item => item !== '' && allowableColors.indexOf(item) !== -1) // filter empty items in array and just allowed colors
		)
	)
		
// - - - - - - - - - - - - - - - - - -

window.addEventListener('load', init);