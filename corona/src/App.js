import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Profile from './pages/profile';
import AddArticle from './pages/add_article';
import FormConsultation from './pages/form_consult';
import Reservation from './pages/user_reservation';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/article/:id' exact component={Article} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/addArticle' exact component={AddArticle} />
          <Route path='/form' exact component={FormConsultation} />
          <Route path='/reservation' exact component={Reservation} />
          {/*
          <Route path='/addproperty' exact component={AddProperty} />
          <Route path='/booking' exact component={Booking} />
          <Route path='/history' exact component={History} />
          <Route path='/property/:id' exact component={Property} />
          <Route path='/transaction' exact component={Transaction} />
          <Route path='/homeOwner' exact component={HomeOwner} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
