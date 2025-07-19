input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 500 || pins.analogReadPin(AnalogReadWritePin.P2) == 1) {
        basic.showIcon(IconNames.Surprised)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 3003, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
