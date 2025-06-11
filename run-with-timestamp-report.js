const { execSync } = require('child_process');
const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');

// Ensure the results directory exists
const resultsDir = path.join(__dirname, 'NexusTestResults');
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

// Generate timestamp in format DDMMYYYYHHmmss
const timestamp = dayjs().format('DDMMYYYYHHmmss');
const reportName = `NexusReport${timestamp}.html`;
const reportPath = path.join('NexusTestResults', reportName);

// Get parallel and retry from command line args, default to 2 and 1
const args = process.argv.slice(2);
let parallel = 2;
let retry = 1;
args.forEach((arg, idx) => {
  if (arg === '--parallel' && args[idx + 1]) parallel = args[idx + 1];
  if (arg === '--retry' && args[idx + 1]) retry = args[idx + 1];
});

const cmd = `npx cucumber-js --require-module ts-node/register --require src/steps/**/*.ts --format html:${reportPath} --tags "@UI or @API" --parallel ${parallel} --retry ${retry}`;

console.log(`Running: ${cmd}`);
execSync(cmd, { stdio: 'inherit' });
console.log(`Report generated: ${reportPath}`);
