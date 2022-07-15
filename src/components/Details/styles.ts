import styled from 'styled-components'
import { CloudBackground } from '@/assets'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  width: 100%;
  min-height: 100%;

  background-color: ${props => props.theme.background.secondary};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 4.2rem 4.6rem;
`

export const BackgroundContainer = styled.div`
  display: flex;
  background: url(${CloudBackground}) no-repeat center top;
  background-size: contain;
  position: fixed;
  width: 650px;
  height: 336px;
  opacity: 0.1;
  z-index: 0;
`
export const ImgContainer = styled.div`
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`
export const TempInfo = styled.div`
  display: flex;
  /* background-color: white; */
  align-content: center;
  justify-content: center;

  /* align-self: flex-end; */

  span:first-of-type {
    font-size: 14.4rem;
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.text.phrase};
    /* background-color: red; */
  }

  p {
    font-size: 16rem;
    font-family: 'Raleway', sans-serif;

    color: ${props => props.theme.text.phrase};
    /* background-color: red; */
  }

  span:last-of-type {
    font-size: 4.8rem;
    font-weight: bold;

    color: ${props => props.theme.text.primary};
    /* background-color: blue; */

    /* align-items: stretch; */
    /* bottom: 0; */
    /* right: 0; */
    align-self: flex-end;
    margin-bottom: 5rem;
  }
`

export const Climate = styled.span`
  margin: 6rem;
  font-size: 3.6rem;
  text-align: center;

  color: ${props => props.theme.text.primary};
`

export const DayContent = styled.div`
  display: flex;
  margin: 0 11rem;
  font-size: 1.8rem;
  font-weight: bold;
  justify-content: space-between;

  color: ${props => props.theme.text.today};
`
export const Location = styled.div`
  display: flex;
  gap: 1rem;
  /* bottom: 0; */
  /* position: absolute; */
  margin: 5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.6rem;
    color: ${props => props.theme.text.today};
  }
`
