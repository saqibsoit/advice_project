import React, { useEffect, useState } from "react";
import axios from "axios";

import './App.css';

const App = () => {

    const [getAdvice, setGetAdvice] = useState('');

    useEffect(() => {
        // Fetch advice when the component mounts
        fetchAdvice();
      }, []);

      const fetchAdvice = async () => {
        try {
          const response = await axios.get('https://api.adviceslip.com/advice');
          const { data: { slip  } } = response;
          console.log(slip.advice);
          setGetAdvice(slip.advice);
        } catch (error) {
          console.error('Error fetching advice:', error);
        }
      };
      
    return (
        <div className="app">
        <div className="card">
          <h3 className="heading">{getAdvice}</h3>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
}

export default App;