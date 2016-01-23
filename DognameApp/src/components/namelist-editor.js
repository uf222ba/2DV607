import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

import AddText from './add-text';
import CountChars from './count-chars';
import Namelist from './namelist';

export default class NamelistEditor extends Component {
    render() {
        return (
            <Panel header="A-litter" bsStyle="primary">
                <AddText label="Pedigree Name" btnText="Add" value="Helloo" />
                <CountChars />
                <Namelist names={this.props.names} />
            </Panel>
        );
    }
}

