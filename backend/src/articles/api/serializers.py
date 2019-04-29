from rest_framework import serializers
from articles.models import *


class GalleryArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryArticle
        fields = ('id', 'title', 'description', 'image')


class WorkshopArticleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopArticleImage
        fields = '__all__'


class WorkshopArticleSerializer(serializers.ModelSerializer):
    workshop_images = WorkshopArticleImageSerializer(many=True)
    # workshop_images = serializers.StringRelatedField(many=True)

    class Meta:
        model = WorkshopArticle
        fields = '__all__'


class WebshopArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebshopArticle
        fields = '__all__'


class GameArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameArticle
        fields = '__all__'
