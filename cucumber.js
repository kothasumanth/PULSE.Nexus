const { resolve } = require('path');

module.exports = {
  default: {
    require: [
      'src/steps/**/*.ts'
    ],
    format: [
      'progress',
      'html:report.html'
    ],
    paths: [
      'features/**/*.feature' // Nexus-level features only
    ],
    parallel: 1,
    retry: 0
  }
};
