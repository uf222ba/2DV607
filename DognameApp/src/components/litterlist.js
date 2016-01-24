import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectLitter } from '../actions/index';
import { bindActionCreators } from 'redux';
import {Tabs} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import NamelistEditor from './namelist-editor';

class Litterlist extends Component {
    renderList() {
        var i = 1;
        return this.props.litters.map((litter) => {
            return (
                <li onClick={() => this.props.selectLitter(litter)}
                    key={litter.litter}
                    className="list-group-item">
                    {litter.litter}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="col-xs-3 nav nav-pills nav-stacked">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
      litters: state.litters
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectLitter: selectLitter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Litterlist);