import React from 'react';
import CustomClock from './CustomClock';
import CoolHeader from './CoolHeader'

export class App extends React.Component {
    customFunc() {
        alert("button clicked");
    }

    render() {
        return (
            <div>
            <CoolHeader name="Test name" callback={this.customFunc}/>
            <h1>Custom Clock From my App</h1>
            <CustomClock></CustomClock>
            </div>

        );
    }
}