"""empty message

Revision ID: 8816edd6cb2b
Revises: 9901a34e92df
Create Date: 2021-09-06 00:32:27.902876

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8816edd6cb2b'
down_revision = '9901a34e92df'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('transaction', sa.Column('_value', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('transaction', '_value')
    # ### end Alembic commands ###
