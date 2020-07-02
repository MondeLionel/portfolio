from flask import Flask, render_template, make_response
import requests
# import json


app = Flask(__name__)

# last fm api key: de17baf844b46b8ba785e996cfd5fc0b
# shared secret: 80565616a45acd3218ccb3a413b75fd7
# user-agent: Monde_vagrant
# application name: Mymusic

# apiUrl = "http://localhost/testwp/wp-json/wp/v2/posts"
# imgUrl = "http://localhost/testwp/index.php/wp-json/wp/v2/media/"
# r = requests.get(apiUrl)
# r_img = requests.get(imgUrl)

# def getPosts():
#     r = requests.get(apiUrl)
#     wp_response = r.json()
#     return json.dumps(wp_response)


@app.route('/')
def index():
    resp = make_response(render_template('index.html', bodyClass="loading"))
    resp.set_cookie("audioAllowed", "true")

    return resp


@app.route('/dashboard')
def dashboard():

    # wp_response = r.json()
    # wp_response_img = r_img.json()
    # for x in range(0, 3):
        # img_id = wp_response[x]["featured_media"]

        # print(wp_response[x]["featured_media"])
        # print(wp_response_img)

    # final_image = wp_response_img[img_id]["source_url"]
    # print(final_image)

    books = [{
        "id": "1",
        "book": "Herman",
        "author": "Herman Shultz",
        "book_cover_url": "/products/1.jpg",
        "loaned": "true"
    },
        {
        "id": "2",
        "author": "KS Komireddi",
        "book": "Malevolent Republic",
        "book_cover_url": "/products/2.jpg",
        "loaned": "false"
    },
        {
        "id": "3",
        "book": "Last President of Europe",
        "author": "Emmanuel Macron",
        "book_cover_url": "/products/3.jpg",
        "loaned": "true"
    },
        {
        "id": "4",
        "book": "Predators Ball",
        "author": "Connie Bruck",
        "book_cover_url": "/products/4.jpg",
        "loaned": "true"
    },
        {
        "id": "5",
        "book": "Global Politico",
        "author": "Stefan Schumer",
        "book_cover_url": "/products/5.jpg",
        "loaned": "true"
    },
        {
        "id": "6",
        "book": "Africa's long fall",
        "author": "PL Lumumba",
        "book_cover_url": "/products/1.jpg",
        "loaned": "true"
    }
    ]

    return render_template('dashboard.html', bodyClass="dashboard",
                           books=books
                           )


@app.errorhandler(404)
def page_not_found(error):

    return render_template('404.html', bodyClass="error-page"), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
