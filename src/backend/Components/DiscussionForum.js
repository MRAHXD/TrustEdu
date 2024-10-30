import React, { useState, useEffect } from 'react';

const ForumPost = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </div>
  )
}

const ForumThread = () => {
  const [posts, setPosts] = useState([])

  // Assume we have an API that returns a list of posts
  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err))
  }, []) // Run on mount

  return (
    <div>
      {posts.map(post => <ForumPost key={post.id} post={post} />)}
    </div>
  )
}

export default ForumThread;
