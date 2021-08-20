import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Testing component <GifExpertApp />', () => {
    test('should render correctly', () => {
        let wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should display categories', () => {
        const categories = ['One punch', 'Samurai X']
        let wrapper = shallow(<GifExpertApp  defaultCategories = {categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
