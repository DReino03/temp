let user_input_centigrados: number;
let cel: any[];
let user_input_fahrenheit: number;
let fah: number[];
scene.setBackgroundColor(13)
game.showLongText("Pulsa A para ver los grados Cenigrados.    Pulsa B para ver los grados Fahrenheit", DialogLayout.Top)
if (controller.A.isPressed()) {
    game.showLongText("Indica los grados centigrados", DialogLayout.Top)
    user_input_centigrados = game.askForNumber("Que numero quieres introducir?", 5)
    cel = [celcius_to_fahrenheit(user_input_centigrados), "fahrenheit"]
    game.showLongText(cel, DialogLayout.Bottom)
}

if (controller.B.isPressed()) {
    game.showLongText("Indica los grados Fahrenheit", DialogLayout.Top)
    user_input_fahrenheit = game.askForNumber("Que numero quieres introducir?", 5)
    fah = [fahrenheit_to_celsius(user_input_fahrenheit), "Celsius"]
    game.showLongText(fah, DialogLayout.Bottom)
}

function celcius_to_fahrenheit(user_input_centigrados: number) {
    return user_input_centigrados * 9 / 5 + 32
}

function fahrenheit_to_celsius(user_input_fahrenheit: number): number {
    return (user_input_fahrenheit - 32) * 5 / 9
}

