//% block="Macarena" color="170"
namespace macarena {

    export let tempo: number = 80;

    //% block="stand up"
    //% block.loc.nl="sta op"
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
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:1 - B:1 - D:1 - D:1 -", tempo)
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
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", tempo)
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
        music.playMelody("E:1 - D:1 - - - - -", tempo)
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
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:3 - G:1 - G:1 -", tempo)
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
        music.playMelody("G:1 - G:1 - G:1 - G:1 -", tempo)
    }
    //% block
    //% block.loc.nl="rechter hand in zij"
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
    //% block.loc.nl="heupen schudden"
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
    //% block.loc.nl="sneller"
    //% weight=500
    export function speedUp() {
        tempo = tempo * 3 / 2;
    }

    //% block
    //% block.loc.nl="snelheid resetten"
    //% weight=500
    export function resetSpeed() {
        tempo = 80;
    }

    //% block
    //% block.loc.nl="applaus"
    //% weight=400
    export function applause() {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 380, 380, 121, 14, 1500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
}

//% block="Scavenger hunt" color="170"
//% block.loc.nl="Speurtocht"
namespace scavengerHunt {
    export let direction: number = 0;

    function showDirection() {
        basic.showArrow(direction, 300);
    }

    //% block
    //% block.loc.nl="draai naar links"
    export function turnToLeft() {
        direction--;
        if (direction < 0) {
            direction = 7;
        }
        showDirection();
        direction--;
        showDirection();
    }

    //% block
    //% block.loc.nl="draai naar rechts"
    export function turnToRight() {
        direction++;
        if (direction > 7) {
            direction = 0;
        }
        showDirection();
        direction++;
        showDirection();
    }

    //% block
    //% block.loc.nl="draai om"
    export function turnAround() {
        turnRight();
        turnRight();
    }

    //% block
    //% block.loc.nl="loop vooruit"
    export function walkForward() {
    }

    //% block="walk $tileCount tiles forward"
    //% block.loc.nl="loop $tileCount tegels vooruit"
    //% tileCount.loc.nl=aantalTegels
    export function walkTilesForward(tileCount: number) {
    }

    //% block="walk $tileCount tiles achteruit"
    //% block.loc.nl="loop $tileCount tegels achteruit"
    export function walkTilesBackwards(tileCount: number) {
    }

    //% block="wash $description"
    //% block.loc.nl="was $description af"
    export function wash(description: string) {
    }

    //% block="dry $description"
    //% block.loc.nl="droog $description af"
    export function dry(description: string) {
    }

    //% block="make a $description"
    //% block.loc.nl="maak een $description"
    export function makeA(description: string) {
    }

    //% block="follow $description"
    //% block.loc.nl="volg $description"
    export function follow(description: string) {
    }

    //% block="follow me"
    //% block.loc.nl="volg mij"
    export function followMe() {
    }

    //% block="I am $description"
    //% block.loc.nl="ik $description"
    export function iAm(description: string): boolean {
        return false;
    }

    //% block="give high five to $description"
    //% block.loc.nl="geef $description een high five"
    export function giveHighFiveTo(description: string) {
    }


    //% block="give box to $description"
    //% block.loc.nl="geef $description een boks"
    export function giveBoxTo(description: string) {
    }

    //% block="wave to $description"
    //% block.loc.nl="zwaai naar $description"
    export function waveTo(description: string) {
    }

    //% block="turn left"
    //% block.loc.nl="sla linksaf"
    export function turnLeft() {
    }

    //% block="turn right"
    //% block.loc.nl="sla rechtsaf"
    export function turnRight() {
    }

    //% block="straight ahead"
    //% block.loc.nl="ga rechtdoor"
    export function straightAhead() {
    }
}

//% block="Scavenger hunt step" color="#AAAAAA"
//% block.loc.nl="Speurtocht stap"
namespace scavengerHuntStep {
    //% block="step" blockGap=8 blockAllowMultiple=1
    //% block.loc.nl="stap"
    export function step(cb: () => void) {
    }
}