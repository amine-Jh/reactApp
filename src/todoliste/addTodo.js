import React, { Component } from 'react'


class Add extends  Component {

constructor()
{
    super()
    
}

    render(props)
    {
       return( 
       <form  className='form-group  ' onSubmit={this.props.handleSubmit} >
          <div class="form-group   col">
            <label >Ajouter nouvelle Item</label>
            <input type="text" className=" justify-content-center form-control form-control-lg" id="exampleInputEmail1" onChange={this.props.handleChange}  value={this.props.item} />
          </div>
        <div className=" form-group col">
      <button type="submit"
       className=  {(this.props.edit) ?' " btn btn-block btn-success col-sm-8"':'" form-control btn btn-block btn-primary col-8"' }
       > {(this.props.edit) ?' editer item':'ajouter' }</button></div>
      </form>) 
    }
}








export default Add