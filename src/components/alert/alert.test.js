import {
    render,
    screen,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Alert from './index';
import constants from '../../shared/constants';

describe('Alert Component', () => {
    test('Should show message that no Pokemon match your search!', () => {
        render(<Alert />);
        const msgPokemonNotFound = screen.getByText(constants.REGEX_ALERT_POKEMON_NOT_FOUND);
        expect(msgPokemonNotFound).toBeInTheDocument();

        cleanup();
    });
});