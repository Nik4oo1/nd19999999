import React from 'react'
import PostItem from './PostItem'

export default function PostList(props){
  const posts = props.posts || []
  if(posts.length === 0){
    return <p>Няма статии за показване.</p>
  }

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
