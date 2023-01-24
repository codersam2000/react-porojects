import MainNav from "../componants/MainNav";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const PostDetails = ()=>{
    const {postId} = useParams();
    const {data:post, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,null);

    return(
        <div>
            <h1>Post Details</h1>
            <MainNav />
            {isLoading && <div>Loding..........</div>}
            {error && <div>{error}</div>}
            <h2>
                {post?.title}
            </h2>
            <div>
                <p>{post?.body}</p>
            </div>
        </div>
    )
}
export default PostDetails;