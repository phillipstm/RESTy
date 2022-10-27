import '@testing-library/jest-dom'
import { render, screen, fireEvent} from '@testing-library/react';
import Header from '../src/components/header';
import Form from '../src/components/form/index'




describe('The Header Component', () => {
    it('Renders h1 as expected',)
})

describe('Form Component', () => {
    it('calls the handleAPI function', () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    let button = screen.getByText('Go!');
    fireEvent.click(button);
    
    expect(handleApiCall).toHaveBeenCalled();
     
    })
})