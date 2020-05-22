import React, { FC, Suspense } from 'react';
import { LoadingSpiner } from 'components/LoadingSpiner';
import { CharactersList } from './CharactersList.page';

export interface CharactersProps {}

export const Characters: FC<CharactersProps> = ({ ...props }) => {
    return (
        <Suspense fallback={<LoadingSpiner />}>
            <CharactersList {...props} />
        </Suspense>
    );
};
