from flask import Flask,render_template,request
from wifi import Cell, Scheme

iwifi = 'wlan0'
iname = 'home'
app = Flask(__name__)
cells = Cell.all(iwifi)
cellsList = []
for i, cell in enumerate(cells):
    cellsList.append(cell)
    print(i, ": ", cell)
cells = Cell.all(iwifi)

@app.route('/')
def form():
    return render_template('form.html', option_list=cellsList)
 
@app.route('/data', methods = ['POST', 'GET'])
def data():
    if request.method == 'GET':
        return f"The URL /data is accessed directly. Try going to '/form' to submit form"
    if request.method == 'POST':
        form_data = request.form.to_dict()
        index = int(form_data['Wifi'])
        print(index)
        password = form_data['Password']
        scheme = None
        try:
            scheme = Scheme.for_cell(iwifi, 'home', cellsList[index], password)
            scheme.save()
        except AssertionError:
            print('Scheme already exists')
            scheme = Scheme.find(iwifi, iname)
        scheme.activate()
        
        return render_template('data.html',form_data = form_data)
 
 
app.run(host='localhost', port=5000)
