from django.db import models

# change logo


class GalleryArticle(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return self.title


class WorkshopArticle(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    video = models.FileField(
        upload_to='workshop_videos/', null=True, verbose_name="")
    peopleCapacity = models.IntegerField(default='0')
    peopleJoined = models.IntegerField(default='0')
    # dateOfEvent = models.DateTimeField(default='2019-10-22 10:00')
    contact = models.CharField(max_length=220, default='mmilicic@gmail.com')

    def __str__(self):
        return self.title


class WorkshopArticleImage(models.Model):
    workshop = models.ForeignKey(
        WorkshopArticle, related_name="workshop_images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='workshop_images')


class GameArticle(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()

    def __str__(self):
        return self.title


class GameArticleImage(models.Model):
    gameArticle = models.ForeignKey(
        GameArticle, related_name='game_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='game_images')
    videofile = models.FileField(
        upload_to='game_videos/', null=True, verbose_name="")


class WebshopArticle(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(upload_to='webshop_images')
    price = models.IntegerField()
    size = models.TextField()
    shipping = models.TextField()

    def __str__(self):
        return self.title
