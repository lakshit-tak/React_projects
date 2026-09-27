function NoteForm({ title, note, handleTitleChange, handleChange, addNote }) {

    return (

        <div className="input-box">

            <input className="input" type="text" placeholder="Note title..." value={title} onChange={handleTitleChange} />

            <textarea className="input" type="text" placeholder="Write note..." value={note} onChange={handleChange} />

            <button className="addBtn Btn" onClick={addNote}>Add Note</button>

        </div>
    );
}

export default NoteForm;