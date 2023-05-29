import { ContextApp } from "."
import { ReactNode,useEffect,useState } from "react"
import { NoteType } from "."
import {v4 as uuid} from 'uuid'
import { toast } from "react-toastify"


type Props={
    children:ReactNode
}


export const ContextProvider=({children}:Props)=>{
    const [notes,setNotes]=useState<NoteType[] | []>([])
    const [stateModal,setStateModal]=useState<boolean>(false)

   

    
    const addNote=(data:NoteType)=>{
        setNotes([data,...notes])
        toast.success('Anotação criada')
    }

    const deleteNote=(id:string)=>{
       
        setNotes(notes.filter(item=>item.id !== id))
        toast.success('Anotação deletada')
        

    }
    const updateNote=(data:NoteType)=>{
        let dataId=notes.find(item=>item.id === data.id)
        dataId!.content=data.content
        dataId!.title=data.title
        toast.success('Anotação atualizada')
    }



    return <ContextApp.Provider value={{notes,addNote,deleteNote,updateNote,stateModal,setStateModal,}}>
       {children}
    </ContextApp.Provider>
}