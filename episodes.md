---
layout: page
permalink: /episodes/
title: Episodes
---

<link rel="stylesheet" href="/assets/custom.css">

{% assign episodes = site.episodes | sort: "release_date", "first" | reverse %}
{% for e in episodes %}
<section class="episode">
    <h3><a href="{{ e.url }}">{{ e.title }}</a></h3>
    <p>Season {{ e.season }}, episode {{ e.episode }}</p>
    <p>{{ e.description }}</p>
</section>
{% endfor %}