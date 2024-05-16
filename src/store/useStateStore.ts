import { create } from 'zustand'

type state={
    modal:boolean;
    setModal:(modal:boolean)=> void;
}
export const MenuStore =create<state>((set)=>({
    modal:true,
setModal:(newMenubar)=> set(()=>({modal:newMenubar}))
  })) 