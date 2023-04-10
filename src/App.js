import React from 'react'
import './App.css';
import Home from './components/Home';
import TravelInfo from './components/TravelInfo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [formData, setFormData] = React.useState(
    {
        freqMode  : '',
        totalDist : ''
    }
  )

  const Mode = Array(5).join(".").split(".")
  
  Mode[0] = 'mode_1'
  Mode[1] = 'mode_2'
  Mode[2] = 'mode_4'
  Mode[3] = ['mode_8', 'mode_9'][Math.floor(Math.random()*2)]
  Mode[4] = ['mode_7', 'mode_5'][Math.floor(Math.random()*2)]
  switch(formData.freqMode){
      case 'OwnTwoWheeler':
          Mode[3] = 'mode_9'
          break
      case 'OwnCar':
          Mode[3] = 'mode_8'
          break
      case 'Auto':
          Mode[4] = 'mode_7'
          break
      case 'Ola/Uber':
          Mode[4] = 'mode_5'
          break
      default:
  }

  function changeState(name, value){
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [name]: value
      } 
    })
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home freqMode    ={formData.freqMode}
                     totalDist   ={formData.totalDist}
                     changeState ={changeState}
                />,
    },
    {
      path: "travelInfo",
      element: <TravelInfo freqMode  ={formData.freqMode} 
                           totalDist ={formData.totalDist}
                           Mode      ={Mode}
               />,
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
