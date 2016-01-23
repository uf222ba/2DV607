import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';

import AddText from './add-text';

class KennelName extends Component {
    render() {
        return (
            <AddText value={this.props.kennelName} label="Kennel Name" btnText="Save" />
        );
    }
}

function mapStateToProps(state) {
    return {
        kennelName: state.kennelName
    };
}

export default connect(mapStateToProps)(KennelName);
