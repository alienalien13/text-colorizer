import './styles.sass'

// global functions
const getById = id => document.getElementById(id),
	getByClass = className => document.getElementsByClassName(className),
	log = console.log,
	init = function() {
		// DOM elements
		const text = getById('text'),
			colors = getById('colors'),
			accept = getById('accept');
		//
		var symbolNumber = 0,
			actualColor = 0;
		// main function
		function textTransform(){
			// input text
			const string = text.innerText.split(' ');
			/*
				output text
				each word in string to array of letters
				each letter to span
				join letters back to words
				join words separated by ' '
			*/
			const newStr = string.map( word => word.split('').map( symbol =>
				`<span class='all-symbols'>${symbol}</span>`
			).join('')).join(' ');

			getById('text2').innerHTML = newStr;

			setColors(['red', 'blue', 'green', 'black', 'yellow']);
		}

		accept.addEventListener('click', textTransform);
		
		function setColors(gotten_colors){
			
			const pervColor = '',
				actualSymbol = getByClass('all-symbols')[symbolNumber],
				symbolsAmount = getByClass('all-symbols').length;
			
			var numb = 0;
			
			function getRandom(){
				var rand = Math.floor( Math.random() * (gotten_colors.length) );
				if (rand === actualColor) return getRandom()
				else return rand
			}
			
			numb = getRandom();

			actualColor = numb;			
			actualSymbol.style.color = gotten_colors[numb];

			symbolNumber++;

			(symbolNumber < symbolsAmount) ? setColors(gotten_colors) : symbolNumber = 0

		}

	}

window.addEventListener('load', init);