from django.db import models
from django.utils.translation import gettext_lazy as _

from model_utils.models import TimeStampedModel, SoftDeletableModel

from . import managers


class BaseModel(TimeStampedModel, SoftDeletableModel):
    """
    Base Model that will be used in this project.

    Inherits from:
    - TimeStampedModel: Provides 'created' and 'modified' fields with auto timestamps
    - SoftDeletableModel: Provides 'is_removed' field for soft deletion

    Field Mappings:
    - 'created' replaces 'created_at' (auto_now_add)
    - 'modified' replaces 'updated_at' (auto_now)
    - 'is_removed' replaces 'is_archived' (for soft delete)

    TODO: Once all migrations are squashed and database is reset, remove:
    - is_archived field (use is_removed from SoftDeletableModel)
    - created_at property (use created directly)
    - updated_at property (use modified directly)
    """
    # DEPRECATED: Keep is_archived for backward compatibility with existing data
    # Will be removed after migration cleanup - use is_removed instead
    is_archived = models.BooleanField(default=False)

    class Meta:
        abstract = True

    objects = managers.BaseModelManager()

    def archive(self):
        """Soft delete the instance."""
        self.is_archived = True
        self.is_removed = True
        self.save(update_fields=['is_archived', 'is_removed'])

    def restore(self):
        """Restore a soft-deleted instance."""
        self.is_archived = False
        self.is_removed = False
        self.save(update_fields=['is_archived', 'is_removed'])

    @property
    def created_at(self):
        """Backward compatibility alias for 'created'."""
        return self.created

    @property
    def updated_at(self):
        """Backward compatibility alias for 'modified'."""
        return self.modified
