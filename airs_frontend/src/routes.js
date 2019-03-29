import React from 'react';
import { Route } from 'react-router-dom';
import TableView from './components/Table';

const BaseRouter = () => (
  <div>
    <Route exact path = '' component = {TableView} />
  </div>
);

export default BaseRouter;