function NoteList({ notes, editNote, deleteNote, hasSearch }) {

    if (notes.length === 0) {
        return <p className="empty"> {hasSearch ? "Notes not found..." : "No notes yet..."}</p>;
    }

    return (

        <div className="list">

            {notes.map((item) => (

                <div className="note" key={item.id}>

                    <h2 className="title">{item.title}</h2>

                    <p>{item.note}</p>

                    <button className="Btn editBtn" onClick={() => editNote(item.id)}>Edit</button>

                    <button className="Btn deleteBtn" onClick={() => deleteNote(item.id)}>Delete</button>
                </div>
            ))}

        </div>
    );
}

export default NoteList;