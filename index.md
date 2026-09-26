---
layout: base
title: "Botond Branyicskai-Nagy"
permalink: /
full_bleed: true
---

<section class="intro site-frame" aria-labelledby="intro-title">
  <div class="intro-grid">
    <div class="intro-main">
      <p class="eyebrow">Cambridge, United Kingdom</p>
      <h1 id="intro-title">Botond Branyicskai-Nagy</h1>
      <p class="intro-role">ML @ <a href="https://www.graphcore.ai">Graphcore</a></p>
      <p class="intro-copy">I am interested in machine learning research, particularly structured deep learning, algorithmic reasoning, and causal inference.</p>
      <div class="intro-links" aria-label="Contact and profiles">
        <a href="mailto:botondbnagy@gmail.com">Email</a>
        <a href="https://github.com/botondbnagy">GitHub</a>
        <a href="https://www.linkedin.com/in/botondbnagy">LinkedIn</a>
        <a href="https://bsky.app/profile/botondbnagy.bsky.social">Bluesky</a>
        <a href="{{ '/assets/botond_branyicskai_CV.pdf' | relative_url }}">CV <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <figure class="intro-portrait">
      <img src="{{ '/assets/profile5.png' | relative_url }}" alt="Portrait of Botond Branyicskai-Nagy" />
    </figure>
  </div>
</section>

<section class="profile-section ruled-section site-frame" aria-labelledby="profile-title">
  <div class="section-aside">
    <h2 id="profile-title">Profile</h2>
  </div>
  <div class="section-body prose-large">
    <p>I work on large-scale distributed training of LLMs at <a href="https://www.graphcore.ai">Graphcore</a>. I’m also interested in programmatic representations. Previously, I did research on neural program synthesis with <a href="https://www.mircomusolesi.org">Prof. Mirco Musolesi</a> in UCL’s <a href="https://www.machineintelligencelab.ai">Machine Intelligence Lab</a>.</p>
    <p>I did an MSc in Machine Learning at <a href="https://www.ucl.ac.uk">UCL</a> and a BSc in Physics at <a href="https://www.imperial.ac.uk">Imperial College London</a>. At Imperial, I worked with <a href="https://www.imperial.ac.uk/people/d.clements">Dave Clements</a> and later spent a summer researching causal discovery with <a href="https://mvdw.uk">Mark van der Wilk</a>. I grew up in Budapest, Hungary.</p>
  </div>
</section>

<section id="work" class="work-section ruled-section site-frame" aria-labelledby="work-title">
  <div class="section-heading-row">
    <div class="section-aside">
      <h2 id="work-title">Work &amp; writing</h2>
    </div>
    <p class="section-note">Research, writing, and selected projects.</p>
  </div>

  <div class="work-list">
    {% for post in site.posts %}
      <article class="work-item">
        <p class="work-year">{{ post.date | date: "%Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="work-summary">
          {% if post.summary %}
            {{ post.summary }}
          {% else %}
            {{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}
          {% endif %}
        </p>
        <a class="work-arrow" href="{{ post.url | relative_url }}" aria-label="Read {{ post.title }}">↗</a>
      </article>
    {% endfor %}
  </div>
</section>

<section id="background" class="background-section ruled-section site-frame" aria-labelledby="background-title">
  <div class="section-aside">
    <h2 id="background-title">Background</h2>
  </div>
  <div class="background-body">
    <div class="background-group">
      <h3>Experience</h3>
      <ol class="history-list">
        <li>
          <p class="history-date">Present</p>
          <div>
            <h4>Graduate Machine Learning Engineer</h4>
            <p><a href="https://www.graphcore.ai">Graphcore</a> · Cambridge</p>
          </div>
        </li>
        <li>
          <p class="history-date">2025</p>
          <div>
            <h4>ML Research Engineer <span>Contract</span></h4>
            <p><a href="https://ascentralabs.ai">Ascentra Labs</a> · London</p>
            <p class="history-detail">LLM integration, structured generation, and comparative model evaluation for a survey analysis product.</p>
          </div>
        </li>
        <li>
          <p class="history-date">2024</p>
          <div>
            <h4>Postgraduate Researcher</h4>
            <p><a href="https://www.machineintelligencelab.ai">Machine Intelligence Lab</a> · UCL</p>
            <p class="history-detail">Neural program synthesis and algorithmic reasoning with Prof. Mirco Musolesi.</p>
          </div>
        </li>
        <li>
          <p class="history-date">2023</p>
          <div>
            <h4>Research Intern</h4>
            <p>Imperial College London · <a href="https://mvdw.uk">Mark van der Wilk</a></p>
            <p class="history-detail">Causal discovery and Gaussian Process Latent Variable Models with Mark van der Wilk.</p>
          </div>
        </li>
      </ol>
    </div>

    <div class="background-group">
      <h3>Education</h3>
      <ol class="history-list">
        <li>
          <p class="history-date">2023—24</p>
          <div>
            <h4>MSc Machine Learning <span>Distinction</span></h4>
            <p>University College London</p>
            <p class="history-detail">Thesis: <em>Hierarchical Bayesian Program Synthesis for Neural Algorithmic Reasoning</em>.</p>
          </div>
        </li>
        <li>
          <p class="history-date">2020—23</p>
          <div>
            <h4>BSc Physics with Theoretical Physics <span>Honours</span></h4>
            <p>Imperial College London</p>
            <p class="history-detail">Thesis: <em>Evolution of Artificial Life: Investigating Optimisation in Gene Space</em>.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>
