import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    Grid,
    Typography,
    TextField,
    FormControl,
    FormHelperText,
} from "@material-ui/core";

export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Create a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">
                                Guest Control Playback State
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true">
                            <FormControlLabel
                                value="true"
                                control={<Radio color="primary" />}
                                label="Play/Pause"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio color="secondary" />}
                                label="No Control"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField
                            required="true"
                            type="number"
                            defaultValue={this.defaultValue}
                            inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                            }}
                        ></TextField>
                        <FormHelperText>
                            <div align="center">
                                Votes Required to Skip a Song
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}
