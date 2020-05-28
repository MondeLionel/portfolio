from flask import Flask, render_template


app = Flask(__name__)

# last fm api key: de17baf844b46b8ba785e996cfd5fc0b
# shared secret: 80565616a45acd3218ccb3a413b75fd7
# user-agent: Monde_vagrant
# application name: Mymusic


@app.route('/')
def index():

    return render_template('index.html', bodyClass="loading")


@app.route('/dashboard')
def dashboard():
    books = [{"title": 'Hey There', "author": 'david Cragno'}]

    return render_template('dashboard.html', bodyClass="dashboard")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
