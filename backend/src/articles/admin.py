from django.contrib import admin
from .models import GalleryArticle, WebshopArticle, WorkshopArticle, GameArticle, WorkshopArticleImage

admin.site.register(GalleryArticle)
admin.site.register(WebshopArticle)
admin.site.register(WorkshopArticle)
admin.site.register(GameArticle)
admin.site.register(WorkshopArticleImage)
