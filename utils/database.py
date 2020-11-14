# import mysql.connector
# import json
import os
import sqlite3


class Configuration(object):
    """docstring for Configuration"""
    APPLICATION_DIR = os.path.dirname(os.path.realpath(__file__))
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///%s/site.db' % APPLICATION_DIR


def create_database():
    conn = sqlite3.connect('books.db')
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS books (
    id int PRIMARY KEY,
    book_title text,
    author text,
    book_cover_url text,
    category text,
    book_type text,
    re_reads real,
    loaned text
    ) """)


def insert_new_book(_id, book_title, author,
                    book_cover_url, category, book_type, re_reads, loaned):
    conn = sqlite3.connect('books.db')
    c = conn.cursor()
    param_tuple = (_id, book_title, author, book_cover_url,
                   category, book_type, re_reads, loaned)
    c.execute("INSERT OR REPLACE INTO books VALUES (?,?,?,?,?,?,?,?)",
              param_tuple)
    # print(params)


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

history = [{
    "title": "The hero's Journey begins",
    "subtitle": "Have we archieved our mission?",
    "content": "<p> Enroll for Biochemistry dual major at UZ. The idea of figuring out the peices that make life the exception rather than the rule in the universe. The foundational building blocks that are the tool of the creator.</p><p><b> How naive. How wonderful. </b></p><p> Having grown up in a small town, finally getting away from home to pursue the dream is all consuming. I never thought I would miss Southport with its easy going people and beachtown vibes. Holidays saw an influx of people and the whole place came alive but out KwaZulu, Beach is a five letter word. </p><p> Me and 2 friends create a dance group called 'UNKNOWN' and venture into the world of being mini famous </p>",
    "date": "Jan 2011",
    "img_url": "/cv - large/monde.JPG",
    "img_url_2": {
        "url": "/cv - large/hello.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "Business Lights the Fire",
    "subtitle": "Have we archieved our mission?",
    "content": "<p>ENACTUS then SIFE - Students in free Enterprise- becomes an all consuming passion. A global organization that fosters and equips students with tools for entrepreneurship. This is the first major step towards big things. University of Zululand are top performers when it comes to social enterprise and consistently punch above the weight at the national Presentations held every year at Sandton convention center.</p>",
    "date": "August 2011",
    "img_url": "/cv - large/sife1.jpg",
    "img_url_2": {
        "url": "/cv - large/jhbrrg.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "The fire rises",
    "subtitle": "What matters is the plan",
    "content": "<p>Biochemistry is now legit difficult and cannot be taken lightly. After a few distictions and hard times we pass. I am now the a member of the technical team for the nationals presentations and a project manager for a projects helping bricklayers and artisans start small co-ops. A big project that was funded by RBMC in Richards Bay. English club Chelsea FC win the EUFA champions league to my detriment. Upwards and onwawrds.</p>",
    "date": "jan - Dec 2012",
    "img_url": "/cv - large/uni.jpg",
    "img_url_2": {
        "url": "/cv - large/jhbrrg.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }

},
    {
    "title": "Swan Song Senior",
    "subtitle": "Behold, my bankai!",
    "content": "<p>Academia and noodles go well together. Friends have now grown mature and looking for internships. I struggle to land one. Too focused on business and volleyball. Nominated for an executive position at UZ Enactus. Start working on some data analytics courses online to help with my schoolwork. Get approached by a Lecturer on joining his post grad group as he is impressed by my work. DECLINE. I want to see the outside world and test my mettle. Academia is not for hunters.</p>",
    "date": "jan - dec 2013",
    "img_url": "/cv - large/magudu.jpg",
    "img_url_2": {
        "url": "/cv - large/jhbrrg.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "Jungles and Pythons.py",
    "subtitle": "Bakayaru koneyaru",
    "content": "<p>Living at home, learning python language almost on all my free time. Internships-jobs not forthcoming. Move to Durban to live with my brother and his wife. They take me in without complaint. I hustle. Take up boxing and become a proper student of the sweet science. It's a schlep but my body is primed and my mind is clear.</p>",
    "date": "jan - dec 2014",
    "img_url": "/cv - large/theboxer.jpg",
    "img_url_2": {
        "url": "/cv - large/jhbrrg.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "Hackathonia",
    "subtitle": "Let there be light",
    "content": "<p>Meet up with Sihle Majola. He is important throughout the next chapter of my life. Future business partner and confidant. A law graduate with a bent for business like me. A truly hardworking man with little tolerance for bullshit. He is starting a loan company and needs a developer. I accept. That same year we enter a hackerthon hosted by IBM. Win third place. Get and awesome amount of money in DOLLARS. Decide to invest in a business we call BLUE MUFFIN later called RRG.</p>",
    "date": "jan - dec 2015",
    "img_url": "/cv - large/blue.jpg",
    "img_url_2": {
        "url": "/cv - large/jhbrrg.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "Sorry not Sorry",
    "subtitle": "Now you wanna sup to me?",
    "content": "<p>RRG is born. We pump out web based products like cupcakes. Ideas and Lean hypothesis abound. I'm now a web dev doing anything but Dev. Ship is going down. I can't remember the last time I sat and just wrote code. Excel and Google docs is where I live now.</p>",
    "date": " April 2016",
    "img_url": "/cv - large/rrg.JPG",
    "img_url_2": {
        "url": "/cv - large/pitch.JPG",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "The merry Band",
    "subtitle": "Thatha amachankura",
    "content": "<p>Old friends from Uni, Tshepo and Terrence, seeking greener pastures in Durban. We meet up. Meet with another enterprising fellow, Wonga, with whom we start our first truly successful venture. HOTDEES. A hotdog business that generates a few thousand rands in profit per day. We start delivering to municipality offices and SARS. People love the product. We get copycats but the formula to our freshness is waking up at 4am to collect ingredients before the girls come in at 7 and start with morning batches. BUSINESS OPERATIONAL EXPERIENCE GAINED +1000</p>",
    "date": "jan - dec 2017",
    "img_url": "/cv - large/st.jpg",
    "img_url_2": {
        "url": "/cv - large/jhbrrg.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "More Zaka",
    "subtitle": "Kemang Kemang kemang",
    "content": "<p>Wonga, the brainman behind Hotdees and a superb operator, cuts loose and takes his capital. Business falters and ends up dead. time to brush off the old laptop and begin anew. We start a new company called PICADOO. Investors love it. People Love it. Also incorporate an Arts marketplace called WEZART. 2018 is the year of tech. Picadoo is funded by foreign and local investors. Wezart grows. I am now a product manager and developer. We pitch and land R500 000 in seed funding. Google likes us too, we get an invite to Google launchpad. SAMSUNG likes we get an invite to CPT for their GES. Life is looking up. Thanda Cele introuces us to managing events. FINDING FEELS all the way</p>",
    "date": "jan - dec 2018",
    "img_url": "/cv - large/picadoo.JPG",
    "img_url_2": {
        "url": "/cv - large/certification.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "Breathing hard",
    "subtitle": "Whoops, I did it again",
    "content": "<p>picadoo numbers falter, and crashes in a giant ball of flames. Not enough runway, not enough of anything. Lessons learnt. business is hard. tech stacks are hard. building teams is hard especially if you have to move fast. Sihle Majola decides to cave in and sell Wezart to AFI. Good man. Now the team is thing of the next step. We all decide to hit the workforce for the first time since we've been out of school. I join FV media as a developer. Sihle Follows his baby, Wezart, to integrate it into the ecommerce platform. tshepo joins Unilever.</p>",
    "date": "jan - dec 2019",
    "img_url": "/cv - large/wezart.JPG",
    "img_url_2": {
        "url": "/cv - large/speech.JPG",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
},
    {
    "title": "COVID End-game",
    "subtitle": "And St Peter, No oes in heaven",
    "content": "<p>Year of Covid. I am no longer at FV and start a new company called GongongLive media. Streaming services with our own platform. We specialize in simplifying payments for content. Still in the works. I consult and freelance on the side while getting the platform working. Art director extraordinaire, Thanda Cele, is my cofounder, Shermar Stuart - an excellent and young operator - is heading up OPS. I've delved into the deep end. Nginx server conf is my second home. Internal APIs linked to offshore databases and microservices for validating tickets are my endgame. </p>",
    "date": "March 2020",
    "img_url": "/cv - large/hibike.JPG",
    "img_url_2": {
        "url": "/cv - large/feels.jpg",
        "img_title": "The gang at Sandton Convention Center left to right, Monde, Terrence, Tracy, Tshepo"
    }
}]
