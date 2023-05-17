---
layout: index
title: Agenda
---
{% assign collection_name = 'dynamic' %}
{% assign collection_posts = site[collection_name] %}
{% assign paginator = paginator.collection_posts %}

<!-- This is where the content will be displayed dynamically -->
<div class="posts">
{% for post in paginator %}
  <!-- Generate the HTML for each post -->
  <h2>{{ post.title }}</h2>
  <p>{{ post.content }}</p>
{% endfor %}
</div>

<!-- Pagination links -->
<div class="pagination">
{% if paginator.previous_page %}
  <a href="{{ paginator.previous_page_path }}" class="prev">Previous</a>
{% endif %}

{% for page in (1..paginator.total_pages) %}
  {% if page == paginator.page %}
	<span class="current-page">{{ page }}</span>
  {% else %}
	<a href="{{ site.baseurl }}/{{ paginator.url }}page{{ page }}" class="page-link">{{ page }}</a>
  {% endif %}
{% endfor %}

{% if paginator.next_page %}
  <a href="{{ paginator.next_page_path }}" class="next">Next</a>
{% endif %}
</div>