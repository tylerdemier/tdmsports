from flask import render_template

from app import app
from models import Stock


@app.route('/', methods=['GET', 'POST'])
def index():
    stocks = Stock.query.all()
    return render_template('index.html', stocks = stocks)

@app.route('/<url>')
def stock_detail(url):
    stock = Stock.query.filter(Stock.url == url).first()
    return render_template('item.html', stock = stock)
