import React from 'react';
import './App.css';
import Orders from "./Component/Orders";
import FormControlled from "./Component/FormControlled";
import FormHook from "./Component/FormHook";
function App() {
  return (
    <>
        <main>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <Orders/>
            </section>
            <section>
                <FormHook />
            </section>
        </main>


    </>
  );
}

export default App;
