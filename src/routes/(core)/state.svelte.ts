
type NoteType = {
  title: string;
  checked: boolean;
  date: string;
  id: string;
};

export class createNoteState {
  notes: NoteType[] = $state([])
  newNote = $state("")

  addNote = (note: NoteType) => {
    this.notes.push(note)
  }

  removeNote = (id: string) => {
    this.notes = this.notes.filter((i) => i.id !== id);
  };
}
