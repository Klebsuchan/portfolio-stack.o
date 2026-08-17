const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldFavicon = `    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />`;

const newFavicon = `    <!-- Optimization for Mobile & Desktop -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#020204" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    
    <!-- Favicon (Cross-browser, Vercel, Google Search) -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="manifest" href="/site.webmanifest" />`;

html = html.replace(oldFavicon, newFavicon);
fs.writeFileSync('index.html', html, 'utf8');
console.log("Updated index.html");
