import React,{Fragment} from 'react';

import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'



const Cita = (props) => {

    const{cita} = props


    console.log(cita)

    

    const eliminarCita = _id => {

        

           
            Swal.fire({
                title: 'Esta Seguro Shorete?',
                text: "Las Citas Eliminadas no se pueden recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!',
                cancelButtonText:'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                axios.delete(`http://localhost:4000/pacientes/${_id}`)
        .then(res => {
          console.log(res)

          //guardar state en el resultado
          //guardarCitas(res.data)

          props.guardarConsultar(true)
          props.history.push('/')
        
        })
        /*

          clienteAxios.get('/pacientes')
          .then(respueta =>{
              console.log(respueta.data)
          })
  */        .catch(error => {
              console.log(error)
          })
                }
            })
    }
    
    //if(!cita[0]) {
        
    //}

    const dato = cita[0]


    ; 

    //console.log(dato.propietario)
    

    //const {nombre} = citas;
    //console.log(props.match.params.id)

    


    //console.log('citas props')
    //console.log({nombre})

    //console.log('a nombre')
    //console.log(nombre)
    


  

   
    return ( 

        <Fragment>       
             <h1 className="container mt-5 py-5">Nombre Cita : {dato.nombre}</h1>

                <div className="container mt-5 py-5">

                

                    <div className="row">
                        <div className='col-12 mb-5 d-flex justify-content-center'>
                            

                            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>

                        </div>

                        <div className="col-md-8 mx-auto">
                        
                            <div className="list-group">
                            
                                        <div className="p-5 list-group-item list-group-item-action flex-column align-item-center">
                                            <div className="d-flex w-100 justify-content-between mb-4">

                                                <h3 key={dato._id} className="mb-3">{dato.nombre}</h3>
                                                <small className="fecha-alta">
                                                    
                                            
                                                    {dato.fecha}     |      {dato.hora} 
                                                    
                                                    
                                                </small> 
                                            </div>

                                           

                                            

                                            
                                        <div className="contacto py-3">
                                            <p>Dueño : {dato.propietario}</p>
                                            <p>Telefono: {dato.telefono}</p>
                                            

                                        </div>
                                        <p className="mb-0">Sintomas : {dato.sintomas}</p>
                                        <p></p>
                                        <div className="d-flex">
                                            <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                                    onClick={()=> eliminarCita(dato._id)}
                                            
                                            >
                                                Eliminar &times;
                                            </button>
                                        </div>
                                        </div>


                                      

                                        


                             </div>
                            </div>
                        </div>
                    </div>
                    

               

                

                    

                

        </Fragment>

        );
}
export default withRouter(Cita)  ;
