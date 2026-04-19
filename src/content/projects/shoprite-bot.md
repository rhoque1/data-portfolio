---
title: "ShopRite Price Tracking Bot"
description: "An automated grocery price tracking system that scrapes real-time ShopRite prices, stores historical data in SQLite, and sends email alerts when prices drop below your target."
tools: ["Python", "Playwright", "SQLite", "Pandas", "Matplotlib"]
githubLink: "https://github.com/rhoque1/ShopRiteBot"
liveLink: ""
image: "/images/shoprite-bot.png"
date: "2026-04-18"
---

## Project Overview
An automated, end-to-end grocery price tracking bot that scrapes live prices from ShopRite using Playwright, stores historical data in a SQLite database, and notifies you via email when a product drops below your target price.

## Architecture
* **Scrape:** Playwright headless browser extracts live grocery prices from ShopRite product pages
* **Store:** SQLite database layer with duplicate prevention for clean historical records
* **Analyze:** Pandas computes average, min, and max prices per product over time
* **Visualize:** Matplotlib generates price trend charts from historical data
* **Notify:** Gmail-based email alerts trigger when a product crosses your price threshold
* **Automate:** Daily scheduler with Windows Task Scheduler integration for 24/7 hands-free operation

## Key Features
* Shopping list driven — track any grocery item, not just a single product
* Duplicate-safe database writes ensure clean, trustworthy historical data
* Price trend charts give a visual history of how prices move over time
* Email alerts fire automatically when a target price is hit
* Fully automated — no terminal required after initial setup

## Tech Stack
Python 3.12, Playwright, SQLite, Pandas, Matplotlib, smtplib