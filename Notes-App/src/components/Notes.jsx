import { useEffect, useState } from "react";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";


function Notes() {

    const [search, setSearch] = useState("");

    const [title, setTitle] = useState("");

    const [note, setNote] = useState("");

    const [notes, setNotes] = useState(() => {

        const saveNotes = localStorage.getItem("notes");

        return saveNotes ? JSON.parse(saveNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleSearch(e) {

        setSearch(e.target.value);
    }

    function handleTitleChange(e) {

        setTitle(e.target.value);
    }

    function handleChange(e) {

        setNote(e.target.value);
    }

    function addNote() {

        if (title.trim() === "" || note.trim() === "") {
            return;
        }

        const newNote = {

            id: Date.now(),
            title: title,
            note: note
        };

        setNotes([...notes, newNote]);

        setTitle("");

        setNote("");
    }

    function deleteNote(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (confirmDelete) {

            const newNotes = notes.filter((note) => {

                return note.id !== id;
            });

            setNotes(newNotes);
        }
    }

    function editNote(id) {

        const noteToEdit = notes.find((note) => {

            return note.id === id;
        });



        const newTitle = prompt("Edit your title", noteToEdit.title);

        if (newTitle === null || newTitle.trim() === "") {
            return;
        }

        const newNote = prompt("Edit your note", noteToEdit.note);

        if (newNote === null || newNote.trim() === "") {
            return;
        }

        const newNotes = notes.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    title: newTitle,
                    note: newNote
                };
            }

            return note;
        });
        setNotes(newNotes);
    }

    const filterNotes = notes.filter((item) => {

        return (

            item.title.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (

        <div className="container">

            <div className="notes">

                <h1>📝 Notes App</h1>

                <NoteForm
                    title={title}
                    note={note}
                    handleTitleChange={handleTitleChange}
                    handleChange={handleChange}
                    addNote={addNote}
                />

                <input className="input" type="text" placeholder="🔍Search notes" value={search} onChange={handleSearch} />

                <p>Total Notes : {notes.length}</p>

                <NoteList
                    notes={filterNotes}
                    editNote={editNote}
                    deleteNote={deleteNote}
                    hasSearch={search.trim() !== ""}
                />

            </div>
        </div>
    );
}
export default Notes;