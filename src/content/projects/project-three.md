---
title: "NYC Gentrification & Displacement Analysis"
description: "A six-part Tableau analysis combining six public datasets at the census tract level to map gentrification, displacement risk, racial impact, labor access, and school quality across New York City."
tools: ["Tableau", "Python", "Pandas", "Census Data", "ACS", "ETL/ELT"]
githubLink: ""
liveLink: "https://public.tableau.com/app/profile/radwan.hoque/viz/Final_17787177741600/1_OverallSummary"
image: "/images/nyc-gentrification.png"
date: "2026-05-13"
---

## Project Overview
New York City is one of the most deeply studied cities in the United States, but seeing the full picture of its gentrification crisis in one place is still difficult. This project builds that picture by combining six public datasets into a single master file organized by census tract, powering a six-part Tableau analysis that examines where gentrification is happening, who is hit hardest, and what it means for people's access to jobs and schools.

## Data Pipeline
Six datasets were merged at the census tract level using FIPS codes as the join key. Sources included the Urban Displacement Project's gentrification typology, the Princeton Eviction Lab's eviction records, three ACS tables covering household income, economic characteristics, and race and ethnicity, and the Child Opportunity Index. Each source had inconsistent FIPS formatting, different column schemas, and mismatched vintages that required careful cleaning and standardization before any joins could be made. The final combined file contains 12,361 tract-year observations across all five boroughs spanning 2017 to 2022.

## The Six Visualizations

**1. Gentrification Stage by Borough** — Shows what share of census tracts in each borough fall into four gentrification categories. The Bronx had 44.52% of tracts classified as Ongoing and Gentrifying, the highest of any borough. Staten Island and Queens showed 79.79% and 70.24% in the Rising Rents category, suggesting an earlier stage of pressure.

**2. Compounding Displacement Risk in the Bronx** — Filtered to actively gentrifying tracts, the Bronx leads with ~17 evictions per 1,000 residents, a rent burden above 0.3, and a median household income of ~$38,000 — a combination researchers call compounding displacement risk.

**3. Race & Gentrification Heatmap** — Hispanic residents are concentrated in the three most unstable categories, representing 36–44% of those tracts. White residents are concentrated in the highest-income stable categories where Hispanic shares drop to single digits.

**4. Hispanic Population Change Over Time** — Tracks year-over-year change in Hispanic population share by borough from 2017 to 2020. The Bronx went from +0.87 percentage points of growth in 2017 to negative by 2020, pointing to displacement-driven out-migration.

**5. Hispanic Labor Employment Dot Map** — Census-tract-level employment rates for Hispanic workers reveal clusters of higher opportunity in Astoria, Queens and parts of Staten Island — relevant for displaced workers in construction and production occupations.

**6. School Quality by Borough** — A box and whisker chart using the Child Opportunity Index shows Manhattan and Queens with the widest range and highest median education scores nationally, while the Bronx sits notably lower with many tracts near the bottom of the national ranking.

## Key Finding
Gentrification in NYC is not happening uniformly and is not affecting all races equally. The Bronx is the center of active displacement, Hispanic communities bear the heaviest burden across evictions, income, and population loss, and the pressures of rent, employment, and school access are deeply interconnected.