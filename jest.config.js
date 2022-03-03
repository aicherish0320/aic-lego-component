module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    '/!node_modules\\/lodash-es/',
    '<rootDir>/node_modules/(?!lodash-es)'
  ]
}
