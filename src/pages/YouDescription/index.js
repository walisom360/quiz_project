import React,{useState, useEffect} from 'react'

import { parseISO, isBefore } from 'date-fns';


import users from '../../assets/users.png'

import {Container,DivButton,ButtonNext} from './styles'

import {FaCheck} from 'react-icons/fa'


export default function InitialPate(  {history}){
  const [appearButton,setAppearButton] = useState(false)

  const [name,setName] = useState('')

  useEffect(()=>{
   if(name.length > 0){
     setAppearButton(true)
   }else{
     setAppearButton(false)
   }
  },[name])


  function next(){
    if(name.length > 0){
      history.push('/taskNormal')
    }

    return 
  
  }

  function nextInput(e){
    if (e.key === 'Enter' && name.length > 0) {
      history.push('/taskNormal')
    }
    return
  }

  const date = '2018-04-01 18:00:00';
  const parsedDate = parseISO(date);
  
  const past = isBefore(parsedDate, new Date())

  console.log(parsedDate,past)

  
  return(
   <Container>
     <h1>Como você se definiria?</h1>
   
     <textarea  value={name} onKeyDown={nextInput} onChange={e => setName(e.target.value)} placeholder="Se descreva melhor ...." />
 
  {appearButton && <DivButton>
    <ButtonNext onClick={next}>
          <p>OK</p>
          <FaCheck  style={{marginRight:6}} color="#fff" size={20} />
    </ButtonNext>
    <p>Enviar</p>
   </DivButton>}

   </Container>
  )
}