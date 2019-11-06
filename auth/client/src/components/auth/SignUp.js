import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {compose} from 'redux';

class SignUp extends React.Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <fieldset>
                        <label>Email:</label>
                        <Field name='email' type='text' component='input' autoComplete='none'/>
                    </fieldset>
                    <fieldset>
                        <label>Password:</label>
                        <Field name='password' type='password' component='input' autoComplete='none'/>
                    </fieldset>
                    <div>
                        {this.props.errorMessage}
                    </div>
                    <button>SignUp</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {errorMessage: state.auth.errorMessage}
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form:'signup'})
)(SignUp);