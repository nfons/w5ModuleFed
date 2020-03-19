import React from 'react';
import Clock from 'react-live-clock';


export default class CustomClock extends React.Component {

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
            <p>Current Time (us/Pacific):</p>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </div>
        );
      }
};