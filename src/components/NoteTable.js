const Notes = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
const NoteTable = [];
const A440 = { name: 'a', octave: 4, freq: 440 };
const magicNumber = Math.pow(2, 1/12);

for (let octave=0; octave<9; octave++) {
    NoteTable[octave] = Notes.map(name => createNote(name, octave));
}
//console.log(NoteTable);

function createNote(name, octave) {
    let newNote = {
        name: name, 
        octave: octave,
        freq: null 
    }

    let distance = distanceHelper(newNote);
    newNote.freq = A440.freq * Math.pow(magicNumber, distance);

    return newNote;
}

// Helper method for calculating frequency
// Returns an signed int representing the distance between note & A440
function distanceHelper(note) {
    let distance
    let index = Notes.indexOf(note.name);
    let octaveCoeff = (note.octave - A440.octave) * 12;
    
    return distance = octaveCoeff + index - Notes.indexOf('a');
}


export default NoteTable;