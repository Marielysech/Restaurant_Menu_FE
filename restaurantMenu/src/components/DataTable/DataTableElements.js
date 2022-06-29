import styled from "styled-components";

//SECTION CONTAINER

    //TABLE

export const TableContainer = styled.table`
    display: flex;
    flex-direction: column;
    width: 85%;
` 

    //TABLE HEAD

export const TableHead = styled.thead`   

`
    //TABLE BODY

export const TableBody = styled.tbody`
   margin-bottom: 2rem;
`

    //TABLE ROW
export const TableRow = styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;    
    padding: 0.3rem 0;
`

//DATA

    //SECTION TITLE

export const LineTitle = styled.th`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    font-family: 'IBM Plex Serif', serif;
    font-style: italic;
    color: var(--green);
    font-size: 25px;


` 
    //SECTION ITEMS


export const TableItem = styled.td`
   font-size: 18px;
   text-align: left;
` 

export const TablePrice = styled.td`
    font-size: 15px;
    font-weight: 400;
    padding: 0 0.5rem;
    align-items: baseline;

` 
