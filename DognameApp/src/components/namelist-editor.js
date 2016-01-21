import React, {Component} from 'react';

import AddText from './add-text';
import ShowChars from './show-chars';
import Namelist from './namelist';

export default class NamelistEditor extends Component {
    render() {
        return (
            <div>
                <AddText />
                <ShowChars />
                <Namelist />
            </div>
        );
    }
}

