import React from 'react'


import {Container,DivOptions,Card,Marked,Option,Background} from './styles'



import img from '../../assets/pone.png';

import {FaCheck} from 'react-icons/fa'

import piui from '../../assets/piui.jpeg'

export default function TasksNormal({history}){
  const marked = true


  function next(){
    history.push('/descriptionone')
  }
 

  return(
    <Container>

<Background banner={img}  />

<div style={{padding:80}}>
      <h1>Que tipo de coisas te agradam ?</h1>

 <DivOptions>
   {[{title:'A',question:"Qualquer coisa"},{title:'B',question:"Essa eu não sei"},{title:'C',question:"Tudo me agrada"},{title:'D',question:"Nada me Agrada"}].map(t =>(
     <Card onClick={next}>
        <Option>{t.title}</Option>
       
     <h3>{t.question}</h3>
  
     </Card>
   ))}
   </DivOptions>
   </div>

    </Container>
  )
}