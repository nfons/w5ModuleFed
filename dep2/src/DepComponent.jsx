import React from 'react';
import CustomClock from 'dep1/CustomClock';


export default class DepComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(
          () => this.setState({ date: new Date() }),
          1000
        );
      }
    
      render() {
        return (
          <div>
           <h1>Dep2 Component</h1>
           <CustomClock></CustomClock>
          </div>
        );
      }
};