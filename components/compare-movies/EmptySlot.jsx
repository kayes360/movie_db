'use client'
import React, { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";
import { createPortal } from "react-dom";

export default function EmptySlot({onDeleteSlot, slotId}) {

  const [showModal, setShowModal] = useState(false);
 
  return (
    <div>
      <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
        <div className="flex justify-end mb-4">
          <button className="text-gray-400 hover:text-white" onClick={onDeleteSlot}>
            Delete Slot ✕
          </button>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <button
             onClick={() => setShowModal(true)}
            className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            Select Movie
          </button>
        </div>
        {showModal && createPortal(
        <SearchModal onClose={() => setShowModal(false)} slotId={slotId}/>,
        document.body
      )}
      </div>
    </div>
  );
}
