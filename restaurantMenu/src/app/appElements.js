import styled from 'styled-components';

export const AppContainer = styled.div`

  width: 100%; 
  background-image: url(https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1247&q=80);
  /* background-position: center; */
  background-position: center;
  background-size: cover;
  padding: 2rem;

`


export const MenuContainer = styled.div`
  background-color: var(--ligthGreenTransparency);
  font-size: 32px;
  color: black;
  margin: 2rem auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 15px;
  align-items: center;
  width: 70%;
`;

export const MenuTitle = styled.h1`
    color: var(--mainBlue);
    font-family: 'IBM Plex Serif', serif;
    font-style: italic;
    margin-bottom: 1rem;

`

export const Credit = styled.div`
    text-decoration: none;
    margin: 5rem 0 0;
    color: black;
    text-align: right;
    background-color: #e1e4d380;
    border-radius: 20px;
    width: fit-content;
    padding: 0.3rem 0.5em;

`

