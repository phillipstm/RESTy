import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { Value } from 'sass';
import Header from '../Header';
import Form from './index'




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

    });
    it('calls the handleAPI function with expected params', () => {
        let expected params = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon',
            data: 'json data test',
        };
        let handleApiCall = jest.fn();
        render(<Form handleApiCall={handleApiCall} />);
        let getSpan = screen.getByText('GET');
        let textarea = screen.getByTestId('form-textarea');
        let urlInput = screen.getByTestId('form-url');
        let button = screen.getByText('Go!');
        fireEvent.click(getSpan);
        fireEvent.change(textarea, { target: { value: 'json data test' } });
        fireEvent.change(urlInput, { target: { value: 'json data test' } });
        fireEvent.click(button);

        expect(handleApiCall).toHaveBeenCalledWith(expectedParams);
    })

});