"""creacion is active

Revision ID: b89dcb22fd6e
Revises: bc937e1191c7
Create Date: 2023-10-27 17:16:28.288195

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b89dcb22fd6e'
down_revision: Union[str, None] = 'bc937e1191c7'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
