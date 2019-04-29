from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from articles.models import *
from .serializers import *


class ArticleListView(ListAPIView):
    queryset = GalleryArticle.objects.all()
    serializer_class = GalleryArticleSerializer


class WorkshopArticleListView(ListAPIView):
    queryset = WorkshopArticle.objects.all()
    serializer_class = WorkshopArticleSerializer


class WebshopArticleListView(ListAPIView):
    queryset = WebshopArticle.objects.all()
    serializer_class = WebshopArticleSerializer


class GameArticleListView(ListAPIView):
    queryset = GameArticle.objects.all()
    serializer_class = GameArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = GalleryArticle.objects.all()
    serializer_class = GalleryArticleSerializer


class ArticleCreateView(CreateAPIView):
    queryset = GalleryArticle.objects.all()
    serializer_class = GalleryArticleSerializer


class ArticleUpdateView(UpdateAPIView):
    queryset = GalleryArticle.objects.all()
    serializer_class = GalleryArticleSerializer


class ArticleDeleteView(DestroyAPIView):
    queryset = GalleryArticle.objects.all()
    serializer_class = GalleryArticleSerializer
