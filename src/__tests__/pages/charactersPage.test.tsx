import * as React from 'react';
import { render, waitForElement } from 'tests/render';
import { getSwapiCharacters } from 'config/__mocks__/helpers';
import { Characters } from 'pages/CharactersPage/Characters.page';

jest.mock('config/helpers');
jest.mock('react-image', () => ({ useImage: () => ({ src: 'someSrc' }) }));

const loadingElementTestId = 'loadingSpiner';

describe('CharactersPage', () => {
    it('should show loading indicator', () => {
        const { getByTestId } = render(<Characters />);
        const loadingElement = getByTestId(loadingElementTestId);
        expect(loadingElement).toBeInTheDocument();
    });
    it('should show mocked content ', async () => {
        const { getByText } = render(<Characters />);

        const mockedResults = await getSwapiCharacters();
        const characterName = mockedResults.results[0].name;

        const loadingElement = await waitForElement(() =>
            getByText(characterName),
        );
        expect(loadingElement).toBeInTheDocument();
    });
});
