import React, {useState, useEffect} from 'react';
import './Feed.css';
import MessangeSender from './MessangeSender';
import StoryReel from './StoryReel';
import Post from './Post';
import db from './firebase';


function Feed() {
    const [posts, setPosts] = useState([]);

     useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        );

    }, []);

    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/*MessangeSender */}
            <MessangeSender />
              {/*Post */}

            {posts.map((post) => (
                <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message= {post.data.message}
                timestamp= {post.data.timestamp}
                username= {post.username}
                image= {post.data.image}
                />
            ))}

            <Post 
                // key={id}
                profilePic="https://avatars0.githubusercontent.com/u/10922800?s=400&u=67dd516a5bcffb91243c5d0e22356c470f9b0cd3&v=4"
                message="Woow this works"
                timestamp="This a timestamp"
                username="@caerus_xerxes"
                image="https://images.theconversation.com/files/305837/original/file-20191209-90562-nsnsun.jpg?ixlib=rb-1.1.0&rect=284%2C696%2C1934%2C965&q=45&auto=format&w=1356&h=668&fit=crop"
            />
            <Post 
                // key={id}
                profilePic="https://avatars0.githubusercontent.com/u/10922800?s=400&u=67dd516a5bcffb91243c5d0e22356c470f9b0cd3&v=4"
                message="Woow this works"
                timestamp="This a timestamp"
                username="@caerus_xerxes"
            />
            <Post />
        </div>
    );
}

export default Feed;
