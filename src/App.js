import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {BrowserRouter , Route, Switch} from 'react-router-dom'

//componentes
import Pacientes from './components/Pacientes.jsx';
import NuevaCita from './components/NuevaCita.jsx';
import Cita from './components/Cita.jsx';



function App() {

  //State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true)

 
  


  useEffect(()=>{

    if(consultar) {
      
        axios.get(`http://localhost:4000/pacientes`)
        .then(res => {
          //console.log(res.data)

          //guardar state en el resultado
          guardarCitas(res.data)

          guardarConsultar(false)
        
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

    axios.get(`http://localhost:4000/pacientes`)
      .then(res => {
        //console.log(res.data)
        guardarCitas(res.data)
      
      })
      /*

        clienteAxios.get('/pacientes')
        .then(respueta =>{
            console.log(respueta.data)
        })
*/        .catch(error => {
            console.log(error)
        })

    

    //const consultarApi = ()=>{



      
    //consultarApi()

  },[consultar])




 


            
                return (
                  
                  <BrowserRouter>
                      <Switch>
                          <Route exact path="/" component = {()=> <Pacientes citas = {citas}  />}/>  
                          

                          <Route exact  path="/NuevaCita" component ={ ()=> <NuevaCita  guardarConsultar={guardarConsultar} /> } />
                          <Route

                            exact
                            path="/cita/:id"

                            render={(props) =>{

                                //console.log(props.match.params.id)



                                const cita = citas.filter(cita => cita._id === props.match.params.id)
                               

                                return(


                                      <Cita cita ={cita} 
                                      guardarConsultar = {guardarConsultar}
                                      />


                                )
                            }}    

                            


                            
                          />
                           
                      </Switch>
                  </BrowserRouter>
                  
                )
}

export default App;
