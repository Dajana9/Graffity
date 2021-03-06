from django.urls import path

from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
    ArticleUpdateView,
    ArticleDeleteView,
    WorkshopArticleListView,
    WebshopArticleListView,
    GameArticleListView
)

urlpatterns = [
    # path('gallery/', ArticleListView.as_view()),
    # path('workshop/', WorkshopArticleListView.as_view()),
    # path('webshop/', WebshopArticleListView.as_view()),
    # path('game/', GameArticleListView.as_view()),
    path('gallery', ArticleListView.as_view()),
    path('workshop', WorkshopArticleListView.as_view()),
    path('webshop', WebshopArticleListView.as_view()),
    path('game', GameArticleListView.as_view()),

    # path('create/', ArticleCreateView.as_view()),
    # path('<pk>', ArticleDetailView.as_view()),
    # path('<pk>/update/', ArticleUpdateView.as_view()),
    # path('<pk>/delete/', ArticleDeleteView.as_view())
]
