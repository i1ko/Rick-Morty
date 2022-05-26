// import logo from '../../logo.svg';
// import { Counter } from '../../features/counter/Counter';
// import styled from "styled-components"
import React from 'react';
import './App.css';
import axios from "axios";
import {RouteObject, useRoutes} from "react-router-dom";

import {Characters} from "../Characters/Characters";

// const defView = <header className="App-header">
//
//   <img src={logo} className="App-logo" alt="logo" />
//   <Counter />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload.
//   </p>
//   <span>
//           <span>Learn </span>
//           <a
//               className="App-link"
//               href="src/components/App"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="src/components/App"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="src/components/App"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//               className="App-link"
//               href="src/components/App"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
// </header>

function App() {

    let routes: RouteObject[] = [
        {
            path: "/",
            element: <Characters/>
        },
        {
            path: "/characters",
            element: <Characters />,
        },
    ]
    const element = useRoutes(routes);


    const request: any = axios('https://rickandmortyapi.com/api/character')
        .then((res: any) => {
            console.log(res.data);
        })

    console.log(Promise.all(request));

    return (
        <div className="App">
            <nav className={'nav'}>
                <div>
                    <button type='button'>Characters</button>
                </div>
                <div>
                    <button type='button'>TODO-list</button>
                </div>
            </nav>
            <div>
                {element}
            </div>
        </div>
    );
}


export default App;
