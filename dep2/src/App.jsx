import React from 'react';
import DepComponent from './DepComponent';


export class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Dep 2 Injecting custom clock</h1>
            <DepComponent></DepComponent>
            </div>

        );
    }
}