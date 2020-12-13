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

export default function VisitsWindow(props) {
    const classes = useStyles();

    const emojiList = <><span aria-label="heart-eyes" role="img">😍</span><span aria-label="confetti" role="img">🎉</span></>

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
                    {props.visits?.length
                        ? props.visits.map((row) => (
                            <TableRow key={row.localtime}>
                                <TableCell align="left">{row.location}</TableCell>
                                <TableCell align="left">{new Date(row.localtime).toLocaleString()}</TableCell>
                            </TableRow>
                        )).reverse()
                        : <TableRow>
                            <TableCell align="left">This is your first visit! {emojiList}</TableCell>
                        </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
}
