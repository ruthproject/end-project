import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Table ,TableBody, TableCell,TableContainer,TableHead,TablePagination , TableRow} from '@material-ui/core';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
});

// const headers = ['שם', 'xx']

const DisplayTable = (props: {headers:any; rows :any } ) => {

  const classes = useStyles();
  return (

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.headers?.map((header:any, index:any) =>
                <TableCell
                  key={index}
                >
                  {header}
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows?.map((item:any, i:any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {Object.keys(item).map((key, index) => {
                    return (
                      <TableCell key={index}>
                        {item[key]?.toString()}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onChangePage={handleChangePage}
        // onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );

}
export default DisplayTable;