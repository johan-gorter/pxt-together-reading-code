namespace macarena {

    //% block
    //% block.loc.nl="sta op"
    //% weight=1000
    export function standUp() {
        basic.showLeds(`
          . . . . .
          . . # . .
          . # # # .
          . . # . .
          . # . # .
          `, 500)
    }

    //% block
    //% block.loc.nl="linker arm vooruit"
    //% weight=990
    export function leftArmForward() {
        basic.showLeds(`
          . # . . .
          . # # . .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }

    //% block
    //% block.loc.nl="rechter arm vooruit"
    //% weight=980
    export function rightArmForward() {
        basic.showLeds(`
          . # . # .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }

    //% block
    //% block.loc.nl="linker hand draaien"
    //% weight=970
    export function turnLeftHand() {
        basic.showLeds(`
          # # . # .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", 100)
    }

    //% block
    //% block.loc.nl="rechter hand draaien"
    //% weight=960
    export function turnRightHand() {
        basic.showLeds(`
          # # . # .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - B:1 - D:1 - D:1 -", 100)
    }

    //% block
    //% block.loc.nl="linker hand naar rechter heup"
    //% weight=950
    export function leftHandToRightHip() {
        basic.showLeds(`
          . . . # .
          . . # # .
          # # # # .
          . # # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }
}
macarena.standUp()
