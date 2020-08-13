import eel
eel.init("Core")

@eel.expose
def hi(a):
    print(a)

eel.start('main.html',size=(300,400))