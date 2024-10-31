import React, { useState } from "react";
import "./community.css";

const sampleUsers = [
  { id: 1, name: "User1", contributions: 55 },
  { id: 2, name: "User2", contributions: 50 },
  { id: 3, name: "User3", contributions: 45 },
];

function Community() {
  const initialPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const [newReply, setNewReply] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const [users, setUsers] = useState(sampleUsers);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    replies: [],
  });

  const handleNewPostChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = () => {
    const updatedPosts = [...posts, { ...newPost, id: posts.length + 1 }];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setNewPost({ title: "", content: "", replies: [] });
  };

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

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

          {posts.map((post, i) => (
            <div key={i} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>

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
