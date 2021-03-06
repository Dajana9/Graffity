# Generated by Django 2.2 on 2019-04-18 09:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='GameArticle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='WebshopArticle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='images')),
                ('price', models.IntegerField()),
                ('size', models.TextField()),
                ('shipping', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='WorkshopArticle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('videofile', models.FileField(null=True, upload_to='videos/', verbose_name='')),
            ],
        ),
        migrations.RenameModel(
            old_name='Article',
            new_name='GalleryArticle',
        ),
        migrations.RenameField(
            model_name='galleryarticle',
            old_name='content',
            new_name='description',
        ),
        migrations.CreateModel(
            name='WorkshopArticleImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
                ('gameArticle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='articles.WorkshopArticle')),
            ],
        ),
        migrations.CreateModel(
            name='GameArticleImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
                ('videofile', models.FileField(null=True, upload_to='gameVideos/', verbose_name='')),
                ('gameArticle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gameImages', to='articles.GameArticle')),
            ],
        ),
    ]
