// TODO: include packages needed
// inquirer, jest, shape classes,

const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSvg.js');
const questions = require('./lib/questions.js');

// TODO: create a function to write an SVG file
// must also output text "Generated logo.svg" to the command line
// logo.svg is a 300x200 pixel img

function writeToFile(data) {
    const fileName = './examples/logo.svg';

    writeFile(fileName, data, function (err) {
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