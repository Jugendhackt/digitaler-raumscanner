input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    while (true) {
        pins.servoWritePin(AnalogPin.P0, 10)
        basic.pause(1000)
        for (let i = 0; i <= 29; i++) {
            d = i * 5.5 + 10
            distanz = grove.measureInCentimeters(DigitalPin.P2)
            Math.round(distanz)
            serial.writeLine(i + "\n" + distanz + "\n")
            rot = lerp3(distanz / 300, 255, 255, 0)
            gruen = lerp3(distanz / 300, 0, 255, 255)
            blau = lerp3(distanz / 300, 0, 0, 0)
            strip.setPixelColor(i, neopixel.rgb(rot, gruen, blau))
            strip.show()
            basic.pause(delay)
            pins.servoWritePin(AnalogPin.P0, d)
            basic.pause(delay)
        }
        
        for (let i = 29; i >= 0; i--) {
            d = i * 5.5 + 10
            distanz = grove.measureInCentimeters(DigitalPin.P2)
            Math.round(distanz)
            serial.writeLine(i+"\n" + distanz + "\n")
            rot = lerp3(distanz / 300, 255, 255, 0)
            gruen = lerp3(distanz / 300, 0, 255, 255)
            blau = lerp3(distanz / 300, 0, 0, 0)
            strip.setPixelColor(i, neopixel.rgb(rot, gruen, blau))
            strip.show()
            basic.pause(delay)
            pins.servoWritePin(AnalogPin.P0, d)
            basic.pause(delay)
        }
    }
})

let strip: neopixel.Strip = null
let distanz = 0
let d = 0
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
let rot, gruen, blau
let delay = 100
function lerp(a, b, c) {
    return a * (c - b) + b
}

function lerp3(a , b , c, d) {
    if (a < 0.5) {
        return lerp(2 * a, b, c)
    } else {
        return lerp(2 * a - 1, c, d)
    }

}


input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 10)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 170)
})