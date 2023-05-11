// function called within index.js to generate the SVG depending on the user data 

const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

function generateSvg(data) {
    
    if (data.shape === 'Circle') {
        let userShape = new Circle (data.shapeColor, data.text, data.textColor)
        return userShape.renderShape()
    };

    if (data.shape === 'Square') {
        let userShape = new Square (data.shapeColor, data.text, data.textColor)
        return userShape.renderShape() 
    };

    if (data.shape === 'Triangle') {
        let userShape = new Triangle (data.shapeColor, data.text, data.textColor)
        return userShape.renderShape() 
    }
};

module.exports = generateSvg;