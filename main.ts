namespace macarena {

    export let tempo: number = 80;

    //% block="stand up"
    //% block.loc.nl-NL="sta op"
    //% weight=1000
    export function standUp() {
        tempo = 80;
        basic.showLeds(`
          . . . . .
          . . # . .
          . # # # .
          . . # . .
          . # . # .
          `, 500)
    }


    //% block
    //% block.loc.nl-NL="linker arm vooruit"
    //% weight=990
    export function leftArmForward() {
        basic.showLeds(`
          . # . . .
          . # # . .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl-NL="rechter arm vooruit"
    //% weight=980
    export function rightArmForward() {
        basic.showLeds(`
          . # . # .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
    }


    //% block
    //% block.loc.nl-NL="linker hand omhoog draaien"
    //% weight=970
    export function turnLeftHandUp() {
        basic.showLeds(`
          # # . # .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl-NL="rechter hand omhoog draaien"
    //% weight=960
    export function turnRightHandUp() {
        basic.showLeds(`
          # # . # #
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - B:1 - D:1 - D:1 -", tempo)
    }

    //% block
    //% block.loc.nl-NL="linker hand naar rechter schouder"
    //% weight=950
    export function leftHandToRightShoulder() {
        basic.showLeds(`
          . . . # #
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl-NL="rechter hand naar linker shouder"
    //% weight=940
    export function rightHandToLeftShoulder() {
        basic.showLeds(`
          . . . . .
          . # # # .
          . # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
    }

    //% block
    //% block.loc.nl-NL="linker hand naar hoofd"
    //% weight=930
    export function leftHandToHead() {
        basic.showLeds(`
          . . . . .
          . # # # .
          # # # # .
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl-NL="rechter hand naar hoofd"
    //% weight=920
    export function rightHandToHead() {
        basic.showLeds(`
          . . . . .
          . # # # .
          # # # # #
          . . # . .
          . # . # .
          `, 0)
        music.playMelody("E:1 - D:1 - - - - -", tempo)
    }

    //% block
    //% block.loc.nl-NL="linker hand naar rechter heup"
    //% weight=910
    export function leftHandToRightHip() {
        basic.showLeds(`
          . . . . .
          . . # # .
          . # # # #
          . . # # .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl-NL="rechter hand naar linker heup"
    //% weight=900
    export function rightHandToLeftHip() {
        basic.showLeds(`
          . . . . .
          . . # . .
          . # # # .
          . # # # .
          . # . # .
          `, 0)
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
    }

    //% block
    //% block.loc.nl-NL="linker hand in zij"
    //% weight=890
    export function leftHandToSide() {
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # .
          . # # . .
          . # . # .
          `, 0)
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl-NL="rechter hand in zij"
    //% weight=880
    export function rightHandToSide() {
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # #
          . # # # .
          . # . # .
          `, 0)
        music.playMelody("G:1 - B:1 - - - - -", tempo)
    }

    //% block
    //% block.loc.nl-NL="heupen schudden"
    //% weight=870
    export function shakeHips() {
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # #
          . . # # .
          . # . # .
          `, 0)
        music.playMelody("D5:9 -", tempo)
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # #
          . # # . .
          . # . # .
          `, 0)
        music.playMelody("C5:3 - D5:1 -", tempo)
        basic.showLeds(`
          . . . . .
          . . # . .
          # # # # #
          . # # # .
          . # . # .
          `, 0)
        music.playMelody("B:1 - G:1 - - - - -", tempo)
    }

    //% block
    //% block.loc.nl-NL="sneller"
    //% weight=500
    export function speedUp() {
        tempo = tempo * 3 / 2;
    }

    //% block
    //% block.loc.nl-NL="snelheid resetten"
    //% weight=500
    export function resetSpeed() {
        tempo = 80;
    }

    //% block
    //% block.loc.nl-NL="applaus"
    //% weight=400
    export function applause() {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 380, 380, 121, 14, 1500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
}

//% color=190 weight=100 icon="\uf1ec" block="Scavenger hunt"
//% block.loc.nl-NL="Speurtocht"
namespace scavengerHunt {
    export let direction: number = 0;

    function showDirection() {
        basic.showArrow(direction, 300);
    }

    //% block
    //% block.loc.nl-NL="draai naar links"
    export function turnLeft() {
        direction--;
        if (direction < 0) {
            direction = 7;
        }
        showDirection();
        direction--;
        showDirection();
    }

    //% block
    //% block.loc.nl-NL="draai naar rechts"
    export function turnRight() {
        direction++;
        if (direction > 7) {
            direction = 0;
        }
        showDirection();
        direction++;
        showDirection();
    }

    //% block
    //% block.loc.nl-NL="draai om"
    export function turnAround() {
        turnRight();
        turnRight();
    }

    //% block
    //% block.loc.nl-NL="loop vooruit"
    export function walkForward() {
    }

    //% block
    //% block.loc.nl-NL="loop $tileCount vooruit"
    //% tileCount.loc.nl-NL="aantal tegels"
    export function walkTilesForward(tileCount: number) {
    }

    //% block
    //% block.loc.nl-NL="loop $tileCount achteruit"
    //% tileCount.loc.nl-NL="aantal tegels"
    export function walkTilesBackwards(tileCount: number) {
    }

    //% block
    //% block.loc.nl-NL="was $description af"
    //% description.loc.nl-NL="omschrijving"
    export function wash(description: string) {
    }

    //% block
    //% block.loc.nl-NL="droog $description af"
    //% description.loc.nl-NL="omschrijving"
    export function dry(description: string) {
    }

    //% block
    //% block.loc.nl-NL="maak een"
    //% description.loc.nl-NL="omschrijving"
    export function makeA(description: string) {
    }

    //% block
    //% block.loc.nl-NL="volg"
    //% description.loc.nl-NL="omschrijving"
    export function follow(description: string) {
    }

    //% block
    //% block.loc.nl-NL="volg mij"
    export function followMe() {
    }

    //% block
    //% block.loc.nl-NL="ik"
    //% description.loc.nl-NL="omschrijving"
    export function iAm(description: string): boolean {
        return false;
    }
}