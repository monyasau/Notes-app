import { useEffect, useState } from "react";

let Note = ({ noteData }) => {
  let stringifiedNoteData = JSON.stringify(noteData);
  let deStringifiedNoteData = JSON.parse(localStorage.getItem(`data${noteData.id}`))
  const [saved,setSaved]=useState(noteData.id)

  useEffect(() => {
    deStringifiedNoteData && noteData.content==deStringifiedNoteData.content?
          setSaved("saved")
        :
        setSaved("Unsaved")
  }, [saved])
 
  
  return (
    <>
      {/* <div
          aria-label="backdrop"
          className=" fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] dark:bg-slate-900/80"
        ></div>
        <div key={noteData.id} className="p-4 z-50 top-0 fixed border my-2  bg-gray-300 w-[90%] mx-auto overflow-y-hidden">
            {noteData.id}
        <h1 className=" text-xl">{noteData.title}</h1>
        <span>Note: {noteData.content}</span>
      </div> */}

      <div
        className="p-4 overflow-hidden border h-[150px] my-2 "
        // onClick={() => {
        //   setFocusNote(true);
        //   setFocusedNote(note.id);
        // }}
      >
        <div className="flex gap-2 justify-between items-center" aria-label="controls">
        <button
          onClick={() => {
            localStorage.setItem(`data${noteData.id}`, stringifiedNoteData);
            setSaved(true)
          }}
          className="border hover:bg-purple-50  py-2 px-8 "
        >
          Save
        </button>
          {/* {deStringifiedNoteData && noteData.content==deStringifiedNoteData.content?
          "lldl"
        :
        saved.toString()} */}
        {
saved
        }
        <button
          onClick={() => {
            localStorage.removeItem(`data${noteData.id}`, stringifiedNoteData);
            setSaved(false)

          }}
          className="border hover:bg-purple-50 py-2 px-8 "
        >

          Delete
        </button>
        
        {/* Note {noteData.id} */}

        </div>
        <h1 className=" text-xl">{noteData.title}</h1>
        <span className="" title="preview">Note: {noteData.content.length>100?
        noteData.content.substring(0,99)+"......."
        :
        noteData.content}</span>
        
      </div>
    </>
  );
};

export default Note;
