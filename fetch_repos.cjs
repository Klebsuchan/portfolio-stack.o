const https = require('https');

const users = ['Klebsuchan', 'SenhorLo', 'joojinz'];

const fetchJson = (url) => new Promise((resolve, reject) => {
  https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try { resolve(JSON.parse(data)); }
      catch (e) { resolve(null); }
    });
  }).on('error', reject);
});

async function run() {
  for (const user of users) {
    console.log(`\n--- User: ${user} ---`);
    const repos = await fetchJson(`https://api.github.com/users/${user}/repos?per_page=30&sort=updated`);
    if (!repos || !Array.isArray(repos)) {
      console.log('Failed to fetch or no repos.');
      continue;
    }
    for (const repo of repos) {
      if (repo.fork) continue;
      const readme = await fetchJson(`https://api.github.com/repos/${user}/${repo.name}/readme`);
      if (readme && readme.content) {
         const content = Buffer.from(readme.content, 'base64').toString('utf-8');
         if (content.length > 200) { 
            console.log(`Repo: ${repo.name} | Lang: ${repo.language}`);
            console.log(`Desc: ${repo.description}`);
            console.log(`Readme: ${content.substring(0, 300).replace(/\n/g, ' ')}\n`);
         }
      }
    }
  }
}
run();
