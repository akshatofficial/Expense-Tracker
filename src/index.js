import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "./Context/Context";
import {SpeechProvider} from '@speechly/react-client';

ReactDOM.render(
    <React.StrictMode>
        <SpeechProvider appId={"21e0ec11-1e3d-476f-8779-18f9f6f19dc8"} language={"en-US"}>
            <Provider>
                <App/>
            </Provider>
        </SpeechProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
;