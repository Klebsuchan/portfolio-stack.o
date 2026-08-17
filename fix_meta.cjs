const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetStr = '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
const replacementStr = `<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="HnghQlU9qNyGpGlptoSRn89uqIiKeToqLLE8wNPv6tg" />`;

html = html.replace(targetStr, replacementStr);
fs.writeFileSync('index.html', html, 'utf8');
console.log("Updated index.html");
