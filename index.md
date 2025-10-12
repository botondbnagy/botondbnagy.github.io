---
layout: base
title: "Botond"
permalink: /
full_bleed: true
---

<section id="top" class="hero-section">
  <div class="container">
    <div class="hero">
      <div>
        <h1>Hey, I’m Botond</h1>
        <p class="hero-location"><span aria-hidden="true" class="hero-location-icon">📍</span> Cambridge, United Kingdom</p>
        <p class="hero-lede">I research and develop Machine Learning algorithms. I’m especially interested in Bayesian methods for causal inference and structured deep learning to make models more robust at algorithmic generalisation and reasoning, while also improving their interpretability.</p>
        <div class="hero-topics" role="list" aria-label="Focus areas">
          <span class="hero-topic" role="listitem">Program synthesis</span>
          <span class="hero-topic" role="listitem">Representation learning</span>
          <span class="hero-topic" role="listitem">Algorithmic reasoning</span>
          <span class="hero-topic" role="listitem">Causal discovery</span>
          <span class="hero-topic" role="listitem">Reinforcement learning</span>
        </div>
        <div class="hero-actions">
          <a class="cta" href="#work">Explore projects →</a>
          <a class="ghost-link" href="#contact">Get in touch</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="education-section" aria-labelledby="education-title">
  <div class="container">
    <h2 id="education-title" class="section-heading">Education</h2>
    <div class="education-stack">
      <article class="education-card">
        <p class="education-meta">September 2023 — September 2024</p>
        <h3 class="education-title">MSc Machine Learning</h3>
        <p class="education-entity">University College London · Distinction</p>
        <p class="education-note">Thesis: <em>Hierarchical Bayesian Program Synthesis for Neural Algorithmic Reasoning</em> · Supervisor: Prof. Mirco Musolesi</p>
      </article>
      <article class="education-card">
        <p class="education-meta">October 2020 — June 2023</p>
        <h3 class="education-title">BSc Physics with Theoretical Physics</h3>
        <p class="education-entity">Imperial College London · Honours</p>
        <p class="education-note">Thesis: <em>Computational Evolution</em> · Supervisor: Dr. David Clements</p>
      </article>
    </div>
  </div>
</section>

<section id="about" class="about-section" aria-labelledby="about-title">
  <div
    class="about-bg"
    style="background-image:url('{{ '/assets/ucl_grad.jpeg' | relative_url }}');"
    aria-hidden="true"
  ></div>
  <div class="about-overlay"></div>
  <div class="container">
    <figure class="about-photo-mobile">
      <img
        src="{{ '/assets/ucl_grad.jpeg' | relative_url }}"
        alt="Botond at UCL graduation ceremony"
        loading="lazy"
        decoding="async"
      />
    </figure>
    <div class="about-card">
      <h2 id="about-title">About</h2>
      <p>After completing my Machine Learning MSc at <a href="https://www.ucl.ac.uk">UCL</a>, I am continuing our research on Neural Program Synthesis with <a href="https://www.mircomusolesi.org">Prof. Mirco Musolesi</a> in the <a href="https://www.machineintelligencelab.ai">Machine Intelligence Lab</a>. I have an undergraduate degree in Theoretical Physics from <a href="https://www.imperial.ac.uk">Imperial College</a>, where I completed my final year project with <a href="https://www.imperial.ac.uk/people/d.clements">Dave Clements</a> in the <a href="https://www.imperial.ac.uk/astrophysics">Astrophysics Group</a>. I also spent a summer as a research intern under the supervision of <a href="https://mvdw.uk">Mark van der Wilk</a> working on Causal Discovery and GPLVMs. I grew up in Budapest, Hungary.</p>
    </div>
  </div>
</section>

<section class="journey-section" aria-labelledby="experience-title">
  <div class="container">
    <div class="journey-wrapper">
      <h2 id="experience-title" class="section-heading">Experience</h2>
      <div class="timeline">
        <article class="timeline-item">
          <div class="timeline-body">
            <p class="timeline-meta">2025 — Present</p>
            <h3>ML Research Engineer (Contract)</h3>
            <p class="timeline-entity">Sherpa · London</p>
            <ul class="timeline-points">
              <li>Designed and delivered proof-of-concept for LLM integration into a survey analysis product.</li>
              <li>Built a custom chain-of-thought pipeline that translates natural language queries into JSON requests.</li>
              <li>Ran comparative experiments to inform feasibility studies and strategic model recommendations.</li>
            </ul>
          </div>
        </article>
        <article class="timeline-item">
          <div class="timeline-body">
            <p class="timeline-meta">2024 — Present</p>
            <h3>Postgraduate Researcher</h3>
            <p class="timeline-entity">Machine Intelligence Lab · University College London</p>
            <p class="timeline-text">Research into neural program synthesis and algorithmic reasoning with Prof. Mirco Musolesi, building Transformers and wake-sleep library learning.</p>
          </div>
        </article>
        <article class="timeline-item">
          <div class="timeline-body">
            <p class="timeline-meta">2023</p>
            <h3>Research Intern</h3>
            <p class="timeline-entity">Imperial College London</p>
            <p class="timeline-text">Investigated causal discovery via cross-validation compared with Bayesian model selection (GPLVM) under Mark van der Wilk. Funded through Imperial UROP with extensive HPC exposure.</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section id="work">
  <div class="container">
    <h2 class="section-heading">Projects</h2>
    {% assign featured_posts = site.posts %}
    {% if featured_posts.size > 0 %}
      <div class="projects-grid">
        {% for post in featured_posts limit:9 %}
          <article class="project-card">
            <a class="project-card-inner" href="{{ post.url | relative_url }}">
              <p class="project-year">{{ post.date | date: "%Y" }}</p>
              <h3 class="project-title">{{ post.title }}</h3>
              <p class="project-summary">
                {% if post.summary %}
                  {{ post.summary }}
                {% else %}
                  {{ post.excerpt | strip_html | truncate: 140 }}
                {% endif %}
              </p>
              <span class="project-link">Read more →</span>
            </a>
          </article>
        {% endfor %}
      </div>
      {% if featured_posts.size > 9 %}
        <p class="projects-more"><a href="{{ 'archive.html' | relative_url }}">Browse the full archive →</a></p>
      {% endif %}
    {% else %}
      <div class="projects-grid">
        <article class="project-card">
          <div class="project-card-inner is-disabled">
            <p class="project-year">Soon</p>
            <h3 class="project-title">Stay tuned</h3>
            <p class="project-summary">Projects and writing highlights will appear here once published.</p>
          </div>
        </article>
      </div>
    {% endif %}
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="narrow">
      <h2 style="font-size:32px; letter-spacing:-.01em; margin:0 0 10px">Contact</h2>
      <p class="sub">
        <a href="mailto:botondbnagy@gmail.com">Email</a> ·
        <a href="https://github.com/botondbnagy">GitHub</a> ·
        <a href="https://bsky.app/profile/botondbnagy.bsky.social">Bluesky</a> ·
        <a href="https://www.linkedin.com/in/botondbnagy">LinkedIn</a>
      </p>
    </div>
  </div>
</section>
