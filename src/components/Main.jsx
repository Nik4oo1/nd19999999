import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

export default function Main(props){
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="content">
        <Content posts={props.posts} />
      </section>
    </div>
  )
}
