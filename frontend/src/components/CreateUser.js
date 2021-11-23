import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        username: '',
        password:'',
        editar:false,
        _id:'',
        users: []
    }

    async componentDidMount() { //permite pedir los datos al servidor
        this.getUsers();
        if(this.props.match.params.id){  //condicional que me permite validar si el formulario recibio un id para actualizar
           const res= await axios.get('http://localhost:5000/api/users/'+ this.props.match.params.id);
           console.log(res.data)
           //se llena el el formulario con los datos para actualizarlos cambiando su estado
            this.setState({
                username:res.data.username,
                password:res.data.password,
                editar:true,
                _id:this.props.match.params.id
            })
        }
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:5000/api/users'); //muestra todos los usuarios
        this.setState({
            users: res.data
        });
    }

    onChangeUsername = e => {               //
        this.setState({
            username: e.target.value,
            
        })
    }

    onChangePassword = e => {
        this.setState({
            
            password:e.target.value
        })
    }

    onSubmit = async (e) => {                                       //crear usuarios
        e.preventDefault();
        if(this.state.editar){
            this.updateUser(this.state._id);

        }else{

        await axios.post('http://localhost:5000/api/users', {
            username: this.state.username, password: this.state.password
        });
       
}
        this.setState({ username: '' });
        this.setState({password:''});
        this.getUsers();
        
    }

    deleteUser = async (userId) => {
        const response = window.confirm('Seguir con la eliminacion?');
        if (response) {
            await axios.delete('http://localhost:5000/api/users/' + userId);
            this.getUsers();
        }
    }
    
    updateUser=async(userId)=>{
        const response = window.confirm('Seguir con la actualizacion?');
        if(response){
            await axios.put('http://localhost:5000/api/users/' + userId ,{
            username: this.state.username,
            password: this.state.password
        });
            this.getUsers();

        }


    }
    

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body "  >
                        <h3>Nuevo usuario</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <h7>Username</h7>
                                <input
                                    
                                    className="form-control"
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                                <h7>Contraseña</h7>
                                <input
                                className="form-control"
                                value={this.state.password}
                                type="text"
                                onChange={this.onChangePassword}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>
                                
                            )
                            )
                        }
                    </ul>
                    
                </div>
            </div>
        )
    }
}
