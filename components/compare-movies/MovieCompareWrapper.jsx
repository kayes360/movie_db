"use client";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CompareCard from "./CompareCard";
import EmptySlot from "./EmptySlot"; 
import { CompareActions } from "@/app/reducerActions";
import { ComparisonContext } from "@/app/context";
 

export default function MovieCompareWrapper() { 
const {state, dispatch} = useContext(ComparisonContext)
  const handleAddSlot = () => {
    dispatch({ type: CompareActions.ADD_SLOT });
  };
  const handleDeleteSlot = (id) => { 
    dispatch({type: CompareActions.DELETE_SLOT, payload: {id}})
   }
 

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Movies</h1>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          onClick={handleAddSlot}
        >
          Add Movie +
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {
            state.map((slot) => (
                slot?.movie 
                ? <CompareCard key={slot?.id} movie={slot?.movie} slotId={slot?.id}  /> 
                : <EmptySlot 
                    key={slot?.id} 
                    onDeleteSlot={() => handleDeleteSlot(slot?.id)}
                  slotId={slot?.id} 
                    />
                )
            )
        }
        {
            state.length === 0 && (<p>No Slot for comparison has created. Please create slot first</p>)
        }
      </div>
    </>
  );
}
