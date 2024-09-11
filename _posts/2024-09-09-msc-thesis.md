---
layout: post
---
# Evolution of Artificial Life: Investigating Optimisation in Gene Space
During my Machine Learning MSc at [UCL](https://www.ucl.ac.uk), I carried out my thesis work supervised by [Prof. Mirco Musolesi](https://www.mircomusolesi.org) and [Lorenz Wolf](https://lorenz-wolf.netlify.app/) in the [Machine Intelligence Lab](https://www.machineintelligencelab.ai). The project was titled *Hierarchical Bayesian Program Synthesis for Neural Algorithmic Reasoning* and aimed to develop a novel approach to program synthesis using hierarchical Bayesian inference. The thesis report can be found [here](assets/MSc_thesis.pdf).

**Abstract:**

*Explaining a process algorithmically, given only input-output examples has been a
long-standing core challenge of machine learning. Previous approaches introduce
frameworks for inferring programs in a domain-specific language (DSL) that is usually
a static set of manually designed primitives. This places a fundamental limitation on
scalability and adaptability. This thesis introduces a novel framework for program
synthesis that builds on the strengths of a transformer-guided search, a Bayesian
inference scheme and neural library learning. We propose a method that integrates
trainable neural primitives with a wake-sleep algorithm for improving generalisation in
Programming-by-Example (PBE) tasks. By leveraging a transformer-based synthesis
model, our approach addresses scalability and adaptability across domains. We show
that this system allows the construction of DSLs dynamically, enabling more efficient
and flexible program generation. Our primary contributions include the development
of a system capable of finding general solutions to unseen tasks, facilitated by the use
of a curriculum learning process. Initial experiments on a mixture of Boolean and
arithmetic domains validate the feasibility of this approach, demonstrating successful
discovery and reuse of compositional abstractions. Based on our findings, we further
argue that there is significant potential for expanding the generalisation capabilities
of neural models by inducing structured, compositional reasoning through a strong
algorithmic prior.*