import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () =>{
    it('should be true', ()=>{
        const testWord=true;
        expect(testWord).toBe(true);
    })
    it('should be false', ()=>{
        const testWord=true;
        expect(testWord).toBe(false);
    })
})

describe('Header', () =>{
    it('should show text', ()=>{
        const wrapper=shallow(<Header/>);
        const text=wrapper.find('div div h1');
        expect(text.text()).toBe('MS Tutorial');
    })
    it('should hide text when button is clicked', ()=>{
        const wrapper=shallow(<Header/>);
        const button=wrapper.find('button');
        button.simulate('click');
        const text=wrapper.find('div div h1');
        expect(text.length).toBe(0);
    })
})

