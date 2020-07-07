import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from "./AdminToolbar";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function Delete() {
    const classes = useStyles();

    const [ecatalogInput, setEcatalogInput] = useState('');

    const handleEcatalogChange = (e) => {
        setEcatalogInput(e.target.value);
    }


    const handleDelete = (e) => {

        e.preventDefault();

        fetch('http://ec2-3-83-134-92.compute-1.amazonaws.com:8080/api/ecatalogobject/byKey/'+
            parseInt(ecatalogInput), {
            method: 'DELETE',

        }).then(function(response) {
            console.log(response);
            alert("Success.");

        }) .catch(function(error) {
            console.log(error);
            alert("Error has occurred, try again.");
        });

    }

    return (
        <div>
            <Toolbar/>
            <hr/>
            <main style={{ padding: 50 }} className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Delete
                    </Typography>
                    <form onSubmit={handleDelete}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="ecatalog_key"
                                    name="ecatalog_key"
                                    label="Ecatalog Key"
                                    fullWidth
                                    value={ecatalogInput}
                                    onChange={handleEcatalogChange}
                                />
                            </Grid>
                            <div className={classes.buttons}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Grid>
                    </form>
                </Paper>
            </main>
        </div>
    );
}
