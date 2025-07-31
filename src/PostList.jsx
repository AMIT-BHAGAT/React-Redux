import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './store/actions/postAction';
import { useEffect } from 'react';



const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }   
    if (error) {
        return <div>Error: {error}</div>;
    }   
  return (

    <div>
      <h1>Post List</h1>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default PostList;