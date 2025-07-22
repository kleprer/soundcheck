import React from 'react'
const Piano = () => {

  const start = (note) => {
    const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }

  return (
    <div>
      <div className="black-keyboard">
        <div onClick={() => start('D1#') } className="blackkey blackkey-0 D1#"></div>
        <div className="blackkey blackkey-1 F1#"></div>
        <div className="blackkey blackkey-2 G1#"></div>
        <div className="blackkey blackkey-3 A1#"></div>
        <div className="blackkey blackkey-4 C2#"></div>
        <div className="blackkey blackkey-5 D2#"></div>
        <div className="blackkey blackkey-6 F2#"></div>
        <div className="blackkey blackkey-7 G2#"></div>
        <div className="blackkey blackkey-8 A2#"></div>
        <div className="blackkey blackkey-9 C3#"></div>
        <div className="blackkey blackkey-10 D3#"></div>
        <div className="blackkey blackkey-11 F3#"></div>
        <div className="blackkey blackkey-12 G3#"></div>
        <div className="blackkey blackkey-13 A3#"></div>
        <div className="blackkey blackkey-14 C4#"></div>
        <div className="blackkey blackkey-15 D4#"></div>
        <div className="blackkey blackkey-16 F4#"></div>
        <div className="blackkey blackkey-17 G4#"></div>
        <div className="blackkey blackkey-18 A4#"></div>
        <div className="blackkey blackkey-19 C5#"></div>
        <div className="blackkey blackkey-20 D5#"></div>
        <div className="blackkey blackkey-21 F5#"></div>
        <div className="blackkey blackkey-22 G5#"></div>
        <div className="blackkey blackkey-23 A5#"></div>
        <div className="blackkey blackkey-24 C6#"></div>
        <div className="blackkey blackkey-25 D6#"></div>
      </div>
      <div className="white-keyboard">
        <div className="whitekey whitekey-1 E1"></div>
        <div className="whitekey whitekey-2 F1"></div>
        <div className="whitekey whitekey-3 G1"></div>
        <div className="whitekey whitekey-4 A1"></div>
        <div className="whitekey whitekey-5 B1"></div>
        <div className="whitekey whitekey-6 C2"></div>
        <div className="whitekey whitekey-7 D2"></div>
        <div className="whitekey whitekey-8 E2"></div>
        <div className="whitekey whitekey-9 F2"></div>
        <div className="whitekey whitekey-10 G2"></div>
        <div className="whitekey whitekey-11 A2"></div>
        <div className="whitekey whitekey-12 B2"></div>
        <div className="whitekey whitekey-13 C3"></div>
        <div className="whitekey whitekey-14 D3"></div>
        <div className="whitekey whitekey-15 E3"></div>
        <div className="whitekey whitekey-16 F3"></div>
        <div className="whitekey whitekey-17 G3"></div>
        <div className="whitekey whitekey-18 A3"></div>
        <div className="whitekey whitekey-19 B3"></div>
        <div className="whitekey whitekey-20 C4"></div>
        <div className="whitekey whitekey-21 D4"></div>
        <div className="whitekey whitekey-22 E4"></div>
        <div className="whitekey whitekey-23 F4"></div>
        <div className="whitekey whitekey-24 G4"></div>
        <div className="whitekey whitekey-25 A4"></div>
        <div className="whitekey whitekey-26 B4"></div>
        <div className="whitekey whitekey-27 C5"></div>
        <div className="whitekey whitekey-28 D5"></div>
        <div className="whitekey whitekey-29 E5"></div>
        <div className="whitekey whitekey-30 F5"></div>
        <div className="whitekey whitekey-31 G5"></div>
        <div className="whitekey whitekey-32 A5"></div>
        <div className="whitekey whitekey-33 B6"></div>
        <div className="whitekey whitekey-34 C6"></div>
        <div className="whitekey whitekey-35 D6"></div>
      </div>
    </div>
  )
}

export default Piano