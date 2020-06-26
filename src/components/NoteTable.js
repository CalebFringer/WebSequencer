const Notes = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
const NoteTable = [];
const A440 = { name: 'a4', octave: 4, freq: 440 };
const magicNumber = Math.pow(2, 1/12);

function createNote(name, octave) {
    let newNote = {
        name: name, 
        octave: octave,
        fullName: name + octave,
        freq: null 
    }

    let distance = calcDistanceFromA(newNote);
    newNote.freq = A440.freq * Math.pow(magicNumber, distance);

    return newNote;
}

// Helper method for calculating frequency
// Returns an signed int representing the distance between note & A440
function calcDistanceFromA(note) {
    let index = Notes.indexOf(note.name);
    let distance = index - Notes.indexOf('a');
    let octaveCoeff = (note.octave - 4) * 12;
    distance += octaveCoeff

    return distance;
}

for (let octave=0; octave<9; octave++) {
    NoteTable[octave] = Notes.map(name => createNote(name, octave));
}

export default NoteTable;