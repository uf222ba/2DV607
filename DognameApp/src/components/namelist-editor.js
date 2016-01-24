import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Panel} from 'react-bootstrap';

import AddText from './add-text';
import CountChars from './count-chars';
import Namelist from './namelist';

export default class NamelistEditor extends Component {
    render() {
        if (!this.props.litter) {
            return <div>Select a litter to get started.</div>
        }
        return (
            <Panel header={this.props.litter.litter} bsStyle="primary">
                <AddText label="Pedigree Name" btnText="Add" value="Helloo" />
                <CountChars />
                <Namelist names={this.props.litter.names} />
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        litter: state.activeLitter
    };
}

// Step 3 - remember to delete 'export default' from the class declaration
export default connect(mapStateToProps)(NamelistEditor)

