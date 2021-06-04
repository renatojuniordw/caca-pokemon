import {
    render,
    screen,
    fireEvent,
    waitFor,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchPokemon from './index.jsx';
import constants from '../../shared/constants'

describe('Search Pokémon Page', () => {

    test('It must contain a search tag.', () => {
        render(<SearchPokemon />);

        const textInputSearch = screen.getByText(constants.REGEX_LABEL_FORM);
        expect(textInputSearch).toBeInTheDocument();

        cleanup();

    });

    test('It must contain a search button.', () => {
        render(<SearchPokemon />);

        const buttonSearch = screen.getByRole('button');
        expect(buttonSearch).toBeInTheDocument();

        cleanup();

    });

    test('It must contain a research input.', () => {
        render(<SearchPokemon />);

        const inputSearch = screen.getByTestId('form-input');
        expect(inputSearch).toHaveAttribute('class', 'input_search form-control');

        cleanup();

    });

    test('You must start input with a blank value.', () => {
        render(<SearchPokemon />);

        const inputNode = screen.getByTestId('form-input');
        expect(inputNode.value).toEqual('');

        cleanup();

    });

    test('You must type and click on search pokémon, informing code 1.', async () => {
        render(<SearchPokemon />);

        const ID_POKEMON = 1;
        const NAME_POKEMON = 'BULBASAUR';

        const inputNode = screen.getByTestId('form-input');
        fireEvent.change(
            inputNode,
            { target: { value: ID_POKEMON } }
        );

        const valueInput = parseInt(inputNode.value);
        expect(valueInput).toEqual(ID_POKEMON);

        const btnNode = screen.getByRole('button');
        fireEvent.click(btnNode);

        expect(
            await waitFor(() => screen.getByRole('heading', {
                name: /você encontrou o pokémon:/i
            }))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getByText(NAME_POKEMON))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getAllByAltText(NAME_POKEMON.toLowerCase()))
        ).toHaveLength(4);

        cleanup();

    });

    test('You must enter, search and confirm code 3 pokémon.', async () => {
        render(<SearchPokemon />);
        const ID_POKEMON = 3;
        const NAME_POKEMON = 'VENUSAUR';

        const inputNode = screen.getByTestId('form-input');
        fireEvent.change(
            inputNode,
            { target: { value: ID_POKEMON } }
        );

        const valueInput = parseInt(inputNode.value);
        expect(valueInput).toEqual(ID_POKEMON);

        const btnNode = screen.getByRole('button');
        fireEvent.click(btnNode);

        expect(
            await waitFor(() => screen.getByRole('heading', {
                name: /você encontrou o pokémon:/i
            }))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getByText(NAME_POKEMON))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getAllByAltText(NAME_POKEMON.toLowerCase()))
        ).toHaveLength(4);

        cleanup();

    });

    test('Prompt to enter a number between 1 and 898 and validate if show number message', async () => {
        render(<SearchPokemon />);

        const newId = 999;

        const inputNode = screen.getByTestId('form-input');
        fireEvent.change(
            inputNode,
            { target: { value: newId } }
        );

        const alertNumber = screen.getByText(constants.REGEX_MSG_NUMBER_BETWEEN);
        expect(alertNumber).toBeInTheDocument();

        cleanup();

    });

    test('Should search for pokemon id 2, upload photos and not show alerts.', async () => {
        render(<SearchPokemon />);
        const ID_POKEMON = 2;
        const NAME_POKEMON = 'IVYSAUR';

        const textInputSearch = screen.getByText(constants.REGEX_LABEL_FORM);
        expect(textInputSearch).toBeInTheDocument();

        const inputSearch = screen.getByTestId('form-input');
        expect(inputSearch).toHaveAttribute('class', 'input_search form-control');
        expect(inputSearch.value).toEqual('');

        const buttonSearch = screen.getByRole('button');
        expect(buttonSearch).toBeInTheDocument();

        fireEvent.change(
            inputSearch,
            { target: { value: ID_POKEMON } }
        );

        const valueInput = parseInt(inputSearch.value);
        expect(valueInput).toEqual(ID_POKEMON);

        fireEvent.click(buttonSearch);

        expect(
            await waitFor(() => screen.getByRole('heading', {
                name: /você encontrou o pokémon:/i
            }))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getByText(NAME_POKEMON))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getAllByAltText(NAME_POKEMON.toLowerCase()))
        ).toHaveLength(4);

        await waitFor(() => {
            const headingNode = screen.queryByText(constants.REGEX_ALERT_POKEMON_NOT_FOUND);
            expect(headingNode).not.toBeInTheDocument()
        });

        cleanup();
    });

});