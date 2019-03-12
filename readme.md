### Use apolo client to make the graphQL

https://github.com/apollographql/apollo-client

### Apollo server:

- Definition: Define the type of the data. (schema)
- Resolver: resolve.
- Subscription: web socket.

### Post with GraphQL.

No http.

### Gateway API

Make two http call within one query.

### An example with the Query

```
# Write your query or mutation here
query MyFirstQuery($withFather : Boolean = false) {
  characters {
    ...CHARACTER
    father @include(if: $withFather){
      ...CHARACTER
    }
  }
  houses{
    imageUrl
  }
  test: houses{ #alias
    imageUrl
  }
}

fragment CHARACTER on Character{ #use fragment for reuse
  id: key
  name,
  imageUrl
}
```
