import {useContext} from 'react'
import myContext from './context'

function D() {
    const contextData = useContext(myContext)
  return (
    <div style={{color:"red"}}>
        
        Data is A in D : {contextData}
    </div>
  )
}

export default D