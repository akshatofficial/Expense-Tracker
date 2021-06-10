import React from 'react';
import {Grid} from "@material-ui/core";
import Details from "../Details/Details";
import Main from "../Main/Main";
import {PushToTalkButton, PushToTalkButtonContainer} from "@speechly/react-ui";
import useStyle from './styles';

const Home = () => {
    const classes = useStyle();
    return (
        <Grid className={classes.grid} container={true} alignItems={"center"} justify={"center"}
              spacing={0}
        >
            <Grid item xs={12} sm={4} className={classes.mobile}>
                <Details title={"Income"}/>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.main}>
                <Main/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title="Income"/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.last}>
                <Details title="Expense"/>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
            </PushToTalkButtonContainer>
        </Grid>
    );
};

export default Home;