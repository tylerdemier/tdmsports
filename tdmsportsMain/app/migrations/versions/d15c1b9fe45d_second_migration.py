"""Second migration.

Revision ID: d15c1b9fe45d
Revises: db2fbe4b3c5f
Create Date: 2023-01-09 04:58:20.738731

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd15c1b9fe45d'
down_revision = 'db2fbe4b3c5f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('order')
    op.drop_table('stock')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('stock',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('code', sa.VARCHAR(length=10), nullable=False),
    sa.Column('name', sa.VARCHAR(length=200), nullable=False),
    sa.Column('size', sa.FLOAT(), nullable=False),
    sa.Column('desc', sa.TEXT(), nullable=False),
    sa.Column('amount', sa.INTEGER(), nullable=True),
    sa.Column('price', sa.FLOAT(), nullable=False),
    sa.Column('image', sa.VARCHAR(length=2049), nullable=True),
    sa.Column('url', sa.VARCHAR(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url')
    )
    op.create_table('order',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('invoice', sa.VARCHAR(length=20), nullable=False),
    sa.Column('status', sa.VARCHAR(length=20), nullable=False),
    sa.Column('date_created', sa.DATETIME(), nullable=False),
    sa.Column('orders', sa.TEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('invoice')
    )
    # ### end Alembic commands ###
