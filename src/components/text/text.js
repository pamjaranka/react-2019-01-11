import React, {PureComponent, Fragment} from 'react'
import {Localization} from '../../contexts/localization';
import texts from '../../texts';

class Text extends PureComponent {
    render() {
        const localization = texts[this.context.language];
        const value = localization[this.props.children] || this.props.children;

        return <Fragment>{value}</Fragment>
    }
}

Text.contextType = Localization

export default Text