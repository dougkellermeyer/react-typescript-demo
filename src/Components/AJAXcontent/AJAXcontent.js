import React, {useEffect, useState} from 'react';

const AJAXcontent = () => {
    //empty arry for our data
    //users is our state object
    //setUsers is our state updater function
    const [users, setUsers] = useState([]);

    //need to invoke our getUsers function with useEffect
    useEffect(() => {
        getUsers()
    }, []);
    
    async function getUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users)
    }

    return (
        <ul>
            {users.map(user => (
            <li>{user.name}</li>
            ))}
        </ul>
    );
};

export default AJAXcontent;