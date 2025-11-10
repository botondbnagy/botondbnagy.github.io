---
layout: post
title: "Masked Image Modelling"
date: 2024-06-01
permalink: /masked-image-modelling.html
summary: "Self-supervised Vision Transformer pre-training for downstream segmentation."
---

Self-supervised learning pipeline that pre-trains a Vision Transformer to reconstruct partially masked images and then fine-tunes on the Oxford-IIIT Pets dataset for segmentation.

- **Focus**: generative pre-training, segmentation, ViT fine-tuning  
- **Stack**: PyTorch, Hugging Face

![Reconstructions](https://github.com/botondbnagy/masked-image-modelling/blob/main/figures/reconstructions.png)
![Segmentation Results](https://github.com/botondbnagy/masked-image-modelling/blob/main/figures/segmented.png)

[View code on GitHub](https://github.com/botondbnagy/masked-image-modelling)
