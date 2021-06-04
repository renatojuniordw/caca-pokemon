import {
    render,
    screen,
    waitFor,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DetailPokemon from './index';
import constants from '../../shared/constants';

describe('DetailPokemon Component', () => {
    test('Must show 4 photos and Pokémon name', async () => {

        render(<DetailPokemon
            name={constants.DATA_POKEMON.name}
            sprites={constants.DATA_POKEMON.sprites}
        />);

        expect(
            await waitFor(() => screen.getByText('Você encontrou o Pokémon:'))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getByRole('heading', {
                name: /bulbasaur/i
            }))
        ).toBeInTheDocument();

        expect(
            await waitFor(() => screen.getAllByAltText(constants.DATA_POKEMON.name.toLowerCase()))
        ).toHaveLength(4);

        cleanup()
    });
});