import { useParams } from "react-router-dom"

import PostContext from "../contexts/PostContext";
import { useContext } from "react";

const PostCard = () => {
    // recupero id della rotta
    const { id } = useParams();
    // 
    const { posts } = useContext(PostContext);

    const post = posts.find(p => p.id === parseInt(id))

    return (
        <div>
            <h4>Card singola cliccata</h4>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.content}
            </p>
            <p>
                {post.category}
            </p>
        </div>
    )
}

export default PostCard
