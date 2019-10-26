import React, {useEffect, useState} from 'react';

const AJAXcontent = () => {
    //empty arry for our data
    //users is our state object
    //setUsers is our state updater function
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    //need to invoke our GET functions with useEffect
    useEffect(() => {
        getUsers()
        getPosts()
    }, []);
    
    async function getUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users)
    }

    async function getPosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setPosts(posts)
    }

    return (
    <div>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
                ))}
        </ul>
        <ul> {posts.map(post => (
                //need to stringify as object returned from GET req is a an obj, which upsets React
                <li key={post.id}>{JSON.stringify(post.title)}</li>
            ))}
        </ul>
    </div>
    );
};

export default AJAXcontent;