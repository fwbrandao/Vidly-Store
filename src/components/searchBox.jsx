import React from 'react';
import Input from './common/input'

const SearchBox = ({ value, onChange}) => {

    return (
        <div>
            <Input
                type="text"
                name="query"
                value={value}
                onChange={e => onChange(e.currentTarget.value)}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBox;