import React from 'react';
import { Link } from 'react-router-dom';
import './AdminToolbar.css';

const Toolbar = () => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo"><Link to="/admin">Admin</Link></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/admin/insert">Insert</Link></li>
                    <li><Link to="/admin/update">Update</Link></li>
                    <li><Link to="/admin/delete">Delete</Link></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;