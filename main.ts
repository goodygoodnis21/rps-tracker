function player_a () {
    OLED.init(128, 64)
    PA += 1
    rounds += 1
    showScoreboard()
}
function player_b () {
    OLED.init(128, 64)
    PB += 1
    rounds += 1
    showScoreboard()
}
input.onButtonPressed(Button.A, function () {
    player_a()
})
function tie2 () {
    OLED.init(128, 64)
    tie += 1
    rounds += 1
    showScoreboard()
}
function showScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Tie:" + tie)
}
input.onButtonPressed(Button.AB, function () {
    tie2()
})
input.onButtonPressed(Button.B, function () {
    player_b()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    rounds = 0
    tie = 0
    OLED.writeStringNewLine("Shall We Play a Game")
    basic.pause(2000)
    showScoreboard()
}
let tie = 0
let PB = 0
let rounds = 0
let PA = 0
reset()
