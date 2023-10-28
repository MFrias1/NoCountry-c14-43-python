"""crete history coins 2

Revision ID: bc937e1191c7
Revises: 8d7255ffcf3a
Create Date: 2023-10-27 17:08:19.296879

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'bc937e1191c7'
down_revision: Union[str, None] = '8d7255ffcf3a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('users', sa.Column('coin_history', sa.Integer, server_default='0', nullable=False))



def downgrade() -> None:
    pass
