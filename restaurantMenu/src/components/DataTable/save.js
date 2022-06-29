import React from 'react'
import { LineTitle, TableContainer, TableItem, TableRow, TableDataContainer, TablePrice, TableBody, TableHead } from './DataTableElements'
import menu from '../../data/menu.json'

const DataTable = () => {

  const data = menu.map(item => console.log(item.sectionTitle))
  console.log(data)

  return (

     <TableContainer>
      {menu.map((category, index) => 
        <>
          <TableHead key={index}>
            <TableRow >
              <LineTitle>{category.sectionTitle}</LineTitle>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.items.map((items, index) => 
            <TableRow key={index}>
              <TableItem>{items.name}</TableItem>
              <TablePrice>{items.price}</TablePrice>
            </TableRow>
            )}
          </TableBody>
        </>
      )}
      </TableContainer>
  
  )
}

export default DataTable