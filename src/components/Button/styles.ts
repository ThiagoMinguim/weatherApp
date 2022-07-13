import styled, { css } from 'styled-components'

export interface ContainerProps {
  search?: boolean
  rounded?: boolean
}

const modiefiers = {
  rounded: () => css`
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    padding: 0.7rem;
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, search, rounded }) => css`
    background: ${search ? theme.colors.search : theme.colors.button};
    padding: 1rem 1.8rem;

    box-shadow: ${theme.boxShadowed.primary};

    border: none;
    cursor: pointer;

    align-items: center;
    justify-content: center;
    text-align: center;

    span {
      font-size: 1.6rem;
      color: ${theme.text.phrase};
    }

    ${rounded && modiefiers.rounded()}
  `}
`
