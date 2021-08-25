import React, {useState} from 'react'
import Apple from '../Apple/Apple'
import ShakeButton from '../ShakeButton/ShakeButton'
import './Tree.css'


function Tree(props) {

    const [shaking, setshake] = useState(false)
   
    function timeout(delay) {
       setTimeout(delay)
    }
    
    const apple =()=>{
        console.log("aaaaa")
    }
    const shakeTree = () =>{
        setshake(true);
        setTimeout(()=>setshake(false),3000);
        timeout(3000)
        apple()
    }
    
    return (
        <div>
            <div className="containerTree">
                    <img src="images/tree.png" alt="" className={`treeImg ${shaking ? 'shake' : null }`}  />
            </div>
           
             <ShakeButton shake = {shakeTree} /> 
        </div>
    )
}

export default Tree
