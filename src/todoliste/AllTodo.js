import React, { Component } from 'react'
import Add from './addTodo'


class AllTodo extends  Component {

    constructor()
    {
       super()
       
        this.inputRef=React.createRef()
    }


    clickHandler()
    {
    return this.inputRef.current.value
    }
    render(props)
    {  
        return ( 
    
            <div class="container card justify-content-center  ">
                <div class="card-header">ITEM   {this.props.item.id}</div>
  <div class="card-body">
    <h5 class="card-title">{this.props.item.item}</h5>
    <div className='form-group row justify-content-center ' >
    <button class="form-control  btn btn-primary col-5  "  onClick={this.props.HandleUpdate} > 
      editer</button> 
    <button  onClick={this.props.HandleDelete} class="form-control  btn btn-danger  ml-2 col-5">supprimer</button>
    </div>
  </div>
</div>)
    }
}

export default AllTodo