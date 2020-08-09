import React, { Component } from 'react'


class Item extends  Component {



    render(props)
    {
        return (( this.props.items.checked ) ?
         (<div> <label> {this.props.items.todo} </label> <input type='checkbox' checked /></div>) : 
        (<div><label> {this.props.items.todo} </label> <input type='checkbox'  /></div>) )
    }
}








export default Item