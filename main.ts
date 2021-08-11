let bpm = 0
let hrNo = 0
let c = 0
let b = 0
let A = 0
basic.showIcon(IconNames.Heart)
serial.setBaudRate(BaudRate.BaudRate115200)
pins.analogSetPeriod(AnalogPin.P1, 20000)
let peakCount = 0
let timer = 0
basic.forever(function () {
    A = pins.analogReadPin(AnalogPin.P1)
    basic.pause(20)
    b = pins.analogReadPin(AnalogPin.P1)
    basic.pause(20)
    c = pins.analogReadPin(AnalogPin.P1)
    basic.pause(20)
    hrNo = A + b + (c + 3)
    serial.writeNumber(hrNo)
    if (hrNo > 988) {
        peakCount += 1
    }
    serial.writeLine("")
})
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        timer += 1
        basic.pause(1000)
    }
    bpm = peakCount / 5 * 60
    timer = 0
    peakCount = 0
    serial.writeLine("\"BPM is\"" + Math.round(bpm))
    basic.pause(1000)
})
