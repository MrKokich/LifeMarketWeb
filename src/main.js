import ReactDOM from 'react-dom';
import React from 'react';

import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';

import App from './components/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';


ReactDOM.render(
    <LocaleProvider locale={ruRU}>
        <div>
            <App>
                <MainPage/>
            </App>
        </div>
    </LocaleProvider>
    , document.getElementById('mount-point')
);

