let Note = ({ noteData }) => {
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
        className="p-4 border my-2 min-h-[200px] max-h-[200px] overflow-y-scroll"
        // onClick={() => {
        //   setFocusNote(true);
        //   setFocusedNote(note.id);
        // }}
      >
        <button
          onClick={() => {
            let stringifiedNoteData = JSON.stringify(noteData);
            localStorage.setItem(`data${noteData.id}`, stringifiedNoteData);
          }}
          className="border p-2 mr-3"
        >
          Add to local storage
        </button>
        Note {noteData.id}
        <h1 className=" text-xl">{noteData.title}</h1>
        <span>Note: {noteData.content}</span>
      </div>
    </>
  );
};

export default Note;
