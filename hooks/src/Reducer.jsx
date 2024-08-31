import React, { useReducer } from 'react'

const reducer = (state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count : state.count+1 , showText: state.showText};

            case "toggleSwitch":
                return {count:state.count , showText:!state.showText};

                default:
                    return state;
    }
}

function Reducer() {
 const [state,dispatch] = useReducer(reducer,{count:0,showText:true});

  return (
<>
<h1>USE REDUCER You clicked {state.count}</h1>
<button 
    onClick={()=>{dispatch({type:"INCREMENT"})
                  dispatch({type:"toggleSwitch"})}}
>Click me </button>
<p>When you clicks even times it will display something</p>
{state.showText && <h1>Hooray ! YOU CLICKED EVEN TIMES</h1>}
</>
  )
}

export default Reducer