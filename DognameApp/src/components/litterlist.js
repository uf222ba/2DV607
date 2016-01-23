import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import {Tabs} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';

import NamelistEditor from './namelist-editor';

class Litterlist extends Component {
    renderList() {
        var i = 1;
        return this.props.litters.map((litter) => {
            return (
                <Tab key={i} eventKey={i++} title={litter.litter}>
                    <NamelistEditor names={litter.names} />
                </Tab>
            );
        });
    }

    render() {
        return (
            <Tabs defaultActiveKey={1} position="left" tabWidth={3}>
                {this.renderList()}
            </Tabs>
        );
    }
}

function mapStateToProps(state) {
    return {
      litters: state.litters
    };
}

export default connect(mapStateToProps)(Litterlist);