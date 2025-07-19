input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
basic.forever(function () {
    let motion_sensor = 0
    if (pins.analogReadPin(AnalogPin.P0) == motion_sensor) {
        basic.showIcon(IconNames.Surprised)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 3003, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
