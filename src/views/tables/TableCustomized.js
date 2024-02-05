// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const createData = (name,user,date) => { {/*(name, calories, fat, carbs, protein)*/}
  return { name,user,date }
}    
{/*name, calories, fat, carbs, protein*/ }
const rows = [
  createData('Abhishek Dutta', 'Student','15th Jan, 2024'),
  createData('Oishi Halder', 'Student','10th Dec, 2023'),
  createData('Rahul Singh', 'Alumni','9th Dec, 2023'),
  createData('Shreya Dey', 'Alumni','15th Oct, 2023'),
  createData('Sayani Ghosh', 'Student','10th Jan, 2023')
]

const TableCustomized = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Contact{/*Dessert (100g serving)*/}</StyledTableCell>
            <StyledTableCell align='right'>Type{/*Calories*/}</StyledTableCell>
            <StyledTableCell align='right'>Date{/*Fat (g)*/}</StyledTableCell>
                {/*<StyledTableCell align='right'>*/}
                  {/*Carbs (g)*/}
                  {/*</StyledTableCell>*/}
                {/*<StyledTableCell align='right'>*/}
                  {/*Protein (g)*/}
                  {/*</StyledTableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.user}</StyledTableCell>
              <StyledTableCell align='right'>{row.date}</StyledTableCell>
              {/*<StyledTableCell align='right'>*/}
                {/*row.carbs*/}
                {/*</StyledTableCell>*/}
              {/*<StyledTableCell align='right'>*/}
                {/*row.protein*/}
                {/*</StyledTableCell>*/}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCustomized
