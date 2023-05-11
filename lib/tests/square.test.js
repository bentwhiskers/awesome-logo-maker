const Square = require('../square.js');

describe('Square', () => {
    it('should return a logo with user-selected shape color, text, and text color', () => {
        const square = new Square('lightpink', 'ELA', 'palevioletred');
        expect(square.renderShape()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="lightpink"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="palevioletred">ELA</text>
        </svg>
        `
        );
    });

});