---
layout: page
permalink: /episodes/
title: Episodes
navigation: true
---

{% assign seasons = site.episodes | group_by: "season" %}
{% for season in seasons %}
## Season {{ season.name }}
{% assign episodes = season.items | sort_by: "release_date","first" | reverse %}
{% for e in episodes %}
<section class="episode">
    <h3><a href="{{ e.url }}">{{ e.title }}</a></h3>
    <h4>Episode {{ e.episode }}</h4>
    <p>{{ e.description }}</p>
    <p><i>{{ e.date | date_to_long_string: "ordinal" }}</i></p>
</section>
{% endfor %}
{% endfor %}
