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
                        <a href="#">{this.props.label}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <Input type="text" placeholder={this.props.placeholder} value={this.props.value} />
                        {' '}
                        <Button type="submit">{this.props.btnText}</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

