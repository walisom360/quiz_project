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
import YouDescription from '../pages/YouDescription'
import Confortable from '../pages/Confortable'
import Day from '../pages/Day'

import Animals from '../pages/Animals'
import Musical from '../pages/Musical'
import Dream from '../pages/Dream'
import Unusual from '../pages/Unusual'

import Finish from '../pages/Finish'


import Result  from '../pages/Result'


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
       

       <Route path="/youdescription" component={YouDescription}/>
       <Route path="/confortable" component={Confortable}/>
       <Route path="/day" component={Day}/>

       <Route path="/animals" component={Animals}/>
       <Route path="/musical" component={Musical}/>
       <Route path="/dream" component={Dream}/>
       <Route path="/unusual" component={Unusual}/>

       <Route path="/fim" component={Result}/>
      
     </Switch>
    </BrowserRouter>
  )
}