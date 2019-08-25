import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {

    state= {lat:null, lon:null, errorMessage:null};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );

    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error Message: {this.state.errorMessage} </div>;
         }

         if(!this.state.errorMessage && this.state.lat) {
             return  <SeasonDisplay lat={this.state.lat}/>;
         }
         else {
             return <Spinner message="Please accept location request!"/>
         }
    }
    render() {
        return(
            <div className="border red">
            {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#root'));