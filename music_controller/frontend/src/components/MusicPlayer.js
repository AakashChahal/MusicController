import React, { Component } from "react";
import {
    Grid,
    Typography,
    Card,
    IconButton,
    LinearProgress,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Forward10Icon from "@material-ui/icons/Forward10";
import ReplayIcon from "@material-ui/icons/Replay";

export default class MusicPlayer extends Component {
    constructor(props) {
        super(props);
    }

    shuffleSongs() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/shuffle", requestOptions);
    }

    seekSong() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/seek", requestOptions);
    }

    forward10Sec() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/forward", requestOptions);
    }

    prevSong() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/previous", requestOptions);
    }

    skipSong() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/skip", requestOptions);
    }

    pauseSong() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/pause", requestOptions);
    }

    playSong() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/play", requestOptions);
    }

    render() {
        const songProgress = (this.props.time / this.props.duration) * 100;

        return (
            <Card>
                <Grid container alignItems="center">
                    <Grid item align="center" xs={4}>
                        <img
                            src={this.props.image_url}
                            height="100%"
                            width="100%"
                        />
                    </Grid>
                    <Grid item align="center" xs={8}>
                        <Typography component="h5" variant="h5">
                            {this.props.title}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            {this.props.artist}
                        </Typography>
                        <div>
                            <IconButton onClick={() => this.seekSong()}>
                                <ReplayIcon />
                            </IconButton>
                            <IconButton onClick={() => this.prevSong()}>
                                <SkipPreviousIcon />
                                {this.props.votes} / {this.props.votes_required}
                            </IconButton>
                            <IconButton
                                onClick={() => {
                                    this.props.is_playing
                                        ? this.pauseSong()
                                        : this.playSong();
                                }}
                            >
                                {this.props.is_playing ? (
                                    <PauseIcon />
                                ) : (
                                    <PlayArrowIcon />
                                )}
                            </IconButton>
                            <IconButton onClick={() => this.skipSong()}>
                                {this.props.votes} / {this.props.votes_required}
                                <SkipNextIcon />
                            </IconButton>
                            {/* <IconButton onClick={() => this.forward10Sec()}>
                                <Forward10Icon />
                            </IconButton> */}
                            {/* <IconButton onCLick={() => this.shuffleSongs()}>
                                <ShuffleIcon />
                            </IconButton> */}
                        </div>
                    </Grid>
                </Grid>
                <LinearProgress variant="determinate" value={songProgress} />
            </Card>
        );
    }
}
