// https://www.apollographql.com/docs/apollo-server/features/data-sources.html

const { RESTDataSource } = require('apollo-datasource-rest')

class CharacterDataSource extends RESTDataSource {
  get baseURL() {
    return 'https://game-of-throne-api.appspot.com/api/'
  }

  get characters() {
    return this.get('/characters')
  }
}

module.exports = CharacterDataSource
