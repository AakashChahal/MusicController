import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: "pages.join",
    CREATE: "pages.create",
};

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        const info =
            "Join page: Join a room using it's room code\nOR\nCreate page: Create a new room and share it's code with people who want to join";
        return info;
    }

    function createInfo() {
        return "Give Feedback or Request to Change password or delete your account\n\nNOTE:To change your password you will get a link on the email address you provided.";
    }

    useEffect(() => {
        console.log("ran");
        return () => console.log("cleanup");
    });

    return (
        <Grid container spacing={1}>
            <Grid className="center-app" item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    What is House Party?
                </Typography>
            </Grid>
            <Grid
                style={{ whiteSpace: "pre-wrap" }}
                className="center-app"
                item
                xs={12}
                align="center"
            >
                <Typography variant="body1">
                    {page === pages.JOIN ? joinInfo() : createInfo()}
                </Typography>
            </Grid>
            <Grid className="center-app" item xs={12} align="center">
                <IconButton
                    onClick={() => {
                        page === pages.CREATE
                            ? setPage(pages.JOIN)
                            : setPage(pages.CREATE);
                    }}
                >
                    {page === pages.CREATE ? (
                        <NavigateBeforeIcon />
                    ) : (
                        <NavigateNextIcon />
                    )}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                    className="center-app"
                    color="secondary"
                    variant="contained"
                    to="/"
                    component={Link}
                >
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}
