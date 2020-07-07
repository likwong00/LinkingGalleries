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

export default function Insert() {
    const classes = useStyles();

    // this is disgusting but its the fastest way with the time left
    const [ecatalogInput, setEcatalogInput] = useState('');
    const [irnInput, setIrnInput] = useState('');
    const [preciseLocationInput, setPreciseLocationInput] = useState('');
    const [physicalDescriptionInput, setPhysicalDescriptionInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [objectNumberInput, setObjectNumberInput] = useState('');
    const [latitudeInput, setLatitudeInput] = useState('');
    const [longitudeInput, setLongitudeInput] = useState('');
    const [regionIDInput, setRegionIDInput] = useState('');
    const [imageIDInput, setImageIDInput] = useState('');

    const handleEcatalogChange = (e) => {
        setEcatalogInput(e.target.value);
    }

    const handleIrnChange = (e) => {
        setIrnInput(e.target.value);
    }

    const handlePreciseLocationChange = (e) => {
        setPreciseLocationInput(e.target.value);
    }

    const handlePhysicalDescriptionChange = (e) => {
        setPhysicalDescriptionInput(e.target.value);
    }

    const handleNameChange = (e) => {
        setNameInput(e.target.value);
    }

    const handleObjectNumberChange = (e) => {
        setObjectNumberInput(e.target.value);
    }

    const handleLatitudeChange = (e) => {
        setLatitudeInput(e.target.value);
    }

    const handleLongitudeChange = (e) => {
        setLongitudeInput(e.target.value);
    }

    const handleRegionIDChange = (e) => {
        setRegionIDInput(e.target.value);
    }

    const handleImageIDChange = (e) => {
        setImageIDInput(e.target.value);
    }

    const handleSubmit = (e) => {

        fetch('http://ec2-3-83-134-92.compute-1.amazonaws.com:8080/api/ecatalogobject', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            // We convert the React objects to JSON and send it as the POST body
            body: JSON.stringify({ ecatalog_key: parseInt(ecatalogInput), main_title: "", irn: parseInt(irnInput),
            object_number: objectNumberInput, physical_description: physicalDescriptionInput,
            precise_location: preciseLocationInput, image_id: parseInt(imageIDInput), name: nameInput,
            latitude: parseFloat(latitudeInput), longitude: parseFloat(longitudeInput),
            region_id: parseInt(regionIDInput) })

        }).then(function(response) {
            console.log(response);
            alert("Success.");

        }) .catch(function(error) {
            console.log(error);
            alert("Error has occurred.");
        });


        e.preventDefault();
    }

    const handleClear = (e) => {
        setEcatalogInput('');
        setIrnInput('');
        setPhysicalDescriptionInput('');
        setPreciseLocationInput('');
        setNameInput('');
        setObjectNumberInput('');
        setLatitudeInput('');
        setLongitudeInput('');
        setRegionIDInput('');
        setImageIDInput('');
        e.preventDefault();
    }

    return (
        <div>
            <Toolbar/>
            <hr/>
            <main style={{ padding: 50 }} className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Insert
                    </Typography>
                        <form onSubmit={handleSubmit}>
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
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="irn"
                                        name="irn"
                                        label="IRN"
                                        fullWidth
                                        value={irnInput}
                                        onChange={handleIrnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="precise_location"
                                        name="precise_location"
                                        label="Precise Location"
                                        fullWidth
                                        value={preciseLocationInput}
                                        onChange={handlePreciseLocationChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="physical_description"
                                        name="physical_description"
                                        label="Physical Description"
                                        fullWidth
                                        value={physicalDescriptionInput}
                                        onChange={handlePhysicalDescriptionChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        value={nameInput}
                                        onChange={handleNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="object_number"
                                        name="object_number"
                                        label="Object Number"
                                        fullWidth
                                        value={objectNumberInput}
                                        onChange={handleObjectNumberChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="latitude"
                                        name="latitude"
                                        label="Latitude"
                                        fullWidth
                                        value={latitudeInput}
                                        onChange={handleLatitudeChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="longitude"
                                        name="longitude"
                                        label="Longitude"
                                        fullWidth
                                        value={longitudeInput}
                                        onChange={handleLongitudeChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="region_id"
                                        name="region_id"
                                        label="Region ID"
                                        fullWidth
                                        value={regionIDInput}
                                        onChange={handleRegionIDChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="image_id"
                                        name="image_id"
                                        label="Image ID"
                                        fullWidth
                                        value={imageIDInput}
                                        onChange={handleImageIDChange}
                                    />
                                </Grid>
                                <div className={classes.buttons}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type = "submit"
                                        className={classes.button}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleClear}
                                        className={classes.button}
                                    >
                                        Clear
                                    </Button>
                                </div>
                            </Grid>
                        </form>
                </Paper>
            </main>
        </div>
    );
}
