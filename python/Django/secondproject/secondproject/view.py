# This file was created by me and it was not given or created by default

from django.http import HttpResponse

def index(request):
    return HttpResponse(
        '<a href="www.google.com">Google</a><br>'
        '<a href="www.facebook.com">Facebook</a><br>'
        '<a href="www.youtube.com">Youtube</a><br>'
        '<a href="www.google.com">Google</a>'
    )

def about(request):
    return HttpResponse("Come on")

def home(request):
    return HttpResponse("Happy new month")
