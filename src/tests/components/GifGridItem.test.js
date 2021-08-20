import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing components GifGridItem', () => {

    const title = 'Title description';
    const url = 'https://www.apitest.com/test';
    const wrapper = shallow(<GifGridItem url={url} title={title} />);

    test('should it validate the component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should validate the title', () => {
        const parraf = wrapper.find('p');
        expect(parraf.text().trim()).toBe(title);
    })

    test('should validate the url', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.props().className).toContain('animate__fadeIn');
        expect(div.props().className.includes('animate__fadeIn')).toBe(true);
    })
    
})
