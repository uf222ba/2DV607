import React, {Component} from 'react';

import AddText from './add-text';
import ShowChars from './show-chars';
import Namelist from './namelist';

export default class NamelistEditor extends Component {
    render() {
        return (
            <AddText />
            //<ShowChars /> This doesn't work
            //<Namelist /> This doesn't work
        );
    }
}

