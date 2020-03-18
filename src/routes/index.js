import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import InitialPage from '../pages/InitialPage'
import Tasks from '../pages/Tasks'
import TasksNormal from '../pages/TasksNormal'
import FirstPage from '../pages/FirstPage'

import PageTwo from '../pages/PageTwo'



export default function Routes(){

  return(
    <BrowserRouter>
     <Switch>
       <Route exact path="/"  component={FirstPage} />
       <Route  path="/tasks" component={Tasks} />
       <Route  path="/tasksNormal" component={TasksNormal} />  
       <Route  path="/tasktwo" component={PageTwo} />
     </Switch>
    </BrowserRouter>
  )
}