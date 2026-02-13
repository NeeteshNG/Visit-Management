from django.db import models

from model_utils.managers import SoftDeletableQuerySet


class ArchiveMixin:
    """
    Mixin for archive/soft-delete operations on querysets.
    """

    def archive(self):
        """Soft delete all records in the queryset."""
        self.update(is_archived=True, is_removed=True)

    def restore(self):
        """Restore all soft-deleted records in the queryset."""
        self.update(is_archived=False, is_removed=False)

    def unarchived(self):
        """Return only non-archived records."""
        return self.filter(is_archived=False)


class BaseModelQuerySet(SoftDeletableQuerySet, ArchiveMixin):
    """
    Base Queryset used in this project.
    Inherits from SoftDeletableQuerySet for proper soft-delete support.
    """
    pass
