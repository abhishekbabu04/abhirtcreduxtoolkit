import { createSlice } from "@reduxjs/toolkit";

 

export let cartSlice=createSlice(
    {
        name:"counter",
        initialState:{
            cart:localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : [],       
         },
         reducers:{
            addTocart:(state,reqData)=>{
                let {cartObj}=reqData.payload;
                state.cart=[cartObj, ...state.cart]
                localStorage.setItem("CART",JSON.stringify(state.cart))

            },
            deleteCart:(state,reqData)=>{
               let {id}=reqData.payload;
               state.cart=state.cart.filter((obj)=>obj.id!==id)
               localStorage.setItem("CART",JSON.stringify(state.cart))
            },
            changeQty: (state,reqData) =>{
                let {id,finalQty}=reqData.payload;
                state.cart=state.cart.filter((obj)=> {
                    if(obj.id==id){
                        obj['qty']=finalQty
                    }
                    return  obj
                })
                localStorage.setItem("CART",JSON.stringify(state.cart))
            },
         }
    }
)

export const { addTocart, deleteCart,changeQty } = cartSlice.actions
export default cartSlice.reducer