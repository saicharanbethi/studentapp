import React from "react";
import axios from 'axios';
export default class StudentlistComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
               students:[]
    }
    }
    deletestudent(id)
    {
        axios.delete("http://localhost:3000/students/"+id)
        this.showItems()
    }
    showItems()
    {
        axios.get("http://localhost:3000/students")
        .then(res=>{
            this.setState({students:res.data})
        })
    }
    componentDidMount(){
       this.showItems()
    }
    render(){
        return(
            <table className="table table-bordered table-striped ">
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    
                        this.state.students.map(student=>
                        <tr>
                            <td>{student.id}</td>
                             <td>{student.name}</td>
                             <td>{student.email}</td>
                             <td><button className="btn btn-danger" onClick={()=> this.deletestudent(student.id)}>Delete</button>
                             <button className="btn btn-primary">Edit</button>
                             <button className="btn btn-info">Info</button></td>
                        </tr>

                    )}
                </tbody>
            </table>
        )
    }
}