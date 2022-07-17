import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [input, setInput] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleInput() {
    setInput((prevValue) => !prevValue);
  }

  return (
    <div>
      <form className="create-note">
        {input ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleInput}
          value={note.content}
          placeholder="Take a note..."
          rows={input ? 3 : 1}
        />
        <Zoom in={input}>
        <Fab onClick={submitNote}><AddCircleIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
