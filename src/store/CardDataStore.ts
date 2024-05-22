import { CardData, TCard } from "@/data/carddata"
import { create } from "zustand";

type TCardStore={
    CardDataState:TCard[];
    setCardDataState:(CardDataState:TCard[])=> void;
}

 export const CardDataStore=create<TCardStore>((set)=>({
CardDataState:CardData,
setCardDataState:(CardDataState)=>set(()=>({
    CardDataState:CardDataState
}))
}))
 