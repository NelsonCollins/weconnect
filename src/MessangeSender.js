import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React, {useState} from 'react';
import './MessangeSender.css';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessangeSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setimageUrl] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput('');
        setimageUrl('');
    };

    return (
        <div className="messangeSender">
            <div className="messangeSender__top">
                <Avatar  src={user.photoURL} title={
                user.displayName} />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                     className="messangeSender__input"
                        placeholder={`Whats on your mind?, 
                        ${user.displayName}`}
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setimageUrl(e.target.value)}
                        placeholder={`Image URL (Optional)`}
                    />
                    <button onClick={handleSubmit} type ="submit">
                        Hidden submit
                    </button>
                </form>
            </div>  
            <div className="messangeSender__bottom">
                <div className="messageSender__option">
                   <VideocamIcon style={{color: "red"}} />
                   <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                   <PhotoLibraryIcon style={{color: "green"}} />
                   <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                   <InsertEmoticonIcon style={{color: "orange"}} />
                   <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    );
}

export default MessangeSender;
