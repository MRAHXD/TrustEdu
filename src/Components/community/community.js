import React, { useEffect, useState } from "react";  
import "./community.css";  
import { FaHeart } from "react-icons/fa";  
  
const initialPosts = JSON.parse(localStorage.getItem("posts")) || [];  
const sampleUsers = [  
  { id: 1, name: "User1", contributions: 55 },  
  { id: 2, name: "User2", contributions: 50 },  
  { id: 3, name: "User3", contributions: 45 },  
];  
  
function Community() {  
  const [newReply, setNewReply] = useState("");  
  const [posts, setPosts] = useState(initialPosts);  
  const [users] = useState(sampleUsers);  
  const [newPost, setNewPost] = useState({  
    title: "",  
    content: "",  
    replies: [],  
    upvotes: 0,  
    upvotedBy: [],  
    id: posts.length + 1,  
  });  
  
  useEffect(() => {  
    setPosts(posts.map(post => (post.upvotes && post.upvotedBy)? post : {...post, upvotes: 0, upvotedBy: []}));  
  }, []);  
  
  const handleNewPostChange = (e) => {  
    setNewPost({ ...newPost, [e.target.name]: e.target.value });  
  };  
  
  const handleAddPost = () => {  
    if (newPost.title.trim() === "" || newPost.content.trim() === "") {  
      alert("Title and content cannot be empty.");  
      return;  
    }  
    setPosts([...posts, newPost]);  
    setNewPost({ title: "", content: "", replies: [], upvotes: 0, upvotedBy: [], id: newPost.id + 1 });  
  };  
  
  const handleReplyChange = (e) => {  
    setNewReply(e.target.value);  
  };  
  
  const handleUpvotePost = (postId, userId) => {  
    setPosts(posts.map(post => {  
      if (post.id === postId && !post.upvotedBy.includes(userId)) {  
        return {...post, upvotes: post.upvotes + 1, upvotedBy: [...post.upvotedBy, userId]};  
      }  
      return post;  
    }));  
  };  
  
  useEffect(() => {  
    localStorage.setItem("posts", JSON.stringify(posts))  
  }, [posts]);  
      
  const sortedPosts = [...posts].sort((a, b) => b.upvotes - a.upvotes);  
  const currentUser = { id: 3, name: "User1" }; // you have to get actual user info here  
  

  return (
    <div className="container">
      <div className="community-page-container">
        <div className="community-post-container">
          <h3>Community Posts</h3>

          <div className="post-input">
            <input
              type="text"
              onChange={handleNewPostChange}
              name="title"
              value={newPost.title}
              placeholder="Post Title"
            />
            <textarea
              onChange={handleNewPostChange}
              name="content"
              value={newPost.content}
              placeholder="Write your post here"
            />
            <button onClick={handleAddPost}>Add Post</button>
          </div>

          {sortedPosts.map((post, i) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-actions">
              <span>{post.upvotes}</span>
              <FaHeart style={{ color: "red", marginTop: "3px" }} />
              <button onClick={() => handleUpvotePost(post.id, currentUser.id)}>
                Upvote
              </button>
                </div>
              <div className="replies">
                {post.replies.map((reply, j) => (
                  <p key={j}>
                    Reply {j + 1}: {reply}
                  </p>
                ))}
              </div>

              <div className="reply-input">
                <textarea
                  onChange={handleReplyChange}
                  value={newReply}
                  placeholder="Add a reply"
                />

                <button
                  onClick={() => {
                    if (newReply.trim() === "") {
                      alert("Reply cannot be empty.");
                      return;
                    }

                    let updatedPost = { ...post };
                    updatedPost.replies.push(newReply);
                    setPosts([
                      ...posts.slice(0, i),
                      updatedPost,
                      ...posts.slice(i + 1),
                    ]);
                    localStorage.setItem("posts", JSON.stringify(posts));
                    setNewReply("");
                  }}
                >
                  Add Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="leaderboard-container">
          <h3>Top Contributors</h3>
          {users.map((user) => (
            <div key={user.id} className="user">
              <h4>{user.name}</h4>
              <p>Contributions: {user.contributions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
