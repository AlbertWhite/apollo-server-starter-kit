// query from the real api or access to the database
const resolvers = {
  Character: {
    key: parent => parent.key || 1,
    father: parent => ({
      name: 'Dark Vador' // add another field into the schema
    })
  },
  Query: {
    characters: (parent, args, { dataSources }, infos) =>
      // first example for data source:
      dataSources.CharacterDataSource.characters

    // Second example:
    // api
    //   .get('/characters')
    //   .then(res => {
    //     return res.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    // Third example:
    // [
    //   {
    //     name: 'John Snow'
    //   },
    //   {
    //     key: 2,
    //     name: 'Arya Stark'
    //   }
    // ]
  }
}

module.exports = resolvers
