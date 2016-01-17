import React, {Component} from 'react';
import { Input } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';

export default class AddText extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Kennel name</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <Input type="text" placeholder="Kennel name"/>
                        {' '}
                        <Button type="submit">Save</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

