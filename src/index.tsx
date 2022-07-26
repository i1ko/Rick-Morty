import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter, HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();
export const apolloClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                {/*<BrowserRouter>*/}
                {/*using special for GitHub pages*/}
                <HashRouter>
                    <App/>
                </HashRouter>
                {/*</BrowserRouter>*/}
            </Provider>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your redux, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
