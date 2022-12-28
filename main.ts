//% color="#AA278D" weight=200
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
          `, 0)
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
}

macarena.standUp()