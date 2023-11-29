scene.set_background_color(13)
game.show_long_text("Pulsa A para ver los grados Cenigrados.    Pulsa B para ver los grados Fahrenheit",
    DialogLayout.TOP)
if controller.A.is_pressed():
    game.show_long_text("Indica los grados centigrados", DialogLayout.TOP)
    user_input_centigrados = game.ask_for_number('Que numero quieres introducir?', 5)
    cel = celcius_to_fahrenheit(user_input_centigrados),"fahrenheit"
    game.show_long_text(cel, DialogLayout.BOTTOM)

if controller.B.is_pressed():
    game.show_long_text("Indica los grados Fahrenheit", DialogLayout.TOP)
    user_input_fahrenheit = game.ask_for_number('Que numero quieres introducir?', 5)
    fah = fahrenheit_to_celsius(user_input_fahrenheit),"Celsius"
    game.show_long_text(fah, DialogLayout.BOTTOM)

 


def celcius_to_fahrenheit(user_input_centigrados):
     return (user_input_centigrados * 9/5) + 32

def fahrenheit_to_celsius(user_input_fahrenheit):
    return (user_input_fahrenheit - 32) * 5/9