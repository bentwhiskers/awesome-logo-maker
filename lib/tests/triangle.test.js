import Triangle from '../triangle.js';

describe('Triangle', () => {
    it('should return a logo with user-selected shape color, text, and text color', () => {
        const triangle = new Triangle('lightpink', 'ELA', 'palevioletred');
        expect(triangle.renderShape()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lightpink"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="palevioletred">ELA</text>
        </svg>
        `
        );
    });

});