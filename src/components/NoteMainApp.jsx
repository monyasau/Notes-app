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
      <div className="my-4 px-4 border max-w-screen-xl mx-auto">
        <span>Add a new note</span>
        <div></div>
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
