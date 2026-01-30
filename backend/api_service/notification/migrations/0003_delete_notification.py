from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("notification", "0002_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Notification",
        ),
    ]
