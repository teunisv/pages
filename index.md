---
layout: index
title: Home
---
{% for post in site.home %}
## {{ post.title }}
{{ post.content }}
{% endfor %}
