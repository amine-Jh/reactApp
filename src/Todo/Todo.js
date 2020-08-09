import React, { Component } from 'react'
import Item from './item'
import ListeTodos from './ListeTodos'

const Todos =ListeTodos.map( iteme =>  <Item key={iteme.id}  items={iteme} />)

 function Todo ()
    { 
        return (
        
       
        <div> {Todos} </div>
        )
    }


export default Todo