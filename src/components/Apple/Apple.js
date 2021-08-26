import React, { useState } from 'react'
import './Apple.css'
import Tree from '../Tree/Tree'

function Apple(props) {

    const [shakeApple1, setShakeApple1] = useState(false)
    const [shakeApple2, setShakeApple2] = useState(false)
    const [shakeApple3, setShakeApple3] = useState(false)

    const shakeApples = () =>{
         setShakeApple1(true); setShakeApple2(true); setShakeApple3(true);
         setTimeout(()=>setShakeApple1(false),4000); 
         setTimeout(()=>setShakeApple2(false),5000);
         setTimeout(()=>setShakeApple3(false),6000);
         setTimeout(()=>{
             props.visible()}, 4000);
         
    }

    return (
        <div>
           <Tree fall ={shakeApples}/>
           
            <div className="containerApple">
                    <img src="images/apple.png" alt="" className={`appleImg1 `}/>
                    <img src="images/apple.png" alt="" className={`appleImg2 `} />
                    <img src="images/apple.png" alt="" className={`appleImg3 ${shakeApple1 ? 'fallAppl1' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg4 ${shakeApple2 ? 'fallAppl2' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg5 `} />
                    <img src="images/apple.png" alt="" className={`appleImg6 `} />
                    <img src="images/apple.png" alt="" className={`appleImg7 ${shakeApple3 ? 'fallAppl3' : null }`} />
            </div>
       
        </div>
    )
}

export default Apple
