let NoteMainApp = () => {
  let notesTemplate = [
    {
      id: 1,
      title: "Note title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt aliquam sit eaque nam soluta assumenda maxime deleniti fuga cum eligendi recusandae alias, quibusdam optio sint facilis voluptatibus blanditiis adipisci?",
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
    <div className="my-4 px-4 border">
      {notesTemplate.length} Notes Available:
      {notesTemplate.map((note) => (
        <div key={note.id} className="p-4 border my-2 h-[20vh] overflow-y-hidden">
          <h1 className="border ">Subject: {note.title}</h1>
          <span>Note: {note.content}</span>
        </div>
      ))}
    </div>
  );
};

export default NoteMainApp;
