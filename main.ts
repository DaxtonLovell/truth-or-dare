input.onButtonPressed(Button.A, function () {
    TD = randint(0, 1)
    if (TD == 0) {
        basic.showString("Dare")
    } else {
        basic.showString("Truth")
    }
    TD = randint(0, 1)
})
input.onButtonPressed(Button.B, function () {
    arrow = randint(1, 4)
    if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (arrow == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    basic.clearScreen()
})
let arrow = 0
let TD = 0
for (let index = 0; index < 4; index++) {
    music.playMelody("C5 C A B D F B D ", 290)
}
basic.showString("Truth")
basic.pause(200)
basic.showString("Or")
basic.pause(200)
basic.showString("Dare")
