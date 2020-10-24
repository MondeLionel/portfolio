import string
import random
# import requests


def randGenerator(length):
    randNumbers = string.digits
    rslt = ''.join((random.choice(randNumbers) for i in range(length)))
    # print("Random number is:", rslt)


for i in range(10):
    randGenerator(5)
