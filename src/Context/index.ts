import { createContext,useContext } from "react"

export type NoteType={
    id:string,
    title:string,
    content:string,
  
}





export type ContextType={
    stateModal:boolean,
    setStateModal:(state:boolean)=>void,
    notes:NoteType[] | null,
    addNote:(data:NoteType)=>void,
    deleteNote:(id:string)=>void,
    updateNote:(data:NoteType)=>void
}

export const ContextApp=createContext<ContextType>({
  
    stateModal:false,
    setStateModal:()=>{},
    notes:[],
    addNote:()=>{},
    deleteNote:()=>{},
    updateNote:()=>{}

})

export const useContextApp=()=>useContext(ContextApp)