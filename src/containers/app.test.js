import {
    render,
    screen,
    waitFor,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import constants from '../shared/constants'

describe('App Component', () => {

    test('It must contain a search tag.', () => {
        render(<App />);

        const textInputSearch = screen.getByText(constants.REGEX_LABEL_FORM);
        expect(textInputSearch).toBeInTheDocument();

        cleanup();

    });

    test('It must contain a search button.', () => {
        render(<App />);

        const buttonSearch = screen.getByRole('button');
        expect(buttonSearch).toBeInTheDocument();

        cleanup();

    });

    test('It must contain a research input.', () => {
        render(<App />);

        const inputSearch = screen.getByTestId('form-input');
        expect(inputSearch).toHaveAttribute('class', 'input_search form-control');

        cleanup();

    });

    test('You must start input with a blank value.', () => {
        render(<App />);

        const inputNode = screen.getByTestId('form-input');
        expect(inputNode.value).toEqual('');

        cleanup();
    });

    test('It should render without alerts and/or heading.', async () => {
        render(<App />);

        await waitFor(() => {
            const headingNode = screen.queryByText(constants.REGEX_ALERT_POKEMON_NOT_FOUND);
            expect(headingNode).not.toBeInTheDocument()
        });

        const alertNumber = screen.queryByText(/você precisa digitar um número entre 1 e 898\./i);
        expect(alertNumber).not.toBeInTheDocument();

        cleanup();
    });

});

