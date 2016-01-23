import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

export default class CountChars extends Component {
    render() {
        return (
            <Panel bsStyle="success">
                Ooo Hello I'm a beautiful Koala<br />
                6 used and 29 chars remaining
            </Panel>
        );
    }
}

