---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: homepage
title: NaCl
---

## Latest Episodes

{% assign episodes = site.episodes | sort: "release_date", "first" | reverse %}
{% for e in episodes limit: 4%}
<section class="episode">
    <h3><a href="{{ e.url }}">{{ e.title }}</a></h3>
    <p>Season {{ e.season }}, episode {{ e.episode }}</p>
    <p>{{ e.description }}</p>
</section>
{% endfor %}

## Feed

`https://nacl.bell.wtf/feed.xml`

[![Listen on Spotify](/assets/img/spotify-podcast-badge.png)](https://open.spotify.com/show/11eQgadz2hHk5kM6ckwDNv)

[![Listen on Pocket
Casts](https://static2.pocketcasts.com/assets/subscribe/pocketcasts_small_dark@2x.png)](https://pca.st/1HZ2)

[![Listen on Google Podcasts](/assets/img/google_podcasts_badge@2x.png)](https://www.google.com/podcasts?feed=aHR0cHM6Ly9uYWNsLmJlbGwud3RmL2ZlZWQueG1s)

[![Listen on Apple Podcasts](/assets/img/apple-podcasts.png)](https://podcasts.apple.com/gb/podcast/nacl/id1458981698)
