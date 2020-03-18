import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import InitialPage from '../pages/InitialPage'
import Tasks from '../pages/Tasks'
import TasksNormal from '../pages/TasksNormal'
import FirstPage from '../pages/FirstPage'



export default function Routes(){

  return(
    <BrowserRouter>
     <Switch>
       <Route exact path="/"  component={FirstPage} />
       <Route  path="/tasks" component={Tasks} />
       <Route  path="/tasksNormal" component={TasksNormal} />
     </Switch>
    </BrowserRouter>
  )
}