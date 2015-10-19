import React from 'react';
import JR from 'jasmine-react-helpers';
import NavItem from '../../../components/hero-navigation/nav-item.js';

describe('Nav Item component', function () {
    let navItem;

    let item = {
        url: 'www.myurl.com',
        name: 'my navigation item'
    }

    it('should uses the correct url', function () {
        navItem = JR.render(<NavItem item={item}/>);

        expect($(navItem)('a').attr('href').toBe('www.myurl.com'));
    });
})



/*describe('Button component', function() {
    let button;

    it('should have the given size and type as in the class name', function() {
        button = JR.render(<ButtonComponent buttonSize="medium" buttonText="Book a Slot" buttonType="primary"/>);

        expect(JR.$(button)('.button').attr('class')).toContain('primary');
        expect(JR.$(button)('.button').attr('class')).toContain('medium');
    });

    it('should use the given text in the button text', function() {
        button = JR.render(<ButtonComponent buttonSize="medium" buttonText="Button Text" buttonType="primary"/>);

        expect(JR.$(button)('.button').text()).toBe('Button Text');
    });
});*/