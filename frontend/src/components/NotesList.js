import React , {Component}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class NotesList extends Component{

    state={
        users:[]
    }

   async componentDidMount(){
    this.getUsers(); 
    }

    
        getUsers = async () => {
        const res = await axios.get('http://localhost:5000/api/users'); //muestra todos los usuarios
        this.setState({
            users: res.data  //almacena los datos esblece el estado de los usuarios para despues recorrerlos 
        });
        }

    

 deleteUser = async (userId) => {
        const response = window.confirm('Seguir con la eliminacion?');
        if (response) {
            await axios.delete('http://localhost:5000/api/users/' + userId);
           this.getUsers(); 
        }
    }



    render() {
        return (
            <div className="row">
                {
                    this.state.users.map(user => (
                        <div className='col-md-4 p-2' key={user._id}>
                            <div className='card'>
                                <div className='card-header d-flex justify-content-between '>
                                    <h5>{user.username}</h5>
                                    <Link className='btn btn-primary' to={'/edit/'+user._id}>editar</Link>
                                </div>
                                <div className='card-body'>
                                    <p>Usuario: {user.username} </p>
                                    <p>Contraseña: {user.password} </p>

                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-danger'onClick={()=> this.deleteUser(user._id)} >Borrar</button>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>

        )


    }


}
                                   