---
title: "Healthcare Telephone Clinic Effectiveness Analysis"
description: "A Python-based operational analysis evaluating the effectiveness of an evening telephone clinic, including staffing optimization, physician performance benchmarking, and recommendations to reduce follow-up rates."
tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "Excel"]
githubLink: "https://github.com/rhoque1/kaiser-appointment-analysis"
liveLink: ""
image: "/images/demand_heatmap.png"
date: "2026-05-13"
---

## Project Overview
A medical clinic introduced evening telephone visits as a more convenient alternative to in-person care for patients with after-hours needs. This analysis uses six months of appointment data to evaluate the program's effectiveness and provide staffing and operational recommendations.

## Business Questions Answered

**1. How many physicians are needed to staff the evening telephone clinic?**
Rather than applying a flat average across the entire evening, demand was analyzed in 30-minute time buckets by day of week. Early slots (5:30 PM) require up to 4 physicians, while demand after 8:30 PM can typically be handled by 1–2. A heatmap visualization surfaces this pattern clearly.

**2. How effective are the telephone appointments?**
An effective appointment was defined as one with no follow-up visit within 7 days. Out of 4,220 tracked evening phone visits, 1,519 patients booked a follow-up within a week — yielding an overall effectiveness rate of 64%.

**3. Phone vs. in-person effectiveness**
The overall in-person success rate is 92.2%. Even limiting the comparison to evening in-person visits only (a fairer benchmark), the success rate is 82.7% — nearly 19 percentage points higher than telephone visits.

**4. What drives the gap — and how to fix it?**
Filtering to physicians with more than 20 evening phone visits, the top 10 performers resolve patient issues over 78% of the time, while the bottom 10 succeed less than half the time. Critically, those same low-performing doctors achieve 80.6% effectiveness during in-person evening visits — matching the clinic baseline. This rules out general skill as the problem and points directly to a lack of telephone-specific training.

## Recommendations
- Have low-performing physicians shadow the top 10 to standardize best practices for phone visits
- Analyze failed call reasons to build a list of symptoms that cannot be effectively handled over the phone and must be redirected to in-person care