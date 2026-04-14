---
title: "Personal Finance Analytics Platform"
description: "An automated end-to-end ETL pipeline that transforms raw bank exports into interactive financial intelligence using Python, SQLite, and Power BI."
tools: ["Python", "Pandas", "SQLite", "Power BI", "DAX", "ETL/ELT"]
githubLink: "https://github.com/rhoque1/finance-analytics-platform"
liveLink: ""
image: "/images/finance-dashboard.png"
date: "2026-04-07"
---

## Project Overview
An automated, end-to-end data engineering pipeline that ingests raw Chase bank CSV exports, transforms and categorizes them using an AI-assisted mapping system, loads them into a SQLite database, and visualizes the results in an interactive Power BI dashboard.

## Architecture
* **Extract:** Ingests raw CSV exports from Chase bank accounts
* **Transform:** Python and Pandas pipeline that cleans data and applies an intelligent expense categorization system
* **Load:** Automated loading into a SQLite relational database for data integrity and concurrency
* **Visualize:** Power BI dashboard with custom DAX measures for trend analysis and category-level drill-downs
* **Automation:** One-click orchestration via Windows Batch scripting

## Key Features
* Fully automated pipeline — drop CSVs in, run one script, get a refreshed dashboard
* AI-assisted master mapping system for intelligent expense categorization
* Custom DAX measures for chronological trend analysis
* Relational SQLite database ensures clean, structured storage

## Tech Stack
Python 3.12, Pandas, SQLite3, Power BI, DAX, Windows Batch