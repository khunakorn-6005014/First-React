import React, { useState, useReducer } from "react"
import "../../styles.css";

interface ActionInterface {
    type: string,
    payload: string[]
}

const TodosComponent = () => {

    const initState: string[] = []
    const [state, dispatch] = useReducer(reducerFunction, initState)

    function reducerFunction(prevState: string[], action: ActionInterface): string[] {
        switch(action.type) {
            case "ADD":
                alert(prevState)//
                return ['reactjs','angular','javascript','babel']
            case "REMOVE":
                alert(prevState)
                return ['reactjs','angular']
            default:
                return []
        }
    }

    return (
        <>
            {
                (state as string[]) && ((state as string[]).map(x => (<div>{x}</div>)))
            }
            <input type="button" value="add" onClick={() => dispatch({type: 'ADD', payload: []})}/>
            <input type="button" value="remove" onClick={() => dispatch({type: 'REMOVE', payload: []})}/>
        </>
    )
}

export default TodosComponent
