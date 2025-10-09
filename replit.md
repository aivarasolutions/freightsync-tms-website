# FreightSync TMS - Last-Mile Delivery Business Blueprint

## Overview
FreightSync TMS is a complete blueprint for launching and scaling a last-mile delivery business. This is a pre-built static React application that provides a comprehensive step-by-step guide for stakeholders, partners, investors, and drivers.

**Current Location**: Charlotte, NC  
**Planned Expansion**: Houston, TX

## Project Type
This is a static website built with:
- React (pre-built/compiled)
- Tailwind CSS
- Served via `serve` package on Node.js

## Project Structure
```
.
├── index.html              # Main HTML file
├── assets/                 # Static assets
│   ├── index-CKzg1HaY.js   # Bundled JavaScript
│   ├── index-BbsTzf65.css  # Bundled CSS (Tailwind)
│   ├── sprinter-van-*.jpg  # Vehicle images
│   └── urban-delivery-*.jpg # Delivery images
├── favicon.ico             # Site favicon
├── package.json            # Node.js dependencies
└── .replit                 # Replit configuration
```

## Setup & Configuration

### Workflow
- **Server**: Runs `npx serve -l 5000 -n` to serve static files
- **Port**: 5000 (required for Replit)
- **Host**: Serves on 0.0.0.0 to allow external access

### Deployment
- **Type**: Autoscale (static website)
- **Command**: `npx serve -l 5000 -n`
- No build step required (already pre-built)

## Running Locally
The site automatically starts when you run the Replit. It serves the static files on port 5000.

## Navigation Structure
The site includes the following sections:
- Home
- Business Plan
- Financial Tables
- Compliance
- Technology
- Expansion
- Contact

## Recent Changes
- **2025-10-09**: Initial import and Replit environment setup
  - Installed Node.js 20
  - Installed `serve` package for static file serving
  - Configured workflow to serve on port 5000
  - Set up autoscale deployment configuration
  - Created .gitignore for Node.js projects
