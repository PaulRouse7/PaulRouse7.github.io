from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def math_add():
    a = int(request.args["a"])
    b = int(request.args["b"])
    answer = add(a,b)
    return str(answer)

@app.route('/sub')
def math_sub():
    a = int(request.args["a"])
    b = int(request.args["b"])
    answer = sub(a,b)
    return str(answer)

@app.route('/mult')
def math_mult():
    a = int(request.args["a"])
    b = int(request.args["b"])
    answer = mult(a,b)
    return str(answer)

@app.route('/div')
def math_div():
    a = int(request.args["a"])
    b = int(request.args["b"])
    answer = div(a,b)
    return str(answer)

operators = {
        "add": add,
        "sub": sub,
        "mult": mult,
        "div": div,
        }

@app.route("/math/<oper>")
def do_math(oper):

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[oper](a, b)

    return str(result)