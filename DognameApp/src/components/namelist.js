import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import ListItem from './listitem';


export default class Namelist extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>
        );
    }
}



