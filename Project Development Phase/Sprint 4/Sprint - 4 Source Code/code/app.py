import flask
from flask import Flask, render_template 
import ibm_db


app = Flask("__main__")

conn = ibm_db.connect("DATABASE=bludb;HOSTNAME=19af6446-6171-4641-8aba-9dcff8e1b6ff.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;PORT=30699;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=hln67748;PWD=yRDx30Fb0x6kA8Db",'','')


@app.route("/")

def my_index():
    return flask.render_template("index.html", token="Hello World")

app.run(debug=True)
