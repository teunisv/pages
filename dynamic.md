---
layout: index
title: Agenda
---
{% assign collection_posts = site.dynamic %}
{% assign paginator = paginator.collection_posts %}

<div class="posts">
  {% for post in paginator.posts %}
    <h2>{{ post.title }}</h2>
    <p>{{ post.content | markdownify }}</p>
  {% endfor %}
</div>

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}">Previous</a>
  {% endif %}
  
  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span class="current-page">{{ page }}</span>
    {% else %}
      <a href="{{ '/blog/page' | append: page | append: '/' }}">{{ page }}</a>
    {% endif %}
  {% endfor %}
  
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}">Next</a>
  {% endif %}
</div>