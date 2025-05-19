// importiamo il contesto 
import PostContext from "../contexts/PostContext";
// usiamo il contesto 
import { useContext } from "react";

const PostList = () => {

    let { posts } = useContext(PostContext);
    return (
        <div>
            <h2>Lista dei post</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>{post.category}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList
