
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {store} from "./redux/slices/store.ts";
import App from "./App.tsx";
import React from 'react';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <Provider store={store}>
                    <BrowserRouter>
                            <App />
                    </BrowserRouter>
            </Provider>
    </React.StrictMode>

)
