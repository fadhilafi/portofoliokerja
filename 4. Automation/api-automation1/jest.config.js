const moment = require('moment');

module.exports = {
    setupFiles: ['<rootDir>/config/config.js'],
    testTimeout: 30000,
    // reporters: [
    //     'default',
    //     [
    //       'jest-html-reporters',
    //       {
    //         publicPath: './api-automation/reports/html-report',
    //         filename: `report_${moment().format('YYYY-MM-DD_HH-mm-ss')}.html`,
    //         expand: true,
    //       },
    //     ],
    //   ],
};
