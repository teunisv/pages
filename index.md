---
layout: index
title: Home
---
{% for post in site.home %}
<div class="post">
<div class="post-title"> {{ post.title }}</div>
<div class="post-content">{{ post.content }}</div>
</div>
{% endfor %}
