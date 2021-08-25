import React, { useState } from 'react'
import './Apple.css'
import ShakeButton from '../ShakeButton/ShakeButton'
import Tree from '../Tree/Tree'
function Apple() {

    const [shakeApple, setShakeApple] = useState(false)

    const shakeApples = () =>{
        setShakeApple(true);
        setTimeout(()=>setShakeApple(false),3000);
    }
// render(){  ayrı ayrı delay vermek
//     const { items } = this.props;
//     let delay_index = -1;
//     let delay_jump = 100;
//     return (
//         <TransitionGroup>
//             items.map((item,index) => { 
//                 delay_index += offer.isNew ? 1 : 0;
//                 const delay = Math.max(0, delay_index*100);

//                 return (
//                     <CSSTransition
//                         key={item.id}
//                         timeout={1000 + delay}
//                         classNames="fade">
//                             <ItemPreview
//                                 item={item} 
//                                 style={{transitionDelay: `${delay}ms`}} />             
//                     </CSSTransition>
//                 )
//             })
//         </TransitionGroup>
//     )
// }
    return (
        <div>
            <Tree fall = {shakeApples}/>
            <div className="containerApple">
                    <img src="images/apple.png" alt="" className={`appleImg1 ${shakeApple ? 'shakeAppl' : null }`}/>
                    <img src="images/apple.png" alt="" className={`appleImg2 ${shakeApple ? 'shakeAppl' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg3 ${shakeApple ? 'shakeAppl' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg4 ${shakeApple ? 'shakeAppl' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg5 ${shakeApple ? 'shakeAppl' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg6 ${shakeApple ? 'shakeAppl' : null }`} />
                    <img src="images/apple.png" alt="" className={`appleImg7 ${shakeApple ? 'shakeAppl' : null }`} />
            </div>
           
        </div>
    )
}

export default Apple
