---
layout: index
title: Agenda
---

{% assign collection_name = 'dynamic' %}
{% assign collection_posts = site[collection_name] %}
{% assign paginator = paginator.collection_posts %}
{% for post in site.dynamic %}
<div class="post">
<div class="post-title"> {{ post.title }}</div>
<div class="post-content">{{ post.content }}</div>
<a href="{{ paginator.next_page_path }}" class="next">Next</a>
</div>
{% endfor %}

-->