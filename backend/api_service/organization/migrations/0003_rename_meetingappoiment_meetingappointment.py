from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("organization", "0002_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Meetingappoiment",
            new_name="MeetingAppointment",
        ),
    ]
