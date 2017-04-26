// in src/Menu.js
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItem containerElement={<Link to="/articles" />} primaryText="Posts" onTouchTap={onMenuTap} />
        <MenuItem containerElement={<Link to="/users" />} primaryText="Comments" onTouchTap={onMenuTap} />
        <MenuItem containerElement={<Link to="/articles" />} primaryText="Miscellaneous" onTouchTap={onMenuTap} />
        {logout}
    </div>
);
