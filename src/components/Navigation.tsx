import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Routes } from 'config/Routes';
import StarWars from 'assets/images/StarWars.svg';

const Wrapper = styled.nav`
    position: fixed;
    left: 0%;
    bottom: 0%;
    width: 100%;
    color: ${({ theme }) => theme.color.white[0]};
    background-color: ${({ theme }) => theme.color.black[0]};
    font-size: ${({ theme }) => theme.fs.s};
    z-index: 20;

    ${({ theme }) => theme.mediaQuery.md} {
        width: 250px;
        bottom: auto;
        top: 5%;
        font-size: ${({ theme }) => theme.fs.l};
    }
`;
const ListWrapper = styled.ul`
    display: grid;
    grid-auto-flow: column;

    ${({ theme }) => theme.mediaQuery.md} {
        grid-auto-flow: row;
    }
`;
const ListElement = styled.li`
    list-style: none;
    font-weight: ${({ theme }) => theme.fw[1]};
`;
const StyledLink = styled(Link)`
    display: block;
    padding: 25px 0px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    ${({ theme }) => theme.mediaQuery.md} {
        padding: 15px 0px;
    }
`;
const BackgroundImage = styled.img`
    display: none;
    z-index: -1;
    ${({ theme }) => theme.mediaQuery.md} {
        display: block;
        margin: 0px auto 30px;
    }
`;

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = ({ ...props }) => {
    return (
        <Wrapper {...props}>
            <ListWrapper>
                <BackgroundImage src={StarWars} alt="star wars" />
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
        </Wrapper>
    );
};
export const MemoizedNavigation = memo(Navigation);
