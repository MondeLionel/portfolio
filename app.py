from flask import Flask, render_template, make_response
from utils import database, security, urils

app = Flask(__name__)

# Function to generate random numbers and store them in database
# THIS SHOULD BE A SEPERATE ROUTES FILE 

@app.route('/')
def index():

    resp = make_response(render_template('index.html', bodyClass="loading"))
    # resp.set_cookie("audioAllowed", "true")

    return resp


@app.route('/cv')
def cVitae():

    history = database.history
    # print (history)
    resp = make_response(render_template('cv.html', bodyClass="cv", history=history))
    return resp


@app.route('/work')
def work():
    resp = make_response(render_template('work.html', bodyClass="work"))
    return resp


@app.route('/experiments')
def woo():
    resp = make_response(render_template('woo.html', bodyClass="woo"))
    return resp

@app.route('/pix')
def pix():
    resp = make_response(render_template('pix.html', bodyClass="pix"))
    return resp


@app.route('/dashboard')
def dashboard():
    books = database.books
    listbook = list(books)
    # print(listbook)

    for book in books:
        print(book["id"])
        listbook = list(book)
        # print(listbook)

        database.insert_new_book(book["id"],
                                 book["book"],
                                 book["author"]["name"],
                                 book["book_cover_url"],
                                 book["category"],
                                 book["type"],
                                 book["re-reads"],
                                 book["loaned"])

    books_read = len(books)

    return render_template('dashboard.html', bodyClass="dashboard",
                           books=books, books_read=books_read
                           )


@app.errorhandler(404)
def page_not_found(error):

    return render_template('404.html', bodyClass="error-page"), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
