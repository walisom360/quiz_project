import React from 'react'


import {Container,DivOptions,Card,Marked,Option,Background} from './styles'



import img from '../../assets/pone.png';

import {FaCheck} from 'react-icons/fa'

import piui from '../../assets/piui.jpeg'

export default function TasksNormal({history}){
  const marked = true


  function next(){
    history.push('/tasks')
  }
 

  return(
    <Container>

<Background banner={img}  />

<div style={{padding:80}}>
      <h1>Marque o brinquedo que vc brincava quando era kid !!!</h1>

 <DivOptions>
   {['A','B','C','D'].map(t =>(
     <Card onClick={next}>
        <Option>{t}</Option>
       
       <h3>Digite aqui o que vc quiser pode ser qualquer coisa</h3>
  
     </Card>
   ))}
   </DivOptions>
   </div>

    </Container>
  )
}