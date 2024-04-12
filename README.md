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

```bash
docker build -t color-app .
docker run -p 3000:3000 -e BG_COLOR=blue localhost/color-app:latest
```
