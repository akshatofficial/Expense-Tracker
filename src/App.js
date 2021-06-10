import React from 'react';

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

import {AppBar, Grid} from '@material-ui/core';

import useStyle from './components/Home/styles';
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import ShowTransaction from "./components/ShowTransaction/ShowTransaction";

const App = () => {
    const classes = useStyle();
    return (
        <BrowserRouter>
            <ToastContainer>
            </ToastContainer>
            <Switch>
                <Route
                    path={"/"}
                    component={Home}
                    exact
                />
                <Route
                    path={"/showTransactions"}
                    component={ShowTransaction}
                    exact
                />
            </Switch>
        </BrowserRouter>
    );
};

export default App;