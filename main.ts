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
    //% block.loc.nl="linker hand omhoog draaien"
    //% weight=970
    export function turnLeftHandUp() {
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
    //% block.loc.nl="rechter hand omhoog draaien"
    //% weight=960
    export function turnRightHandUp() {
        basic.showLeds(`
          # # . # #
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - B:1 - D:1 - D:1 -", 100)
    }

    //% block
    //% block.loc.nl="linker hand naar rechter schouder"
    //% weight=950
    export function leftHandToRightShoulder() {
        basic.showLeds(`
          . . . # #
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }
    //% block
    //% block.loc.nl="rechter hand naar linker shouder"
    //% weight=940
    export function rightHandToLeftShoulder() {
        basic.showLeds(`
          . . . . .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }

    //% block
    //% block.loc.nl="linker hand naar hoofd"
    //% weight=930
    export function leftHandToHead() {
        basic.showLeds(`
          . . . . .
          . # # # .
          # # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", 100)
    }
    //% block
    //% block.loc.nl="rechter hand naar hoofd"
    //% weight=920
    export function rightHandToHead() {
        basic.showLeds(`
          . . . . .
          . # # # .
          # # # # #
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("E:1 - D:1 - - - - -", 100)
    }

    //% block
    //% block.loc.nl="linker hand naar rechter heup"
    //% weight=910
    export function leftHandToRightHip() {
        basic.showLeds(`
          . . . . .
          . . # # .
          . # # # #
          . . # # .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }
    //% block
    //% block.loc.nl="rechter hand naar linker heup"
    //% weight=900
    export function rightHandToLeftHip() {
        basic.showLeds(`
          . . . . .
          . . # . .
          . # # # .
          . # # # .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", 100)
    }

    //% block
    //% block.loc.nl="linker hand in zij"
    //% weight=890
    export function leftHandToSide() {
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # .
          . # # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", 100)
    }
    //% block
    //% block.loc.nl="rechter hand naar zij"
    //% weight=880
    export function rightHandToSide() {
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # #
          . # # # .
          . # . # .
          `, 0)
        music.playMelody("G:1 - B:1 - - - - -", 100)
    }
}

