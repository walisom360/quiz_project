import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import InitialPage from '../pages/InitialPage'
import Tasks from '../pages/Tasks'
import TasksNormal from '../pages/TasksNormal'
import FirstPage from '../pages/FirstPage'
import PageTwo from '../pages/PageTwo'
import PageTree from '../pages/PageTree'
import PageFour from '../pages/PageFour'
import QuestionDescription from '../pages/QuestionDescription'



export default function Routes(){

  return(
    <BrowserRouter>
     <Switch>
       <Route exact path="/"  component={FirstPage} />
       <Route exact path="/tasks" component={Tasks} />
       <Route path="/taskNormal" component={TasksNormal} />  
       <Route  path="/tasktwo" component={PageTwo} />
       <Route  path="/tasktree" component={PageTree} />
       <Route  path="/taskfour" component={PageFour} />
       <Route path="/descriptionone" component={QuestionDescription}/>
      
     </Switch>
    </BrowserRouter>
  )
}