<!-- ---
layout: page
title: research projects
permalink: /research/
---

{% for project in site.research %}

{% if research.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}



<!-- 
{% for image in site.static_files %}
<!--
    {% if image.path contains 'photoportfolio' %}

<!-- -->
<div class="project">
    <div class= "thumbnail">
        <a href="{{ site.baseurl }}{{ image.path }}">
            <img class="thumbnail" src="{{ site.baseurl }}{{ image.path }}" />
        </a>
    </div>
</div>

<!--
    {% endif %}
-->
{% endfor %}




<!-- this is for the lightbox --> 
<script type="text/javascript" src="/js/lightbox.js"></script>
<link rel="stylesheet" href="/css/lightbox.css"> --> --> -->