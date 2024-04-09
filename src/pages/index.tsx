import { useEffect, useState } from "react";
import INote from "@/interfaces/INote";
import NoteFormComponent from "@/components/NoteFormComponent";
import NoteListComponent from "@/components/NoteListComponent";
import NoteComponent from "@/components/NoteComponent";

export default function Home() {

  const [showNoteForm, setShowNoteForm] = useState<boolean>(false);

  const [openNote, setOpenNote] = useState<INote | null>(null);
  const [notes, setNotes] = useState<Array<INote>>([]);

  useEffect(() => {
    const loadNotes = () => {
      try {
        const notes = localStorage.getItem("notes");
        if (notes) {
          setNotes(JSON.parse(notes));
        }
      } catch(err) {
        console.log(err)
      }
    }
    loadNotes();
  }, []);

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto py-8">
      <nav className="bg-zinc-800 w-full p-4 rounded-md mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white uppercase">Notes</h1>
          <button
            className="px-4 py-2 bg-zinc-700 text-white rounded-md"
            onClick={() => setShowNoteForm(!showNoteForm)}
          >
            {showNoteForm ? "Show Notes" : "Create Note"}
          </button>
        </div>
      </nav>
      {showNoteForm && <NoteFormComponent setNotes={setNotes} notes={notes} />}
      {!showNoteForm && !openNote && <NoteListComponent notes={notes} setOpenNote={setOpenNote} />}
      {!showNoteForm && openNote && <NoteComponent note={openNote} notes={notes} setNotes={setNotes} setActiveNote={setOpenNote} />}
    </div>
  );
}
