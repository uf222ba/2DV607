import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import ListItem from './listitem';


export default class Namelist extends Component {
    renderList() {
        return this.props.names.map((name) => {
            return (
                <ListGroupItem key={name.name}>{name.name}<Badge>X</Badge></ListGroupItem>
            );
        });
    }

    render() {
        return (
            <ListGroup>
                {this.renderList()}
            </ListGroup>
        );
    }
}



