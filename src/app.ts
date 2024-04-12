import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const bgColor = process.env.BG_COLOR || 'white';
    res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Colorful Background</title>
    <style>
        body {
            background-color: ${bgColor};
            margin: 0;
            height: 100vh;
        }
    </style>
</head>
<body>
</body>
</html>`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
