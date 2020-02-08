import React from 'react';
import { Layout } from './Components/Layout'
import { PlanningGrid } from './Components/PlanningGrid'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <PlanningGrid />
      </Layout>
    </div>
  );
}

export default App;
