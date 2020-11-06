'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


var FizzBuzz = function(input){
	if(!Array.isArray(input) || input.length == 0){
		return 'Invalid Input\n';
	}
	
	var output = '';
	input.forEach(each => {
		var num = parseInt(each);
		if(!Number.isNaN(num)){
			if(num%3 == 0 || num%5 == 0){
					 if(num%3 != 0) output += `Buzz\n`;
				else if(num%5 != 0) output += `Fizz\n`;
				else                output += `FizzBuzz\n`;
			}else{
				output += `Divided ${num} by 3\n`;
				output += `Divided ${num} by 5\n`;
			}
		}else output += 'Invalid Item\n';
	});

	return output;
}


// GET request expecting "input" from request query
app.get('/', (req, res) => {
	console.log('GET:', req.query)
	var output = FizzBuzz(req.query.input);
	console.log(output);
	res.send(output);
});

// POST request expecting "input" from request body
app.post('/', (req, res) => {
	console.log('POST:', req.body)
	var output = FizzBuzz(req.body.input);
	console.log(output);
	res.send(output);
});


const port = 5000;
app.listen(port, () => {
	console.log(`Local server: http://localhost:${port}`);
});

