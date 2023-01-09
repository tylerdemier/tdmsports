from flask import render_template, request, session, redirect, url_for
from app import app
from models import Stock

import random
# stripe: payment API
import stripe

publishable_key = 'pk_test_51MOA4RLMQNcaxruGmWcR9wPh0wZJEnDl5ablQms8AQsCkQNmNBBOyq6QpgfRUGFtQ4Df9hdbcqCEZWpvnKFkBYiY00TYzmiKBT'
stripe.api_key = 'sk_test_51MOA4RLMQNcaxruGjTa93BUR24Ub2ZtSLzxggh7LcC8n3SyNF2H9drShK9kSVdLYcAV5IDbtVtNthqHhL7KqxMKt00PYbhtNA7'

@app.route('payment', methods=['POST'])
def payment():
    return redirect(url_for('thanks'))

@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

# @todo:
@app.route('/', methods=['GET', 'POST'])
def index():
    # @todo: hacer que solo salgan de los que hay mas amount que 0
    search = request.args.get('search')
    if search:
        stocks = Stock.query.filter((Stock.name.contains(search) | Stock.desc.contains(search)) & Stock.amount > 0)
    else:
        stocks = Stock.query.filter(Stock.amount > 0)
    return render_template('index.html', stocks=stocks)


@app.route('/<url>', methods=['GET', 'POST'])
def stock_detail(url):
    stock = Stock.query.filter(Stock.url == url).first()
    return render_template('item.html', stock=stock)

def merge_dicts(dict_1, dict_2):
    if isinstance(dict_1, dict) and isinstance(dict_2, dict):
        return dict(list(dict_1.items()) + list(dict_2.items()))
    else:
        return False

@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    stock_id = request.form.get('stock_id')
    stock_quantity = request.form.get('stock_quantity')
    stock = Stock.query.filter(Stock.id == stock_id).first()

    dict_items = {stock_id: {'name': stock.name, 'code': stock.code, 'price': stock.price, 'quantity': stock.amount,
                            'image': stock.image, 'desc': stock.desc}}

    if 'shoppingcart' in session:
        print(session['shoppingcart'])
        if stock_id in session['shoppingcart']:
            print("This product is already in your cart")
            return redirect(url_for("index"))
        else:
            session['shoppingcart'] = merge_dicts(session['shoppingcart'], dict_items)
            return redirect(url_for("index"))
    else:
        session['shoppingcart'] = dict_items
        return redirect(url_for("index"))

@app.route('/cart')
def get_cart():
    if 'shoppingcart' not in session:
        return redirect(url_for("index"))

    subtotal = 0
    shipping = round(random.uniform(1.99, 10.99), 2)
    grandtotal = 0.0
    for key, item in session['shoppingcart'].items():
        subtotal = subtotal + float(item['price']) * int(item['quantity'])
    grandtotal = subtotal + shipping
    return render_template('cart.html', subtotal = subtotal, shipping = shipping, grandtotal = grandtotal)

@app.route('/delete_item/<int:id>')
def delete_item(id):
    if 'shoppingcart' not in session and len(session['shoppingcart']) < 0:
        return redirect(url_for("index"))

    session.modified = True
    for key, item in session['shoppingcart'].items():
        if int(key) == id:
            session['shoppingcart'].pop(key, None)
            return redirect(url_for('get_cart'))