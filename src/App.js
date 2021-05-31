import React from 'react';
import './App.css';
import Orders from "./Component/Orders";
import Form from "./Component/Form";
function App() {
  return (
    <>
        <main>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <Orders/>
            </section>
            <section>
                <Form/>
            </section>
        </main>


    </>
  );
}

export default App;
