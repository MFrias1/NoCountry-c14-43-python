"""create history coins

Revision ID: 8d7255ffcf3a
Revises: 568347c242a4
Create Date: 2023-10-27 17:01:15.398582

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '8d7255ffcf3a'
down_revision: Union[str, None] = '568347c242a4'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
     op.add_column('users', sa.Column('coin_history', sa.Integer, server_default='0', nullable=False))


def downgrade() -> None:
    pass
