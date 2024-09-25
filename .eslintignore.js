// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    jquery: true,
    // other environments if necessary
  },
  globals: {
    define: "readonly", // Make 'define' a global variable
    // Add other global variables here if necessary
  },
  rules: {
    // ... other rules ...
    // If you want to disable specific rules, uncomment and add them here
    // 'no-undef': 'off', // Example: Disable the no-undef rule
    // 'no-unused-expressions': 'off', // Example: Disable the no-unused-expressions rule
  },
  // ... other configurations if necessary ...
};
