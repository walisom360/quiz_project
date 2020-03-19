import React from 'react'


import {Container,DivOptions,Card,Marked,Option,Background} from './styles'

import {FaCheck} from 'react-icons/fa'

import img from '../../assets/pone.png';

import piui from '../../assets/piui.jpeg'




export default function Task({history}){
  const marked = true


  function next(){
    history.push('/descriptionone')
  }
 

  return(
    <Container>


<Background banner={img}  />


<div style={{padding:80}}>
      <h1>Marque o brinquedo que vc brincava quando era kid !!!</h1>

 <DivOptions>
   {['A','B','C','D'].map(t =>(
     <Card onClick={next}>
       <img src={piui} alt="" />
       {/* {marked && <Marked><FaCheck  style={{marginRight:6}} color="#fff" size={20} /></Marked>} */}
   <Option>{t}</Option>
     </Card>
   ))}
   </DivOptions>
   </div> 

    </Container>
  )
}