const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input BookInput {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String, title: String, bookId: ID, image: String): User
        removeBook(bookId: ID!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }
`

module.exports = typeDefs