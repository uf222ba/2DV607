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

export default class App extends Component {
  render() {
    return (
        <Grid>
            <Row className="show-grid">
                <Col><Banner /></Col>
            </Row>
            <Row>
                <Col>
                    <AddText />
                    <hr />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col>
                    <AddText />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey={2} position="left" tabWidth={3}>
                        <Tab eventKey={1} title="A-litter">
                            <NamelistEditor />
                        </Tab>
                        <Tab eventKey={2} title="B-litter">
                            <Input label="Name" type="text" bsSize="small" /><Button>Add</Button>

                        </Tab>
                        <Tab eventKey={3} title="C-litter" disabled>Tab 3 content</Tab>
                    </Tabs>
                </Col>
            </Row>
        </Grid>

    );
  }
}
