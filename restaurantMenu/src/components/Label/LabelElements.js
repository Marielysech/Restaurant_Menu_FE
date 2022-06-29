import styled from 'styled-components';

export const MenuContainer = styled.button`
  background-color: var(--ligthGreenTransparency);
  font-size: 32px;
  color: black;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 15px;
  align-items: center;
  width: 60%;
`;

export const MenuTitle = styled.h1`
    color: var(--mainBlue);
    font-family: 'IBM Plex Serif', serif;
    font-style: italic;

`

export const MenuLabel = styled.div`
    background-color: var(--green);
    color: tr;
    border-left: 50px solid var(--ligthGreenTransparency);
    border-right: 50px solid var(--ligthGreenTransparency );
    border-top: 50px solid var(--green);
    border-bottom: 50px solid var(--green);
    width: 80%;
    margin: 0 auto;

`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -2.5rem;
`

export const TextLabel = styled.p`
  margin-top: -5rem;
  max-width: 75%;
  align-self: center;
  color: var(--ligthGreen);
  font-weight: bold;
  font-size: 25px;

`