import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost(props) {
 

    return(
        <from className={classes.form}>
            <p>
                <label htmlFor="body"> Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
        </from>
    );
    }
export default NewPost;