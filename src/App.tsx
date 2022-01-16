import React from 'react';


import MyForm from './MyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   
<div className="container">
  <main>
   
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
       <MyForm/>
      </div>
    </div>
  </main>

 
</div>
   
  );
}

export default App;
