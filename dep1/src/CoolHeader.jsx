import React from 'react';


export default class CoolHeader extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.cb = props.callback;
    }

        render() {
            return (
                <div style={{background: "red"}}>
                   <h1>{this.name}</h1> 
                   <button onClick={this.cb}> Click Here</button>
                </div>
            )
        }
}
