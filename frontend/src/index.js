import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from  'react-router-dom';

const rootElement=document.getElementById('root');
const root=ReactDOM.createRoot(rootElement)
root.render(
    <GoogleOAuthProvider>
<Router> <App /></Router>
</GoogleOAuthProvider>
)