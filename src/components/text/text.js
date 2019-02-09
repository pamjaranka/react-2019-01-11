import React, {PureComponent, Fragment} from 'react'
import {Localization} from '../../contexts/localization';
import texts from '../../texts';

class Text extends PureComponent {
    render() {
        const localization = texts[this.context.language];

        return <Fragment>{localization[this.props.children]}</Fragment>
    }
}

Text.contextType = Localization

export default Text