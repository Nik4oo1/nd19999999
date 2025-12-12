import React from 'react'
import PostList from './PostList'

export default function Content(props){
  return (
    <div>
      <h2>Последни статии</h2>
      <PostList posts={props.posts} />
    </div>
  )
}
