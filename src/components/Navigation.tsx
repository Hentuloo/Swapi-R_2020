import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Routes } from 'config/Routes';
import deathStar from 'assets/images/deathStar.svg';

const Wrapper = styled.nav`
    position: fixed;
    left: 0%;
    bottom: 0%;
    width: 100%;
    color: ${({ theme }) => theme.color.brand[0]};
    font-size: ${({ theme }) => theme.fs.l};
    ${({ theme }) => theme.mediaQuery.md} {
        width: 250px;
        bottom: auto;
        top: 50%;
        font-size: ${({ theme }) => theme.fs.xl};
    }
`;
const ListWrapper = styled.ul`
    display: grid;
    grid-auto-flow: column;
    ${({ theme }) => theme.mediaQuery.md} {
        grid-auto-flow: row;
        top: 50%;
        transform: translate(0%, -50%);
    }
`;
const ListElement = styled.li`
    list-style: none;
`;
const StyledLink = styled(Link)`
    display: block;
    padding: 25px 0px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    ${({ theme }) => theme.mediaQuery.md} {
        padding: 35px 0px;
    }
`;
const BackgroundImage = styled.img`
    display: none;
    position: fixed;
    z-index: -1;
    ${({ theme }) => theme.mediaQuery.md} {
        display: block;
        height: 100%;
        left: 0%;
        bottom: 50%;
        transform: translate(-66%, 45%) rotate(15deg);
    }
`;

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = ({ ...props }) => {
    return (
        <Wrapper {...props}>
            <ListWrapper>
                <ListElement>
                    <StyledLink to={Routes.PATHS.characters.path}>
                        {Routes.PATHS.characters.title}
                    </StyledLink>
                </ListElement>
                <ListElement>
                    <StyledLink to={Routes.PATHS.vehicles.path}>
                        {Routes.PATHS.vehicles.title}
                    </StyledLink>
                </ListElement>
                <ListElement>
                    <StyledLink to={Routes.PATHS.planets.path}>
                        {Routes.PATHS.planets.title}
                    </StyledLink>
                </ListElement>
            </ListWrapper>
            <BackgroundImage src={deathStar} title="Gwiazda śmierci" />
        </Wrapper>
    );
};
export const MemoizedNavigation = memo(Navigation);
