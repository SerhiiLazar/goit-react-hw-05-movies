import * as API from '../../api/api'
import { useEffect } from 'react';


export const App = () => {
useEffect(()=>{
  async function fetchMoviTrending() {
    try{
      const moviTrending = await API.getMoviTrending();

      console.log(moviTrending)
    }catch(error){
      alert('Eror');
    };
  }
  console.log(fetchMoviTrending());
}, [])
  return (
    <div

      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      
    </div>
  );
};



