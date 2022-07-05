const notesContainer = document.getElementById("app")
const addNoteButton = notesContainer.querySelector(".add-note")

Array.from(getNotes()).forEach(note => {
    const noteElement = createNoteElement(note.id, note.content)
    notesContainer.insertBefore(noteElement, addNoteButton)
})

addNoteButton.addEventListener("click", () => addNote())

function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]")
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes))
}

function createNoteElement(id, content){
    const element = document.createElement("textarea")

    element.classList.add("note")
    element.value = content
    element.placeholder = "Empty Sticky Note"

    element.addEventListener("change", () => {
        updateNote(id, element.value)
    })

    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Delete note?")

        if(doDelete) deleteNote(id, element)
    })

    return element
}

function addNote(){
    const notes = Array.from(getNotes())
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    }
    const noteElement = createNoteElement(noteObject.id, noteObject.content)
    notesContainer.insertBefore(noteElement, addNoteButton)

    notes.push(noteObject)
    saveNotes(notes)
}

function updateNote(id, newContent){
    const note = Array.from(getNotes())
    const targetNote = note.filter(note => note.id == id)[0]

    targetNote.content = newContent
    saveNotes(note)
}

function deleteNote(id, element){
    const notes = Array.from(getNotes()).filter(note => note.id != id)

    saveNotes(notes)
    notesContainer.removeChild(element)
}