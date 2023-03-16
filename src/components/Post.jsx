import classes from './Post.module.css';


function Post(props )  {
    return(
        <ul className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </ul>
    );
}

export default Post;