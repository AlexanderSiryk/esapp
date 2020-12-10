import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MaterialTable from "material-table";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {SlideTransition, tableIcons} from "../Content/DataTable/DataTable";
import {sortFunc} from "../Content/DataTable/DataTable";
import {copyFunction as copyFunc} from "../Content/DataTable/DataTable";
import Container from "@material-ui/core/Container";
import CellItem from "../Content/DataTable/Components/CellItem";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import onDeleteForever from "./tableOperations/onDeleteForever";
import onRestore from "./tableOperations/onRestore";
import LoadingWindow from "../../Common/LoadingWindow/LoadingWindow";


const TrashWindow = ({tableEntries, ...props}) => {
    const classes = makeStyles(theme => ({
        container: {
            padding: theme.spacing(4),
        },
    }))();

    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const [isFetching, setIsFetching] = useState(false);

    const tableData = tableEntries.map((item) => ({
        id: item.id,
        name: item.name,
        login: item.login,
        password: item.password,
        tag: item.tag,
    }))

    const columns = [
        {
            title: "Name",
            field: "name",
            filtering: false,
            cellStyle: {cursor: "default"},
            customSort: sortFunc("name"),
        },
        {
            title: "Login",
            field: "login",
            filtering: false,
            cellStyle: {cursor: "default", paddingLeft: 8, flexWrap: "wrap"},
            render: props => <CellItem copyFunc={copyFunc} field={props.login}/>,
            customSort: sortFunc("login"),
        },
        {
            title: "Password",
            field: "password",
            filtering: false,
            sorting: false,
            cellStyle: {cursor: "default", paddingLeft: 8},
            render: props => <CellItem hiddenText copyFunc={copyFunc} field={props.password}/>,
        },
        {
            title: "Tag",
            field: "tag",
            filtering: false,
            cellStyle: {cursor: "default"},
            customSort: sortFunc("name"),
        },
    ];

    const actions = [
        {
            icon: props => <RestoreFromTrashIcon {...props} style={{color: "#7cdc39"}}/>,
            tooltip: "Restore",
            onClick: onRestore.bind(null, setIsFetching, props.restoreDeletedEntry, props.userToken),
        },
        {
            icon: props => <DeleteForeverIcon {...props} style={{color: "#dc4839"}}/>,
            tooltip: "Delete Forever",
            onClick: onDeleteForever.bind(null, setIsFetching, props.removeDeletedEntry, props.userToken),
        },
    ];

    function handleSnackBarClose(event, reason) {
        if (reason === 'clickaway') return;
        setSnackBarOpen(false);
    }

    return <Container maxWidth="xl" className={classes.container}>
        <MaterialTable
            title="Deleted accounts"
            icons={tableIcons}
            columns={columns}
            data={tableData}
            actions={actions}
            options={{
                draggable: false,
                paging: false,
                addRowPosition: "first",
                debounceInterval: 100,
                loadingType: "linear",
                padding: "dense",
                actionsCellStyle: {cursor: "default"},
            }}
        />
        <Snackbar open={snackBarOpen} autoHideDuration={1500}
                  onClose={handleSnackBarClose} TransitionComponent={SlideTransition}>
            <Alert onClose={handleSnackBarClose} severity="success">
                Copied to clipboard!
            </Alert>
        </Snackbar>
        {isFetching && <LoadingWindow/>}
    </Container>;
};

export default TrashWindow;
