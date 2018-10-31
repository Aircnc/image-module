// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
 testMatch: [
   '**/__tests__/**/*.js?(x)',
   '**/?(*.)+(spec|test).js?(x)',
 ],

 testPathIgnorePatterns: [
   '/node_modules/',
   '<rootDir>/__tests__/setup/',
 ],

 verbose: true,
 setupTestFrameworkScriptFile: '<rootDir>/__tests__/setup/jestSetup.js',

 moduleDirectories: [
   'node_modules',
 ],

 moduleFileExtensions: [
   'js',
   'jsx',
 ],

};
