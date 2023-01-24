import { Link } from "react-router-dom";
import MainNav from "../componants/MainNav";
import { useFetch } from "../hooks/useFetch";
const Posts = ()=>{
    const {data:posts, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts`,[]);
    return(
        <div>
            <h1>Post</h1>
            <MainNav />
            {isLoading && <div>Loding..........</div>}
            {error && <div>{error}</div>}
            <ul>
                {posts.map(post=>(
                    <li key={post?.id}><Link to={`/post/${post.id}`}>{post?.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default Posts;