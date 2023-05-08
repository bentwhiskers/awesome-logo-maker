// TODO: include packages needed
// inquirer, jest, shape classes,

const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateSvg = require('./lib/generateSvg');


// TODO: create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color name or a hexidecimal color number for your text:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color name or a hexidecimal color number for your shape:'
    }
];

// TODO: create a function to write an SVG file
// must also output text "Generated logo.svg" to the command line
// logo.svg is a 300x200 pixel img

function writeToFile(fileName, data) {
    const fileName = './examples/logo.svg';

    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log('Generated ' + fileName)
    })
};

// TODO: create a function to initialize the app

function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateSvg(answers)))
};

// Function call to initialize app

init();