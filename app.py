from flask import Flask, render_template

app = Flask(__name__, static_folder='.', static_url_path='', template_folder='.')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contacto')
def contacto():
    return render_template('pages/contacto.html')

@app.route('/datos')
def datos():
    return render_template('pages/datos.html')

@app.route('/informacion')
def informacion():
    return render_template('pages/informacion.html')

@app.route('/proyecto')
def proyecto():
    return render_template('pages/proyecto.html')


if __name__ == '__main__':
    app.run(debug=True)
