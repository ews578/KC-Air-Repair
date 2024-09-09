import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageContainer from "./components/PageContainer";

const App = () => (
  <Router>
    <PageContainer />
  </Router>
);

export default App;