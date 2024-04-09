import INote from "@/interfaces/INote";

export default function NoteFormComponent({ setNotes, notes }: { setNotes: any, notes: Array<INote> }) {

    const createNote = (e: any) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const date = new Date();
        const id = Math.random().toString(36).substr(2, 9);
        const newNote = { id, title, content, date };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        e.target.title.value = "";
        e.target.content.value = "";
    }

    return(
        <div className="w-full bg-zinc-800 p-4 rounded-md mb-4">
            <h2 className="text-xl font-bold text-white mb-4">Create Note</h2>
            <form onSubmit={createNote}>
                <div className="mb-4">
                    <label htmlFor="title" className="text-white">Title</label>
                    <input type="text" id="title" name="title" className="w-full p-2 bg-zinc-700 text-white rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="text-white">Content</label>
                    <textarea id="content" name="content" className="w-full p-2 bg-zinc-700 text-white rounded-md" />
                </div>
                <button type="submit" className="px-4 py-2 bg-zinc-700 text-white rounded-md">Create Note</button>
            </form>
        </div>
    )
}