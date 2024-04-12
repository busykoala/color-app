# Color app

## Installation

```bash
npm install
```

## Usage

```bash
npm run build
BG_COLOR=red npm start
```

## Docker

Local development

```bash
docker build -t color-app .
docker run -p 3000:3000 -e BG_COLOR=blue localhost/color-app:latest
```

Production

```bash
docker run -p 3000:3000 -e BG_COLOR=blue ghcr.io/busykoala/color-app:main
```
