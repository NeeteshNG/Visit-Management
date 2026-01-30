from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("staff_of_org", "0002_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="staffuser",
            name="mobile_no",
        ),
        migrations.AlterField(
            model_name="staffuser",
            name="mobile_number",
            field=models.CharField(max_length=20, blank=True, null=True),
        ),
    ]
