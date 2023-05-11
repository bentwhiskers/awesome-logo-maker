import Circle from '../circle';

describe('Circle', () => {
    it('should return a logo with user-selected shape color, text, and text color', () => {
        const circle = new Circle('lightpink', 'ELA', 'palevioletred');
        expect(circle.renderShape()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="lightpink" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="palevioletred">ELA</text>
        </svg>
        `
        );
    });

});

