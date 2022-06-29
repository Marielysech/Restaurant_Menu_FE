import styled from 'styled-components';


export const MenuLabel = styled.div`
    border-left: 50px solid var(--ligthGreenTransparency);
    border-right: 50px solid var(--ligthGreenTransparency );
    border-top: 50px solid var(--yellowOrange);
    border-bottom: 50px solid var(--yellowOrange);
    width: 80%;
    margin: 0 auto;

`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -3rem;
`

export const TextLabel = styled.p`
  max-width: 55%;
  text-align: center;
  margin: 0 auto;
  margin-top: -5rem;
  color: var(--ligthGreen);
  font-weight: bold;
  font-size: 25px;

`