import { db } from "../../Components/Firebase"
import { collection, addDoc } from "firebase/firestore";
import { Alert } from "@mui/material";

export const loadProducts = ()=>{

    return (dispatch,getState)=>{


        try {
             addDoc(collection(db ,"products"),{
    
            })
          } 
          catch (err) {
            Alert(err.message)
          }
    }
}