input.onButtonPressed(Button.A, function () {
    dado += 1
})
input.onButtonPressed(Button.B, function () {
    numero = randint(1, dado)
    basic.showNumber(numero)
    if (numero == 1) {
    	
    } else if (numero == 2) {
    	
    } else if (numero == 3) {
    	
    } else if (numero == 4) {
    	
    } else if (numero == 5) {
    	
    } else if (numero == 6) {
    	
    } else if (numero == 7) {
    	
    } else if (numero == 8) {
    	
    } else if (numero == 9) {
    	
    } else if (numero == 10) {
    	
    }
    basic.pause(2000)
    basic.clearScreen()
})
let numero = 0
let dado = 0
basic.showLeds(`
    # # # # #
    # # # # #
    . . . . .
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.showLeds(`
    # # # # #
    # # # # #
    . . . . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # . . . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # .
    # # # # #
    # # # # #
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Yes)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
