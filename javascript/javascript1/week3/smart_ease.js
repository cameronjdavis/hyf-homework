let notes = [];

function saveNote(content, id) {
    notes.push({
        content: content,
        id: id,
    });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

function getNote(id) {
    return notes.find((note) => note.id == id) || null;
}

const firstNote = getNote(2);
console.log(firstNote);

function logOutNotesFormatted() {
    for (note of notes) {
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
    }
}

logOutNotesFormatted();
