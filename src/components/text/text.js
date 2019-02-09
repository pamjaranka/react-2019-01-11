import React, {Component, Fragment} from 'react'
import {Consumer as LocalizationConsumer, Provider as LocalizationProvider} from '../../contexts/localization';
import texts from '../../texts';

class Text extends Component {
    render() {
        return (
            <LocalizationConsumer>
                {({language}) => (
                    <Fragment>{this.getValue(language)}</Fragment>
                )}
            </LocalizationConsumer>
        )
    }

    getValue(language) {
        const localization = texts[language];
        const value = localization[this.props.children] || this.props.children;

        return value;
    }
}

export default Text