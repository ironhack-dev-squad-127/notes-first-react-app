import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import RandomImgCard from './RandomImgCard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome on my React App</h1>
        {/* Bonus */}
        <RandomImgCard />
        <RandomImgCard />
        <RandomImgCard />

      </main>
      

      
      <Footer />
    </div>
  );
}

export default App;
