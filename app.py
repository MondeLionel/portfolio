from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():

    return render_template('index.html', bodyClass="loading")

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', bodyClass="dashboard")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
