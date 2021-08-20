import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Testing component AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />);
    });

    test('should render correctly the component', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should change the textbox field function handleInputValue', () => {
        const input = wrapper.find('input');
        const value = 'Adding text 1';
        
        input.simulate('change', {
            target: { value }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('should not be called', () => {
        const form  = wrapper.find('form');
        form.simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should call setCategories and clean text', () => {
        const value = 'Text description'
        let input = wrapper.find('input');
        input.simulate('change', {
            target: { value }
        });

        let form = wrapper.find('form');
        form.simulate('submit', {
            preventDefault(){}
        });
        
        expect(input.props().value).toBe('');
    })
})
