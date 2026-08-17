const fs = require('fs');

let code = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');

// Find the start and end of "Vortex Logistics" object
const vortexIndex = code.indexOf('title: "Vortex Logistics"');
if (vortexIndex !== -1) {
  const start = code.lastIndexOf('{', vortexIndex);
  let openBraces = 0;
  let end = -1;
  for (let i = start; i < code.length; i++) {
    if (code[i] === '{') openBraces++;
    if (code[i] === '}') {
      openBraces--;
      if (openBraces === 0) {
        end = i;
        break;
      }
    }
  }
  
  // also handle the trailing comma
  if (code[end + 1] === ',') end++;
  code = code.substring(0, start) + code.substring(end + 1);
}

const nimbusIndex = code.indexOf('title: "Nimbus CloudSync"');
if (nimbusIndex !== -1) {
  const start = code.lastIndexOf('{', nimbusIndex);
  let openBraces = 0;
  let end = -1;
  for (let i = start; i < code.length; i++) {
    if (code[i] === '{') openBraces++;
    if (code[i] === '}') {
      openBraces--;
      if (openBraces === 0) {
        end = i;
        break;
      }
    }
  }
  if (code[end + 1] === ',') end++;
  code = code.substring(0, start) + code.substring(end + 1);
}

const solarisIndex = code.indexOf('title: "Solaris Grid"');
if (solarisIndex !== -1) {
  const start = code.lastIndexOf('{', solarisIndex);
  let openBraces = 0;
  let end = -1;
  for (let i = start; i < code.length; i++) {
    if (code[i] === '{') openBraces++;
    if (code[i] === '}') {
      openBraces--;
      if (openBraces === 0) {
        end = i;
        break;
      }
    }
  }
  if (code[end + 1] === ',') end++;
  code = code.substring(0, start) + code.substring(end + 1);
}

// Clean up any double commas or empty objects we might have left
// It might leave extra spaces but it's fine
fs.writeFileSync('src/components/Portfolio.tsx', code, 'utf8');
console.log("Projects removed");
