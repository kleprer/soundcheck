import React, { useState } from 'react'
const Piano = ({melody}) => {

  let keynotes = melody;
  let [currentNote, setCurrentNote] = useState(0);
  let [notesPlayed, setNotesPlayed] = useState([]);

  const start = (note) => {
    window.focus();
    if (note == keynotes[currentNote]) {
      setCurrentNote(currentNote + 1);
      setNotesPlayed(...notesPlayed, note);
      
    }
    console.log(keynotes[currentNote], notesPlayed, currentNote, note);
    if (note === 'D1#') new Audio("https://cdn.freesound.org/previews/573/573483_2214720-lq.mp3").play();
    if (note === 'E1') new Audio("https://cdn.freesound.org/previews/573/573495_2214720-lq.mp3").play();
    if (note === 'F1') new Audio("https://cdn.freesound.org/previews/573/573458_2214720-lq.mp3").play();
    if (note === 'F1#') new Audio("https://cdn.freesound.org/previews/573/573475_2214720-lq.mp3").play();
    if (note === 'G1') new Audio("https://cdn.freesound.org/previews/573/573474_2214720-lq.mp3").play();
    if (note === 'G1#') new Audio("https://cdn.freesound.org/previews/573/573473_2214720-lq.mp3").play();
    if (note === 'A1') new Audio("https://cdn.freesound.org/previews/573/573480_2214720-lq.mp3").play();
    if (note === 'A1#') new Audio("https://cdn.freesound.org/previews/573/573479_2214720-lq.mp3").play();
    if (note === 'B1') new Audio("https://cdn.freesound.org/previews/573/573478_2214720-lq.mp3").play();
    if (note === 'C2') new Audio("https://cdn.freesound.org/previews/573/573477_2214720-lq.mp3").play();
    if (note === 'C2#') new Audio("https://cdn.freesound.org/previews/573/573482_2214720-lq.mp3").play();
    if (note === 'D2') new Audio("https://cdn.freesound.org/previews/573/573481_2214720-lq.mp3").play();
    if (note === 'D2#') new Audio("https://cdn.freesound.org/previews/573/573466_2214720-lq.mp3").play();
    if (note === 'E2') new Audio("https://cdn.freesound.org/previews/573/573464_2214720-lq.mp3").play();
    if (note === 'F2') new Audio("https://cdn.freesound.org/previews/573/573463_2214720-lq.mp3").play();
    if (note === 'F2#') new Audio("https://cdn.freesound.org/previews/573/573470_2214720-lq.mp3").play();
    if (note === 'G2') new Audio("https://cdn.freesound.org/previews/573/573469_2214720-lq.mp3").play();
    if (note === 'G2#') new Audio("https://cdn.freesound.org/previews/573/573468_2214720-lq.mp3").play();
    if (note === 'A2') new Audio("https://cdn.freesound.org/previews/573/573467_2214720-lq.mp3").play();
    if (note === 'A2#') new Audio("https://cdn.freesound.org/previews/573/573472_2214720-lq.mp3").play();
    if (note === 'B2') new Audio("https://cdn.freesound.org/previews/573/573471_2214720-lq.mp3").play();
    if (note === 'C3') new Audio("https://cdn.freesound.org/previews/573/573439_2214720-lq.mp3").play();
    if (note === 'C3#') new Audio("https://cdn.freesound.org/previews/573/573440_2214720-lq.mp3").play();
    if (note === 'D3') new Audio("https://cdn.freesound.org/previews/573/573438_2214720-lq.mp3").play();
    if (note === 'D3#') new Audio("https://cdn.freesound.org/previews/573/573443_2214720-lq.mp3").play();
    if (note === 'E3') new Audio("https://cdn.freesound.org/previews/573/573444_2214720-lq.mp3").play();
    if (note === 'F3') new Audio("https://cdn.freesound.org/previews/573/573441_2214720-lq.mp3").play();
    if (note === 'F3#') new Audio("https://cdn.freesound.org/previews/573/573442_2214720-lq.mp3").play();
    if (note === 'G3') new Audio("https://cdn.freesound.org/previews/573/573435_2214720-lq.mp3").play();
    if (note === 'G3#') new Audio("https://cdn.freesound.org/previews/573/573436_2214720-lq.mp3").play();
    if (note === 'A3') new Audio("https://cdn.freesound.org/previews/573/573448_2214720-lq.mp3").play();
    if (note === 'A3#') new Audio("https://cdn.freesound.org/previews/573/573447_2214720-lq.mp3").play();
    if (note === 'B3') new Audio("https://cdn.freesound.org/previews/573/573450_2214720-lq.mp3").play();
    if (note === 'C4') new Audio("https://cdn.freesound.org/previews/573/573452_2214720-lq.mp3").play();
    if (note === 'C4#') new Audio("https://cdn.freesound.org/previews/573/573451_2214720-lq.mp3").play();
    if (note === 'D4') new Audio("https://cdn.freesound.org/previews/573/573454_2214720-lq.mp3").play();
    if (note === 'D4#') new Audio("https://cdn.freesound.org/previews/573/573453_2214720-lq.mp3").play();
    if (note === 'E4') new Audio("https://cdn.freesound.org/previews/573/573446_2214720-lq.mp3").play();
    if (note === 'F4') new Audio("https://cdn.freesound.org/previews/573/573445_2214720-lq.mp3").play();
    if (note === 'F4#') new Audio("https://cdn.freesound.org/previews/573/573503_2214720-lq.mp3").play();
    if (note === 'G4') new Audio("https://cdn.freesound.org/previews/573/573504_2214720-lq.mp3").play();
    if (note === 'G4#') new Audio("https://cdn.freesound.org/previews/573/573505_2214720-lq.mp3").play();
    if (note === 'A4') new Audio("https://cdn.freesound.org/previews/573/573506_2214720-lq.mp3").play();
    if (note === 'A4#') new Audio("https://cdn.freesound.org/previews/573/573508_2214720-lq.mp3").play();
    if (note === 'B4') new Audio("https://cdn.freesound.org/previews/573/573509_2214720-lq.mp3").play();
    if (note === 'C5') new Audio("https://cdn.freesound.org/previews/573/573510_2214720-lq.mp3").play();
    if (note === 'C5#') new Audio("https://cdn.freesound.org/previews/573/573511_2214720-lq.mp3").play();
    if (note === 'D5') new Audio("https://cdn.freesound.org/previews/573/573512_2214720-lq.mp3").play();
    if (note === 'D5#') new Audio("https://cdn.freesound.org/previews/573/573522_2214720-lq.mp3").play();
    if (note === 'E5') new Audio("https://cdn.freesound.org/previews/573/573521_2214720-lq.mp3").play();
    if (note === 'F5') new Audio("https://cdn.freesound.org/previews/573/573520_2214720-lq.mp3").play();
    if (note === 'F5#') new Audio("https://cdn.freesound.org/previews/573/573519_2214720-lq.mp3").play();
    if (note === 'G5') new Audio("https://cdn.freesound.org/previews/573/573518_2214720-lq.mp3").play();
    if (note === 'G5#') new Audio("https://cdn.freesound.org/previews/573/573516_2214720-lq.mp3").play();
    if (note === 'A5') new Audio("https://cdn.freesound.org/previews/573/573515_2214720-lq.mp3").play();
    if (note === 'A5#') new Audio("https://cdn.freesound.org/previews/573/573514_2214720-lq.mp3").play();
    if (note === 'B5') new Audio("https://cdn.freesound.org/previews/573/573513_2214720-lq.mp3").play();
    if (note === 'C6') new Audio("https://cdn.freesound.org/previews/573/573489_2214720-lq.mp3").play();
    if (note === 'C6#') new Audio("https://cdn.freesound.org/previews/573/573490_2214720-lq.mp3").play();
    if (note === 'D6') new Audio("https://cdn.freesound.org/previews/573/573488_2214720-lq.mp3").play();
    if (note === 'D6#') new Audio("https://cdn.freesound.org/previews/573/573488_2214720-lq.mp3").play();
  }
  return (
    <div>
      <div className="black-keyboard">
        <div onClick={() => start('D1#') } className="blackkey blackkey-0 D1#"></div>
        <div onClick={() => start('F1#') } className="blackkey blackkey-1 F1#"></div>
        <div onClick={() => start('G1#') } className="blackkey blackkey-2 G1#"></div>
        <div onClick={() => start('A1#') } className="blackkey blackkey-3 A1#"></div>
        <div onClick={() => start('C2#') } className="blackkey blackkey-4 C2#"></div>
        <div onClick={() => start('D2#') } className="blackkey blackkey-5 D2#"></div>
        <div onClick={() => start('F2#') } className="blackkey blackkey-6 F2#"></div>
        <div onClick={() => start('G2#') } className="blackkey blackkey-7 G2#"></div>
        <div onClick={() => start('A2#') } className="blackkey blackkey-8 A2#"></div>
        <div onClick={() => start('C3#') } className="blackkey blackkey-9 C3#"></div>
        <div onClick={() => start('D3#') } className="blackkey blackkey-10 D3#"></div>
        <div onClick={() => start('F3#') } className="blackkey blackkey-11 F3#"></div>
        <div onClick={() => start('G3#') } className="blackkey blackkey-12 G3#"></div>
        <div onClick={() => start('A3#') } className="blackkey blackkey-13 A3#"></div>
        <div onClick={() => start('C4#') } className="blackkey blackkey-14 C4#"></div>
        <div onClick={() => start('D4#') } className="blackkey blackkey-15 D4#"></div>
        <div onClick={() => start('F4#') } className="blackkey blackkey-16 F4#"></div>
        <div onClick={() => start('G4#') } className="blackkey blackkey-17 G4#"></div>
        <div onClick={() => start('A4#') } className="blackkey blackkey-18 A4#"></div>
        <div onClick={() => start('C5#') } className="blackkey blackkey-19 C5#"></div>
        <div onClick={() => start('D5#') } className="blackkey blackkey-20 D5#"></div>
        <div onClick={() => start('F5#') } className="blackkey blackkey-21 F5#"></div>
        <div onClick={() => start('G5#') } className="blackkey blackkey-22 G5#"></div>
        <div onClick={() => start('A5#') } className="blackkey blackkey-23 A5#"></div>
        <div onClick={() => start('C6#') } className="blackkey blackkey-24 C6#"></div>
        <div onClick={() => start('D6#') } className="blackkey blackkey-25 D6#"></div>
      </div>
      <div className="white-keyboard">
        <div onClick={() => start('E1') } className="whitekey whitekey-1 E1"></div>
        <div onClick={() => start('F1') }className="whitekey whitekey-2 F1"></div>
        <div onClick={() => start('G1') }className="whitekey whitekey-3 G1"></div>
        <div onClick={() => start('A1') }className="whitekey whitekey-4 A1"></div>
        <div onClick={() => start('B1') }className="whitekey whitekey-5 B1"></div>
        <div onClick={() => start('C2') }className="whitekey whitekey-6 C2"></div>
        <div onClick={() => start('D2') }className="whitekey whitekey-7 D2"></div>
        <div onClick={() => start('E2') }className="whitekey whitekey-8 E2"></div>
        <div onClick={() => start('F2') }className="whitekey whitekey-9 F2"></div>
        <div onClick={() => start('G2') }className="whitekey whitekey-10 G2"></div>
        <div onClick={() => start('A2') }className="whitekey whitekey-11 A2"></div>
        <div onClick={() => start('B2') }className="whitekey whitekey-12 B2"></div>
        <div onClick={() => start('C3') }className="whitekey whitekey-13 C3"></div>
        <div onClick={() => start('D3') }className="whitekey whitekey-14 D3"></div>
        <div onClick={() => start('E3') }className="whitekey whitekey-15 E3"></div>
        <div onClick={() => start('F3') }className="whitekey whitekey-16 F3"></div>
        <div onClick={() => start('G3') }className="whitekey whitekey-17 G3"></div>
        <div onClick={() => start('A3') }className="whitekey whitekey-18 A3"></div>
        <div onClick={() => start('B3') }className="whitekey whitekey-19 B3"></div>
        <div onClick={() => start('C4') }className="whitekey whitekey-20 C4"></div>
        <div onClick={() => start('D4') }className="whitekey whitekey-21 D4"></div>
        <div onClick={() => start('E4') }className="whitekey whitekey-22 E4"></div>
        <div onClick={() => start('F4') }className="whitekey whitekey-23 F4"></div>
        <div onClick={() => start('G4') }className="whitekey whitekey-24 G4"></div>
        <div onClick={() => start('A4') }className="whitekey whitekey-25 A4"></div>
        <div onClick={() => start('B4') }className="whitekey whitekey-26 B4"></div>
        <div onClick={() => start('C5') }className="whitekey whitekey-27 C5"></div>
        <div onClick={() => start('D5') }className="whitekey whitekey-28 D5"></div>
        <div onClick={() => start('E5') }className="whitekey whitekey-29 E5"></div>
        <div onClick={() => start('F5') }className="whitekey whitekey-30 F5"></div>
        <div onClick={() => start('G5') }className="whitekey whitekey-31 G5"></div>
        <div onClick={() => start('A5') }className="whitekey whitekey-32 A5"></div>
        <div onClick={() => start('B5') }className="whitekey whitekey-33 B5"></div>
        <div onClick={() => start('C6') }className="whitekey whitekey-34 C6"></div>
        <div onClick={() => start('D6') }className="whitekey whitekey-35 D6"></div>
      </div>
    </div>
  )
}

export default Piano