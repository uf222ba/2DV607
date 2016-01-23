import React from 'react';
import {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';

import Banner from './banner';
import AddText from './add-text';
import List from './namelist';
import NamelistEditor from './namelist-editor';
import Namelist from './namelist';
import Litterlist from './litterlist';
import KennelName from './kennel-name';

export default class App extends Component {
  render() {
    return (
        <Grid>
            <Row className="show-grid">
                <Col><Banner /></Col>
            </Row>
            <Row>
                <Col>
                    <KennelName />
                    <hr />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col>
                    <AddText label="Litter Name" btnText="Add"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Litterlist />
                </Col>
            </Row>
        </Grid>

    );
  }
}
