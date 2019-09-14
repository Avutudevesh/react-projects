import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component{

    renderSubmit(value){
        return value ==='english'?'Submit': 'प्रस्तुत';
    }

    render(){
        const text = this.context === 'english'? 'Submit': 'प्रस्तुत';
        return(
        <ColorContext>
        { (color) =>
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        }
        </ColorContext>
        );
    }
}

export default Button;