import React, { FC, Suspense } from 'react';
import styled from 'styled-components';
import { queryKeys } from 'config/Constants';
import { SwapiVehicle } from 'types/swapi';
import { WithSwapiMultipleItems } from 'providers/WithSwapiMultipleItems';
import { LabelsList, LabelWrapper } from 'components/Lists/LabelsList';
import { getItemIdFromUrl, getCharacterImageById } from 'config/helpers';
import defaultCharacterImage from 'assets/images/defaultCharacter.svg';
import { LoadingSpiner } from 'components/LoadingSpiner';

const StyledLabelsList = styled(LabelsList)`
    display: flex;
    min-height: 100px;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    ${LabelWrapper} {
        max-width: 120px;
        margin: 10px;
        ${({ theme }) => theme.mediaQuery.lg} {
            max-width: 130px;
        }
    }
`;
const StyledLoadingSpiner = styled(LoadingSpiner)`
    margin: 0px auto;
`;
export interface RelatedListsProps {
    pilots: string[] | undefined;
    parentId: string | number;
}

export const RalatedLists: FC<RelatedListsProps> = ({ pilots, parentId }) => {
    if (!pilots || pilots.length === 0) return null;
    return (
        <Suspense fallback={<StyledLoadingSpiner />}>
            <WithSwapiMultipleItems<SwapiVehicle>
                items={pilots}
                listKey={`vehicle-pilots-list-${parentId}`}
                itemKey={(id) => queryKeys.single.character(id)}
                render={({ data }) => {
                    if (!data) return null;
                    const items = data.map(({ name, url }) => {
                        const id = getItemIdFromUrl(url);
                        return {
                            id,
                            title: name,
                            src: getCharacterImageById(id),
                            to: `/characters/${id}`,
                            defaultImage: defaultCharacterImage,
                            suspense: true,
                            perspectiveAnimation: true,
                        };
                    });
                    return <StyledLabelsList items={items} />;
                }}
            />
        </Suspense>
    );
};
