import { useState } from "react";
import Note from "./Note";

let NoteMainApp = () => {
  const [focusNote, setFocusNote] = useState(false);
  const [focusedNote, setFocusedNote] = useState(null);
  let notesTemplate = [
    {
      id: 1,
      title: "Note title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.blanditiis adipisci?",
    },
    {
      id: 2,
      title: "Note title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias, quibusdam optio sint facilis voluptatibus blanditiis adipisci?",
    },
    {
      id: 3,
      title: "Note title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias, quibusdam optio sint facilis voluptatibus blanditiis adipisci?",
    },
    {
      id: 4,
      title: "Note title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias, quibusdam optio sint facilis voluptatibus blanditiis adipisci?",
    },
    {
      id: 5,
      title: "Note title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias, quibusdam optio sint facilis voluptatibus blanditiis adipisci?",
    },
  ];
  return (
    <>
      <div className="my-4 p-4 border bg-slate-50 max-w-screen-xl mx-auto">
        <div className="flex bg-white p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
        </svg>
<input type="text" className="w-full border" />
        </div>
      </div>
      <div className="my-4 px-4 border max-w-screen-xl mx-auto">
        <div>
          {notesTemplate.length} <i className="text-[#999999]">Saved</i> Notes
          Available:
        </div>
        <div className="grid grid-cols-2">
          {notesTemplate.map((note) => (
            <div key={note.id}>
              <Note noteData={note} />
            </div>
          ))}
        </div>
        {focusNote ? <Note noteData={notesTemplate[focusedNote]} /> : <></>}
      </div>
    </>
  );
};

export default NoteMainApp;

{
  /* <div
className="p-4 border my-2 h-[20vh] overflow-y-hidden"
onClick={() => {
  setFocusNote(true);
  setFocusedNote(note.id);
}}
>
Note {note.id}
<h1 className=" text-xl">{note.title}</h1>
<span>Note: {note.content}</span>
</div> */
}
