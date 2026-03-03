# SEO & Social Preview Report (SPRINT D3)

## Overview
Enhanced the application's search engine visibility and social media presence.

## Changes Implemented
- **index.html**:
    - Updated `<title>` and `<meta name="description">` for better indexing.
    - Added Open Graph (OG) tags for Facebook, LinkedIn, and Discord.
    - Added Twitter Card meta tags for "summary_large_image" preview.
    - Fixed image paths to use absolute URLs for reliable social preview fetching.
- **Assets**:
    - Generated a professional `og.png` $(1200\times630)$ and placed it in `/public`.

## Social Preview Demonstration
Below is the generated OG image that will appear when sharing the portfolio on social platforms:

![OG Preview Image](file:///Users/david_mac/Library/CloudStorage/GoogleDrive-lopezsotelo77@gmail.com/Otros%20ordenadores/Mi%20PC/PRACTICAS/TRABAJOS/Curriculum-web/app/public/og.png)

## Validation Guide
To validate the sharing preview, use the following tools:
1. **[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)**: Paste the URL `https://curriculumweb-six.vercel.app/` to see the updated title, description, and image.
2. **[Twitter Card Validator](https://cards-dev.twitter.com/validator)** (now integrated in the compose box): Paste the URL in a tweet draft to see the preview card.
3. **[Social Share Preview](https://socialsharepreview.com/)**: A general tool to check multiple platforms at once.
