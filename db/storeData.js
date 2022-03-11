// require dependencies
const fs = require("fs");
const util = require("util");








// Delete request function
clearNote(id) {
    return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(keptNotes => this.write(keptNotes))
}