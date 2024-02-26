import React from 'react'
import Navbar from './navbar'
import TodoItems from './todoItems.js'

const todolist = (props) => {

     return (
          <>
               <Navbar title="crudOperationsWithTodos" />
               <div className="container d-flex flex-wrap">

                    {
                         props.todos.length === 0 ? <h1 className='my-4'> Todos is empty..  </h1>
                              :
                              props.todos.map((element, index) => (
                                   <TodoItems key={index} title={element.title} des={element.des} handleClick={() => { props.handleDelete(element) }} />
                              ))

                    }
               </div>
          </>
     )
}

export default todolist
