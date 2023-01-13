# Imports:
# 1. Flask: Flask.
# 2. Migrate: Flask migrations.
# 3. SQLAlchemy: Integrates SQLAlchemy with Flask
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from config import Config

app = Flask(__name__)
app.secret_key = 'TDMSports'
app.config.from_object(Config)

db = SQLAlchemy(app)

migrate = Migrate(app, db)
