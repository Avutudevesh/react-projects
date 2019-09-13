import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions'
import { statement } from '@babel/template';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    render() {
        if(!this.props.stream){
            return <div>Loading...</div>
        } 
        const {title, description } = this.props.stream;
        return (
          <div>
              <h1>{title}</h1>
              <h5>{description}</h5>
          </div>  
        );
    }
}

const mapStateToParams = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
} 

export default connect(mapStateToParams, {fetchStream})(StreamShow);