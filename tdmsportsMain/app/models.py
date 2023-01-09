import json
import re
from datetime import datetime

from app import db


# Creates a function to create a URL readable for a human.
def slugify(string):
    pattern = '[^\w()]'
    return re.sub(pattern, '-', string)


class Stock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    size = db.Column(db.Float, nullable=False)
    desc = db.Column(db.Text, nullable=False)
    amount = db.Column(db.Integer)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(2049))
    url = db.Column(db.String(200), unique=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.generate_url()

    def generate_url(self):
        self.url = slugify(self.name)

    def __repr__(self):
        return f'<Stock id: {self.id}, code: {self.code}, name: {self.name}>'


class JsonEncodedDict(db.TypeDecorator):
    impl = db.Text

    def process_bind_param(self, value, dialect):
        if value is None:
            return '{}'
        else:
            return json.dumps(value)

    def process_result_value(self, value, dialect):
        if value is None:
            return {}
        else:
            return json.loads(value)


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    invoice = db.Column(db.String(20), unique=True, nullable=False)
    status = db.Column(db.String(20), default='Pending', nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    orders = db.Column(JsonEncodedDict)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __repr__(self):
        return f'<Order id: {self.id}, invoice: {self.invoice}>'
