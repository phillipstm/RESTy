import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Results from '../src/components/results/index';

describe('Results Component', () => {
    it('renders data from props as expected', () => {
        let data = {
            gorilla: "gorilla"
        }
        render(<Results data={data} />);
        let pre = screen.getByTestId('pre');

        expect(pre).toHaveContent('gorilla');
    });


    it('renders no data as expected', () => {

        render(<Results />);
        let pre = screen.getByTestId('pre');

        expect(pre).toHaveContent('');
    });

});

