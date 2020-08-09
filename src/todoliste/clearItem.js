import React, { Component } from 'react'


import AllTodo from './AllTodo'

export class clearItem extends Component {
  

  render() 
  { const handleDelete =this.props.HandleDelete
       
        console.log( this.props.Handleclear.ClearItem)
    const Allitem=this.props.items;
    
    const Listeitem =Allitem.map(itemOne => <AllTodo className='' key={itemOne.id} item={itemOne}  HandleDelete={ ()=> this.props.HandleDelete(itemOne.id) }  
    
    HandleUpdate={ ()=> this.props.handleUpdate(itemOne.id) } />)
    return (
      <React.Fragment>
      {Listeitem}
       <div className= "form-group mt-3">
       <button  onClick={this.props.Handleclear} className=" btn btn-block btn-danger  col">  Clear  </button>
       </div>
    </React.Fragment>
    )
    }
}

export default clearItem
