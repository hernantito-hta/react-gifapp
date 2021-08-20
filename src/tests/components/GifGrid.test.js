import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing component <GifGrid />', () => {
    const category = 'Science';
    test('should render the component correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });
        let wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should validate useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Gost Boosters',
                url: 'https://localhost/any/image.jpg'
            },
            {
                id: '123',
                title: 'Gost Boosters',
                url: 'https://localhost/any/image.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        let wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
