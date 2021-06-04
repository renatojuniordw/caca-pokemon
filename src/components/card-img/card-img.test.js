import {
    render,
    screen,
    waitFor,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CardImg from './index';
import constants from '../../shared/constants';

describe('CardImg Component', () => {
    test('Must load pokemon image', async () => {

        render(<CardImg
            name={constants.DATA_POKEMON.name}
            url={constants.DATA_POKEMON.sprites.back_default}
        />);

        expect(
            await waitFor(() => screen.getAllByAltText(constants.DATA_POKEMON.name.toLowerCase()))
        ).toHaveLength(1);
        cleanup();
    });
});