import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Registration form</h1>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
        <div class="text-center mt-4">
           <h3>Switch to <b>USERS</b> tab to add, edit and delete users</h3>
        </div>
        </div>
    );
}

export { Home };