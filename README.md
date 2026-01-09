# AI-AgriBench

AI-AgriBench is a domain-grounded benchmark for evaluating large language models (LLMs) and commercial agricultural advisory services on realistic, field-level agricultural question-answering tasks. Built from real extension bulletins, university materials, and open-access research publications, AI-AgriBench helps answer a critical question: **"Can frontier language models and commercial Ag advisory services be trusted to help farmers and agronomy advisors?"**

## Overview

Unlike generic benchmarks that test on multiple-choice questions and clean textbook-style content, AI-AgriBench evaluates models on realistic, actionable agricultural questions grounded in the same extension knowledge that farmers and advisors actually use. The benchmark focuses on real decisions such as:

- Diagnosing nutrient deficiencies
- Timing fungicide applications
- Setting seeding rates
- Managing weeds
- Responding to weather events

## Key Features

### Grounded Knowledge Sources
Built from 400K+ extension PDFs from 55+ US land-grant universities, keeping the benchmark anchored in the same documents farmers and advisors rely on.

### Expert-Curated Dataset
- **416 high-quality Q&A pairs** validated by domain experts
- **951 questions** reviewed by 23 expert agronomists
- Each QA pair reviewed by 1-4 experts (average: 2/3 reviewers per question)
- 100 QA pairs manually edited by reviewers
- Questions span 7 topic categories and multiple crop groups

### Actionable, Farmer-Oriented Q&A
Questions focus on practical, multi-step reasoning with multi-paragraph answers written in plain language suitable for real-world agricultural decision-making.

### Contamination-Aware Evaluation
To address potential training data contamination, AI-AgriBench includes:
- **Main dataset**: 416 QA pairs from documents across the corpus
- **Post-cutoff subset**: 146 QA pairs from documents published **after September 30, 2024**, designed to test generalization beyond potentially memorized content

### Comprehensive Evaluation Metrics
Models are evaluated on four key metrics:
- **Accuracy**: Alignment with expert consensus and factual correctness
- **Relevance**: Staying on-topic and addressing the specific question
- **Completeness**: Covering key steps, caveats, and conditions needed for safe action
- **Conciseness**: Focused, efficient communication

## Who is AI-AgriBench For?

- **Farmers & Advisors**: Understand where current models work well and where they are not yet trustworthy
- **AgTech Advisory Services**: Demonstrate quality using standard, widely accepted benchmarks
- **AgTech Companies**: Evaluate whether advisory tools are safe and useful before deployment
- **Funders, Investors, Policy Makers**: Evaluate effectiveness of potential commercial or research Ag advisory services

## Dataset Statistics

### Topic Categories (7 categories)
- Crop Management Decisions
- Agricultural Sustainability
- Crop Nutrition
- Pests and Pest Management
- Water and Irrigation Management
- Weeds and Weed Management
- Agricultural Weather Risk

### Crop Groups
- Midwestern Row Crops (Corn, Wheat, Soybean, Sorghum)
- Tree Crops (Fruits and nuts from orchard or plantation trees)
- Commercial Vegetables (Large-scale vegetables for commercial sale)
- Southern Row Crops (Rice, Cotton, Peanuts, Tobacco)
- Small Fruits (Berries, grapes, other small fruits)
- Northern Crops (Canola, Barley, Potatoes, Dry Beans)
- Herbs (Culinary/medicinal herbs for commercial production)

## Submission and Leaderboard

Researchers and developers can submit their model results to the AI-AgriBench leaderboard. Submissions are evaluated using standardized judge models (Claude Opus 4.5, Gemini3-Pro-Preview, Kimi-K2-thinking, and GPT5.1) with a consistent scoring rubric.

For detailed submission guidelines, visit the [AI-AgriBench website](https://aiagribench.org/) and see the "Instructions for Joining the Leaderboard" section.

## Results and Key Takeaways

Early results show that:
- Frontier models and Ag-focused advisory services saturate the benchmark, scoring above 94% in Accuracy
- Adding RAG to frontier LLMs does not significantly improve accuracy compared to the same LLMs without RAG
- Open-source models show strong performance, topping out at 92% accuracy
- Conciseness scores are lower than other metrics, indicating models tend to produce longer answers than expert-recommended length
- Performance on post-cutoff datasets aligns closely with main-dataset results, suggesting models generalize rather than memorize

## Evaluation Framework

AI-AgriBench uses an **LLM-as-a-Judge** evaluation pipeline where:
- Subject models generate answers to agricultural questions
- Specialized judge models score answers along four metrics (0-100 scale)
- Multiple independent judge models reduce bias and increase robustness
- Self-judging is avoided: when a judge model is evaluated as a subject, it's replaced in the judging panel

## Technology

The benchmark construction pipeline uses:
- **Document Corpus**: CropWizard corpus with 400K+ extension PDFs
- **Q&A Generation**: YourBench ([arXiv](https://arxiv.org/abs/2504.01833), [HuggingFace](https://huggingface.co/yourbench)) with GPT-4o-mini
- **Embeddings**: Qwen3-Embedding-8B for semantic filtering
- **Deduplication**: FAISS (Facebook AI Similarity Search)

## Organizations

AI-AgriBench is developed by:
- **AIFARMS AI Institute** (sponsored by USDA National Institute of Food and Agriculture)
- **Center for Digital Agriculture** at the University of Illinois

## Resources

- **Website**: [aiagribench.org](https://aiagribench.org/)
- **Leaderboard**: [aiagribench.org/leaderboard/](https://aiagribench.org/leaderboard/)
- **Code**: Available on [GitHub](https://github.com/AIFARMS/AI-AgriBench/tree/main)

## Contact

For questions about AI-AgriBench, or research collaboration:
- **General Inquiries**: Vikram Adve (vadve@illinois.edu)
- **Technical Support**: Ansh Ankul (aankul2@illinois.edu)

## Website

This repository contains the single-page website for AI-AgriBench. The website is a static HTML page with:
- Responsive design and dark/light theme toggle
- Interactive sections with collapsible technical details
- Leaderboard integration
- FAQ section
- Team and contact information

To view the website, simply open `index.html` in a web browser or serve it using any static file server.
