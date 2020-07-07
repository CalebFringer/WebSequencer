const Notes = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
const A440 = { name: 'a', octave: 4, freq: 440 };
const magicNumber = Math.pow(2, 1/12);


class NoteTable {
    constructor(start, end) {
        let table = [];
        for (let octave=start; octave<end; octave++) {
            table[octave] = Notes.map(name => this.createNote(name, octave));
        }
        return table;
    }

    // Does exactly what it says
    createNote(name, octave) {
        let newNote = {
            name: name, 
            octave: octave,
            freq: null 
        }

        let distance = this.distanceHelper(newNote);
        newNote.freq = A440.freq * Math.pow(magicNumber, distance);

        return newNote;
    }

    // Helper method for calculating frequency
    // Returns an signed int representing the distance between note & A440
    distanceHelper(note) {
        let distance
        let index = Notes.indexOf(note.name);
        let octaveCoeff = (note.octave - A440.octave) * 12;
        
        return distance = octaveCoeff + index - Notes.indexOf('a');
    }
}

export default NoteTable;