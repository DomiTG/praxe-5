import INote from "@/interfaces/INote";

export  default function NoteComponent({ note, notes, setNotes, setActiveNote }: { note: INote, notes: Array<INote>, setNotes: any, setActiveNote: any }) {

    const deleteNote = () => {
        const newNotes = notes.filter((n: INote) => n.id !== note.id);
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setActiveNote(null);
    }

    return(
        <div className="bg-zinc-800 p-4 rounded-md mb-4 min-w-full">
            <h2 className="text-xl font-bold text-white">{note.title}</h2>
            <p className="text-white text-xs py-2">Created at: {new Date(note.date).toDateString()}</p>
            <hr className="mb-4 border-zinc-700" />
            <p className="text-white">{note.content}</p>  
            <hr className="mt-4 border-zinc-700" />
            <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-zinc-700 text-white rounded-md ml-4 hover:bg-zinc-600" onClick={deleteNote}>Delete Note</button>
            </div>      
        </div>
    )
}