import React, { useState } from 'react'

import {useDispatch,useSelector} from 'react-redux'


import {nextQuestion,prevQuestion} from '../../store/modules/questions/actions'


export default function ListQuestions(){
   
  const dispatch = useDispatch()

  const index = useSelector(state => state.questions.index)

  const questions = useSelector(state => state.questions.data.questions)

  function next(){
    // if(index === 0){
    //   return
    // }
  dispatch(nextQuestion())
  }

  function prev(){
  //  if(index === questions[index].lenght){
  //    return
  //  }

  dispatch(prevQuestion())
 }



  return(
    <>
    <span>{questions[index].task}</span>
    <ul>
   {questions[index].perguntas.map(q => (
     <>
     
     <div>
      <input type="checkbox"  />
      <img style={{width:280,height:140}} src={q.photo} alt=""/>
     </div>
     </>
   ))}
   </ul>
   <div>
    <button onClick={prev}>{"<"}</button>
    <button onClick={next}>{">"}</button> 
   </div>
   </>
  )

}