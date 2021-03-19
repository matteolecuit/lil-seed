from wifi import Cell, Scheme

iwifi = 'wlan0'
iname = 'home'
cells = Cell.all(iwifi)

cellsList = []
for i, cell in enumerate(cells):
    cellsList.append(cell)
    print(i, ": ", cell)

wifi_index = int(input("Select your Wi-Fi: \n"))
cell = cellsList[wifi_index]
print(cell)
password = input("Input password: \n")
scheme = None
try:
    scheme = Scheme.for_cell(iwifi, 'home', cell, password)
    scheme.save()
except AssertionError:
    print('Scheme already exists')
    scheme = Scheme.find(iwifi, iname)
scheme.activate()

