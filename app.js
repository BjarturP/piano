const synth = new Tone.Synth().toDestination();
let isRecording = false;
let recordedTune = [];
let recordingStartTime;


const tunes = [
    {
        id: "0",
        name: "FÃ¼r Elise",
        tune: [
            { note: "E5", duration: "8n", timing: 0 },
            { note: "D#5", duration: "8n", timing: 0.25 },
            { note: "E5", duration: "8n", timing: 0.5 },
            { note: "D#5", duration: "8n", timing: 0.75 },
            { note: "E5", duration: "8n", timing: 1 },
            { note: "B4", duration: "8n", timing: 1.25 },
            { note: "D5", duration: "8n", timing: 1.5 },
            { note: "C5", duration: "8n", timing: 1.75 },
            { note: "A4", duration: "4n", timing: 2 },
            { note: "C4", duration: "8n", timing: 3 },
            { note: "E4", duration: "8n", timing: 3.25 },
            { note: "A4", duration: "8n", timing: 3.5 },
            { note: "B4", duration: "4n", timing: 3.75 },
            { note: "E4", duration: "8n", timing: 4.75 },
            { note: "G#4", duration: "8n", timing: 5 },
            { note: "B4", duration: "8n", timing: 5.25 },
            { note: "C5", duration: "4n", timing: 5.5 },
            { note: "E4", duration: "8n", timing: 6.5 },
            { note: "E5", duration: "8n", timing: 6.75 },
            { note: "D#5", duration: "8n", timing: 7 },
            { note: "E5", duration: "8n", timing: 7.25 },
            { note: "D#5", duration: "8n", timing: 7.5 },
            { note: "E5", duration: "8n", timing: 7.75 },
            { note: "B4", duration: "8n", timing: 8 },
            { note: "D5", duration: "8n", timing: 8.25 },
            { note: "C5", duration: "8n", timing: 8.5 },
            { note: "A4", duration: "4n", timing: 8.75 },
            { note: "C4", duration: "8n", timing: 9.75 },
            { note: "E4", duration: "8n", timing: 10 },
            { note: "A4", duration: "8n", timing: 10.25 },
            { note: "B4", duration: "4n", timing: 10.5 },
            { note: "E4", duration: "8n", timing: 11.5 },
            { note: "C5", duration: "8n", timing: 11.75 },
            { note: "B4", duration: "8n", timing: 12 },
            { note: "A4", duration: "4n", timing: 12.25 },
        ],
    },
    {
        id: "1",
        name: "The Godfather",
        tune: [
            { note: "G4", duration: "4n", timing: 0 },
            { note: "C5", duration: "4n", timing: 0.5 },
            { note: "D#5", duration: "4n", timing: 1 },
            { note: "D5", duration: "4n", timing: 1.5 },
            { note: "C5", duration: "4n", timing: 2 },
            { note: "D#5", duration: "4n", timing: 2.5 },
            { note: "C5", duration: "4n", timing: 3 },
            { note: "D5", duration: "4n", timing: 3.5 },
            { note: "C5", duration: "4n", timing: 4 },
            { note: "G#4", duration: "4n", timing: 4.5 },
            { note: "Bb4", duration: "4n", timing: 5 },
            { note: "G4", duration: "2n", timing: 5.5 },
            { note: "G4", duration: "4n", timing: 8 },
            { note: "C5", duration: "4n", timing: 8.5 },
            { note: "D#5", duration: "4n", timing: 9 },
            { note: "D5", duration: "4n", timing: 9.5 },
            { note: "C5", duration: "4n", timing: 10 },
            { note: "D#5", duration: "4n", timing: 10.5 },
            { note: "C5", duration: "4n", timing: 11 },
            { note: "D5", duration: "4n", timing: 11.5 },
            { note: "C5", duration: "4n", timing: 12 },
            { note: "G4", duration: "4n", timing: 12.5 },
            { note: "F#4", duration: "4n", timing: 13 },
            { note: "F4", duration: "2n", timing: 13.5 },
            { note: "F4", duration: "4n", timing: 16 },
            { note: "G#4", duration: "4n", timing: 16.5 },
            { note: "B4", duration: "4n", timing: 17 },
            { note: "D5", duration: "2n", timing: 17.5 },
            { note: "F4", duration: "4n", timing: 20 },
            { note: "G#4", duration: "4n", timing: 20.5 },
            { note: "B4", duration: "4n", timing: 21 },
            { note: "C5", duration: "2n", timing: 21.5 },
            { note: "C4", duration: "4n", timing: 24 },
            { note: "D#4", duration: "4n", timing: 24.5 },
            { note: "Bb4", duration: "4n", timing: 25 },
            { note: "G#4", duration: "4n", timing: 25.5 },
            { note: "G4", duration: "4n", timing: 26 },
            { note: "Bb4", duration: "4n", timing: 26.5 },
            { note: "G#4", duration: "4n", timing: 27 },
            { note: "G#4", duration: "4n", timing: 27.5 },
            { note: "G4", duration: "4n", timing: 28 },
            { note: "G4", duration: "4n", timing: 28.5 },
            { note: "B3", duration: "4n", timing: 29 },
            { note: "C4", duration: "2n", timing: 29.5 },
        ],
    },
    {
        id: "3",
        name: "Seven Nation Army",
        tune: [
            { note: "E5", duration: "4n", timing: 0 },
            { note: "E5", duration: "8n", timing: 0.5 },
            { note: "G5", duration: "4n", timing: 0.75 },
            { note: "E5", duration: "8n", timing: 1.25 },
            { note: "E5", duration: "8n", timing: 1.75 },
            { note: "G5", duration: "4n", timing: 1.75 },
            { note: "F#5", duration: "4n", timing: 2.25 },
        ],
    },
];

function playNote(note, duration = '8n') {
    Tone.start().then(() => {
        synth.triggerAttackRelease(note, duration);
        if (isRecording) {
            const now = Date.now();
            const noteRecordedAt = now - recordingStartTime;
            recordedTune.push({ note: note, duration: duration, timing: noteRecordedAt / 1000 }); // timing converted to seconds
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const keys = [
        { id: 'c4', note: 'C4' },
        { id: 'c#4', note: 'C#4' },
        { id: 'd4', note: 'D4' },
        { id: 'd#4', note: 'D#4' },
        { id: 'e4', note: 'E4' },
        { id: 'f4', note: 'F4' },
        { id: 'f#4', note: 'F#4' },
        { id: 'g4', note: 'G4' },
        { id: 'g#4', note: 'G#4' },
        { id: 'a4', note: 'A4' },
        { id: 'bb4', note: 'A#4' },
        { id: 'b4', note: 'B4' },
        { id: 'c5', note: 'C5' },
        { id: 'c#5', note: 'C#5' },
        { id: 'd5', note: 'D5' },
        { id: 'd#5', note: 'D#5' },
        { id: 'e5', note: 'E5' },
    ];

    keys.forEach(key => {
        const element = document.getElementById(key.id);
        if (element) {
            element.addEventListener('click', () => playNote(key.note));
        }
    });

    window.addEventListener('keydown', (event) => {
        let note = null;
        switch (event.key) {
            case 'a': note = "C4"; break;
            case 'w': note = "C#4"; break;
            case 's': note = "D4"; break;
            case 'e': note = "D#4"; break;
            case 'd': note = "E4"; break;
            case 'f': note = "F4"; break;
            case 't': note = "F#4"; break;
            case 'g': note = "G4"; break;
            case 'y': note = "G#4"; break;
            case 'h': note = "A4"; break;
            case 'u': note = "Bb4"; break;
            case 'j': note = "B4"; break;
            case 'k': note = "C5"; break;
            case 'o': note = "C#5"; break;
            case 'l': note = "D5"; break;
            case 'p': note = "D#5"; break;
            case ';': note = "E5"; break;
        }

        if (note) {
            playNote(note);
        }
    });

    document.getElementById('recordbtn').addEventListener('click', () => {
        isRecording = true;
        recordedTune = [];
        recordingStartTime = Date.now(); // Set the recording start time
    });

    document.getElementById('stopbtn').addEventListener('click', () => {
        isRecording = false; // Stop the recording
    });

    document.getElementById('playRecording').addEventListener('click', () => {
        if (!recordedTune.length) {
            alert("No recording to play.");
            return;
        }

        // Logic to play back the recorded tune
        recordedTune.forEach(noteObj => {
            setTimeout(() => {
                playNote(noteObj.note, noteObj.duration);
            }, noteObj.timing * 1000); // Convert timing back to milliseconds for setTimeout
        });
    });
});


function playSelectedTune() {
    let selectedTuneName = document.getElementById('tunesDrop').options[document.getElementById('tunesDrop').selectedIndex].text;
    let selectedTune = tunes.find(tune => tune.name === selectedTuneName);

    if (!selectedTune) {
        console.error('Selected tune not found:', selectedTuneName);
        return;
    }

    let noteIndex = 0;
    let tuneNotes = selectedTune.tune;

    function playNextNote() {
        if (noteIndex < tuneNotes.length) {
            let noteObj = tuneNotes[noteIndex++];
            let noteDuration = Tone.Time(noteObj.duration).toMilliseconds();
            let noteDelay = noteIndex > 0 ? (noteObj.timing * 1000) - (tuneNotes[noteIndex - 2]?.timing * 1000 || 0) : 0;

            setTimeout(() => {
                playNote(noteObj.note, noteObj.duration);
                playNextNote();
            }, noteIndex === 1 ? 0 : noteDuration + noteDelay);
        }
    }

    playNextNote();
}

document.addEventListener('DOMContentLoaded', () => {
});

document.getElementById('tunebtn').addEventListener('click', playSelectedTune);