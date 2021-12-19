
const Post = ({ title, content, post_date, likes, author }) => {
    return (
        <div className="post">
            <h3 clasName="post-title">Title: {title}</h3>
            <span className="post-content">{content}</span> <br />
            <span className="post-info">Post by {author} on {post_date}</span>
        </div>


    )
}

export default Post


