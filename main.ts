input.onPinPressed(TouchPin.P2, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("E D G F B A C5 B ", 120)
})
