import React, { FC } from 'react';
import styled from 'styled-components';
import { queryKeys } from 'config/Constants';
import { SwapiVehicle } from 'types/swapi';
import { WithSwapiMultipleItems } from 'providers/WithSwapiMultipleItems';
import { LabelsList, LabelWrapper } from 'components/Lists/LabelsList';
import { vehicleImageById } from 'assets/images/vehicles';
import { getItemIdFromUrl } from 'config/helpers';
import defaultCharacterImage from 'assets/images/defaultCharacter.svg';

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

export interface RelatedListsProps {
    vehicles: string[] | undefined;
    parentId: string | number;
}

export const RalatedLists: FC<RelatedListsProps> = ({ vehicles, parentId }) => {
    if (!vehicles || vehicles.length === 0) return null;
    return (
        <WithSwapiMultipleItems<SwapiVehicle>
            items={vehicles}
            listKey={`character-vehicles-list-${parentId}`}
            itemKey={(id) => queryKeys.single.vehicle(id)}
            render={({ data }) => {
                if (!data) return null;
                const vehicles = data.map(({ name, url }) => {
                    const id = getItemIdFromUrl(url);
                    return {
                        id,
                        title: name,
                        image: vehicleImageById[id] || defaultCharacterImage,
                        to: `/vehicles/${id}`,
                        defaultImage: defaultCharacterImage,
                    };
                });
                return <StyledLabelsList items={vehicles} />;
            }}
        />
    );
};
