import React, {Component} from 'react'
import {Consumer as LocalizationConsumer} from '../../contexts/localization';


class LanguageButton extends Component {
    render() {
        return (
            <LocalizationConsumer>
                {({language}) => (
                        <button style={this.getStyle(language)}
                                onClick={this.handleClick}
                        >
                            {this.props.children}
                        </button>
                    )
                }
            </LocalizationConsumer>
        )
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.onClick(this.props.children)
    }

    getStyle(language) {
        return {
            opacity: language === this.props.children ? '0.5' : '1',
        }
    }
}

export default LanguageButton;