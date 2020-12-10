import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
    },
    table: {
        minWidth: 650,
    },
}));

function createData(location, localtime) {
    return {location, localtime};
}

const rows = [
    createData("Ukraine", new Date().toISOString() ),
    createData("Sweden", new Date().toISOString() ),
    createData("Greece", new Date().toISOString() ),
    createData("Poland", new Date().toISOString() ),
    createData("USA", new Date().toISOString() ),
];

export default function VisitsWindow() {
    const classes = useStyles();

    return <div className={classes.container}>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="visits">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Location</TableCell>
                        <TableCell align="left">Local Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.localtime + Math.random()}>
                            <TableCell align="left">{row.location}</TableCell>
                            <TableCell align="left">{new Date(row.localtime).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
}
