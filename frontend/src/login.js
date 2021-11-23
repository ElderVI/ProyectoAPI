import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

 export default class login extends Component {
     render() {
         return (
             <div className='contanier'>
                 
                 <div className='row'>
                     <div className="col-md-4">
                         <div className="card card-body ">
                             <div className='card-header'>
                                 <h3>Login</h3>
                             </div>
                             <p>username</p>
                             <input
                                    className="form-control"
                                    type="text"
                                />
                                <p>Contraseña</p>
                                 <input
                                    className="form-control"
                                    type="text"
                                />
                              <br/>
                             <Link className='btn btn-primary'>iniciar sesion</Link>
                         </div>
                    

                 </div>
             </div>
             </div>

)

}

 }