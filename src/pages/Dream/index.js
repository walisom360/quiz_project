import React,{useState, useEffect} from 'react'

import { parseISO, isBefore } from 'date-fns';


import img from '../../assets/pone.png';

import {Container,DivButton,ButtonNext,Background} from './styles'

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
      history.push('/unusual')
    }

    return 
  
  }

  function nextInput(e){
    if (e.key === 'Enter' && name.length > 0) {
      history.push('/unusual')
    }
    return
  }

  const date = '2018-04-01 18:00:00';
  const parsedDate = parseISO(date);
  
  const past = isBefore(parsedDate, new Date())

  console.log(parsedDate,past)

  
  return(
   <Container>
    

     <Background banner={img}  />

  <div style={{padding:80}}>
     <h1>Algum sonho louco a realizar?</h1>
   
   <textarea style={{width:'700px'}}  value={name} onKeyDown={nextInput} onChange={e => setName(e.target.value)} placeholder="Digite Aqui ...." />   
 
  {appearButton && <DivButton>
    <ButtonNext onClick={next}>
          <p>OK</p>
          <FaCheck  style={{marginRight:6}} color="#fff" size={20} />
    </ButtonNext>
    <p>Enviar</p>
   </DivButton>}

   </div>

   </Container>
  )
}