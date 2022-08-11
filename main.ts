let Light = 0
basic.forever(function () {
    Light = input.lightLevel()
    led.plotBarGraph(
    Light,
    255
    )
})
