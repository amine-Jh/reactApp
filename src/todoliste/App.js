import React, { Component } from 'react'
import AllTodo from './AllTodo'
import Add from './addTodo'
import ClearItem from './clearItem'

class App extends Component{

   
    
constructor(){
    super()
    this.state={ items:[],
        item :'',
        id :1,
        editItem : false
        
    }
    
}
handleChange (e)
{
this.setState({
    item : e.target.value
})
}

handleSubmit(e)
{
 e.preventDefault();

 const newItem ={
     id : this.state.id  ,
     item :this.state.item
 }
 const updateditem =[...this.state.items,newItem]
 console.log(updateditem)
 this.setState({
    id : this.state.id +1,
    items: updateditem,
    editItem :false
 })

}

Clear()
{

    this.setState({
                    items:[]
        
    })
}
 
HandleDelete(id)
{
    const filtred = this.state.items.filter(item=> item.id !=id)
    this.setState({
        items :filtred
    })
}

handleUpdate(id)
{   const filtred = this.state.items.filter(item=> item.id !==id)
    const selectedItem =this.state.items.find(item => item.id==id )
    this.setState( 
    {
        items:filtred,
        item :selectedItem.item,
        editItem :true
    }
    )
}

    render()
    {   
        return (
         <React.Fragment>
             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
             integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossorigin="anonymous"></link>
              <div className="container-fluid bg-light col-md-7 mb-3 "  >
                 
        
                
                <Add  edit={this.state.editItem}   item={this.state.item}  handleChange={(e)=>this.handleChange(e) }  handleSubmit={(e)=>this.handleSubmit(e)} />

            

               
               <ClearItem   handleUpdate={(id)=>this.handleUpdate(id)} HandleDelete={ (id)=>this.HandleDelete(id) } Handleclear={()=>this.Clear()}  items={this.state.items} /> 

    </div>
    </React.Fragment>
        )
    }
}

export default App
