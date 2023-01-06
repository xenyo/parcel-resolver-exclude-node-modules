const { Resolver } = require('@parcel/plugin');

module.exports = new Resolver({
  async resolve({ specifier }) {
    if (specifier.includes('node_modules')) {
      return { isExcluded: true }
    }
    return null;
  }
});
