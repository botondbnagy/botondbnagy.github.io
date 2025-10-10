---
layout: post
title: "Bivariate Causal Discovery with GPLVMs"
date: 2023-10-01
permalink: /bivariate-causal-discovery.html
summary: "Imperial UROP research on causal discovery using cross-validation and Bayesian model selection."
---

During my Imperial College London research internship I investigated causal discovery in bivariate settings, comparing cross-validation against Bayesian model selection using Gaussian Process Latent Variable Models (GPLVMs). The work was supervised by Mark van der Wilk and funded through Imperial UROP, with experiments run on the department's HPC cluster.

- Goal: Investigated whether generalisation metrics (e.g., cross-validation) can predict causal direction in bivariate data, comparing against Bayesian Model Selection (BMS) under the ICM assumption.
- Reviewed BMS approach from recent work showing marginal likelihood differences can identify causal direction (x→y vs y→x).
- Implemented k-fold cross-validation to compute predictive validation scores for causal vs anti-causal models using GPLVMs.
- Explored computational trade-offs: k-fold CV vs exhaustive methods on small datasets, and hyperparameter tuning challenges in highly non-convex landscapes.
- Set up parallelised experiments on HPC for cause–effect pairs datasets with random-search hyperparameter optimisation:
    - AN CE dataset: 99% accuracy (easily identifiable; few iterations to tune GPLVM).
    - CE-Cha and CE-Tübingen: 50% and 54% accuracies (harder pairs; many iterations required; computationally impractical with available resources).
- Investigated infinite-data limits:
    - Since CV estimates generalisation error, its causal signal weakens with increasing data.
    - Marginal likelihood retains a strong causal preference via the ICM-induced complexity penalty.
    - Effects of tuning cutoff due to compute limits could not be discounted; more investigation is needed to conclude true asymptotic behaviour.

- **Focus**: causal discovery, GPLVMs, model selection  
- **Stack**: GPflow, TensorFlow, HPC, CUDA

[View code on GitHub](https://github.com/botondbnagy/causal_gplvm)
