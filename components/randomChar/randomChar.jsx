"use client"
import React, { useEffect, useState } from 'react'

const RandomChar = ({word,speed,fontSize}) => {
    const [text,setText]=useState(word)
    const randomChars = "_____()$%^*~@{}][-+".split('')
    //const randomChars = [">","&","*","_","?","<","£","@","-","~","+","!","{","}","[","]","_","_"]
    const lenRandomChars = randomChars.length  
   console.log(text,"here")
    useEffect(()=>{
        for (let i=0;i<lenRandomChars;i++){
            setTimeout(()=>{
            let RanL = Math.floor((Math.random()*lenRandomChars))
            let tempText = text.slice().split('')
            if (i%2===0){
                let newText= tempText.map((char,index)=> (index%2===0? randomChars[(RanL+index)%lenRandomChars] : word[index] ) )
                setText(newText.join(''))
                console.log("even")
            }else{
                let newText=tempText.map((char,index)=> ( (index%2!==0? randomChars[(RanL+index)%lenRandomChars] : word[index] )) )
                setText(newText.join(''))
                console.log("odd")
            }
            
            
            
            },(i+1)*speed)
        }
        setTimeout(()=>{
             setText((prev)=>word)
               console.log("done")
        },(lenRandomChars+1)*speed)
      
     
    },[])
  return (
    <div className='random-char' style={{fontSize:`${fontSize}px`}}>
       
        {text.split('').map((char,index)=> (<span>{char}</span>) )}
    </div>
  )
}

export default RandomChar