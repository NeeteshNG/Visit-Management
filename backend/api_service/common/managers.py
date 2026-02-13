from django.db import models

from model_utils.managers import SoftDeletableManager

from common import querysets


class ArchiveMixin:
    """
    Archive Mixin used in the manager.
    Provides filtering methods for archived/soft-deleted records.
    """

    def archived(self):
        """Return only archived (soft-deleted) records."""
        return self.filter(is_archived=True)

    def restored(self):
        """Return only non-archived records."""
        return self.filter(is_archived=False)

    def unarchived(self):
        """Alias for restored() - return non-archived records."""
        return self.filter(is_archived=False)

    def with_removed(self):
        """Return all records including soft-deleted ones."""
        return self.all_with_removed()


class BaseModelManager(SoftDeletableManager, ArchiveMixin):
    """
    Base Model Manager used in the project.
    Inherits from SoftDeletableManager to automatically exclude soft-deleted records.
    """

    def get_queryset(self):
        return querysets.BaseModelQuerySet(self.model, using=self._db).filter(is_removed=False)

    def all_with_removed(self):
        """Return queryset including soft-deleted records."""
        return querysets.BaseModelQuerySet(self.model, using=self._db)
