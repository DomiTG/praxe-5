import INote from "@/interfaces/INote";

export default function NoteListComponent({ notes, setOpenNote }: { notes: Array<INote>, setOpenNote: any }) {

    return(
        <table className="w-full bg-zinc-800 p-4 rounded-md mb-4">
            <thead>
                <tr>
                    <th className="text-white">Title</th>
                    <th className="text-white">Date</th>
                </tr>
            </thead>
            <tbody>
                {notes.map((note: INote) => (
                    <tr key={note.id} className="border-b border-zinc-700 hover:bg-zinc-700 hover:bg-opacity-50 cursor-pointer text-center" onClick={() => setOpenNote(note)}>
                        <td className="text-white">{note.title}</td>
                        <td className="text-white">{new Date(note.date).toDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}