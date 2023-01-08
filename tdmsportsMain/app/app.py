from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# app.register_blueprint(stock, url_prefix='/stock')
# localhost:5000/stock

db = SQLAlchemy(app)

migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)