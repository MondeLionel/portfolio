from flask import Flask, render_template, make_response
import requests
# import json


app = Flask(__name__)

# last fm api key: de17baf844b46b8ba785e996cfd5fc0b
# shared secret: 80565616a45acd3218ccb3a413b75fd7
# user-agent: Monde_vagrant
# application name: Mymusic


# function to loop over books

@app.route('/')
def index():
    resp = make_response(render_template('index.html', bodyClass="loading"))
    resp.set_cookie("audioAllowed", "true")

    return resp


@app.route('/dashboard')
def dashboard():

    books = [{
        "id": "1",
        "book": "Karman",
        "author": {
            "name": "Giorgio Agamben",
            "publisher": "Stanford University Press",
            "date_published": "2018",
            "country": "United States of America"
        },
        "book_cover_url": "/products/1.jpg",
        "category": "Philosophy",
        "type": "Print",
        "re-reads": 2,
        "loaned": "true"
    },
        {
        "id": "2",
        "book": "Malevolent Republic",
        "author": {
            "name": "KS Komireddi",
            "publisher": "C.Hurst & Co",
            "date_published": "2020",
            "country": "United Kingdom"
        },
        "book_cover_url": "/products/2.jpg",
        "category": "Politics",
        "type": "Digital",
        "re-reads": 4,
        "loaned": "false"
    },
        {
        "id": "3",
        "book": "Last President of Europe",
        "author": {
            "name": "William Droziak",
            "publisher": "Public Affairs",
            "date_published": "2020",
            "country": "United States of America"
        },
        "book_cover_url": "/products/3.jpg",
        "category": "Politics",
        "type": "Print",
        "re-reads": 8,
        "loaned": "true"
    },
        {
        "id": "4",
        "book": "Predators Ball",
        "author": {
            "name": "Connie Bruck",
            "publisher": "Simon and Schuster",
            "date_published": "1988",
            "country": "United States of America"
        },
        "book_cover_url": "/products/4.jpg",
        "category": "Finance",
        "type": "Print",
        "re-reads": 3,
        "loaned": "true"
    },
        {
        "id": "5",
        "book": "Rainmaking",
        "author": {
            "name": "Ford Harding",
            "publisher": " Simon & Schuster, Inc",
            "date_published": "2008",
            "country": "United States of America"
        },
        "book_cover_url": "/products/5.jpg",
        "category": "Business Development",
        "type": "Digital",
        "re-reads": 3,
        "loaned": "true"
    },
        {
        "id": "6",
        "book": "South Africa's Energy Transition",
        "author": {
            "name": "Andrew Lawrence",
            "publisher": "Springer Nature Switzerland AG",
            "date_published": "2020",
            "country": "Switzerland"
        },
        "book_cover_url": "/products/1.jpg",
        "category": "Government Policy",
        "type": "Digital",
        "re-reads": 2,
        "loaned": "true"
    },
        {
        "id": "7",
        "book": "Not just a civil servant",
        "author": {
            "name": "Anil Swarup",
            "publisher": "Unicorn Books Pvt. Ltd.",
            "date_published": "2019",
            "country": "India"
        },
        "book_cover_url": "/products/1.jpg",
        "category": "Government",
        "type": "Digital",
        "re-reads": 5,
        "loaned": "true"
    },
        {
        "id": "8",
        "book": "Global banks on trial",
        "author": {
            "name": "Pierre-Hugues Verdier",
            "publisher": "Oxford University Press",
            "date_published": "2020",
            "country": "United States of America"
        },
        "book_cover_url": "/products/1.jpg",
        "category": "Finance",
        "type": "Digital",
        "re-reads": 4,
        "loaned": "true"
    },
        {
        "id": "9",
        "book": "Beef, brahmins, and broken men : an annotated critical selection from the Untouchables, who were they and why they became untouchables?",
        "author": {
            "name": "Bhimrao Ramji Ambedkar",
            "publisher": "Navayana Publishing",
            "date_published": "2020",
            "country": "India"
        },
        "book_cover_url": "/products/1.jpg",
        "category": "Politics",
        "type": "Digital",
        "re-reads": 5,
        "loaned": "true"
    }
    ]

    books_read = len(books)

    return render_template('dashboard.html', bodyClass="dashboard",
                           books=books, books_read=books_read
                           )


@app.errorhandler(404)
def page_not_found(error):

    return render_template('404.html', bodyClass="error-page"), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
