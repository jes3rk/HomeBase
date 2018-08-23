from flask import Flask, request, Response
app=Flask(__name__, static_url_path='')

@app.route("/")
def index():
    return 
