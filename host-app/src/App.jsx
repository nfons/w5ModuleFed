import React from 'react';
import DepComponent from 'dep2/DepComponent';
import CoolHeader from 'dep1/CoolHeader';

export class App extends React.Component {

    callbackFunc() {
        alert("callback called from host-app")
    }
    render() {
        return (
            <div>
            <CoolHeader name="Host App importing remote deps" callback={this.callbackFunc}></CoolHeader>
            <DepComponent></DepComponent>
            </div>

        );
    }
}