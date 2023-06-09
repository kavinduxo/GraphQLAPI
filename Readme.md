# GraphQLAPI

This is the README file for the "GraphQLAPI" project, which is built using GraphQL, Prisma, and MongoDB. The project runs using Node.js.

## Description

The "GraphQLAPI" project is a backend API that utilizes GraphQL as the query language and runtime for executing queries, mutations, and subscriptions. It leverages Prisma as the database toolkit and integrates with MongoDB as the underlying database.

The API allows clients to perform various operations on the data stored in the MongoDB database, including querying for specific data, modifying existing data, and subscribing to real-time updates.

## Technologies Used

The following technologies are used in the "GraphQLAPI" project:

- GraphQL: A query language and runtime for APIs. It enables clients to request specific data and provides a flexible approach to data fetching and manipulation.

- Prisma: A modern database toolkit that simplifies database access and manipulation. Prisma provides an intuitive and type-safe API for interacting with databases, including MongoDB.

- MongoDB: A popular NoSQL database that stores data in flexible, JSON-like documents. MongoDB offers high scalability, performance, and a flexible schema design.

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows running JavaScript code outside of a web browser, making it ideal for server-side development.

## Installation

To run the "GraphQLAPI" project locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/GraphQLAPI.git
   ```

2. Navigate to the project directory:

   ```shell
   cd GraphQLAPI
   ```

3. Install the dependencies using npm or yarn:

   ```shell
   npm install
   ```

   or

   ```shell
   yarn install
   ```

4. Set up the MongoDB connection:

   - Create a MongoDB database and obtain the connection string.

   - Update the Prisma configuration file (`prisma/schema.prisma`) with the MongoDB connection string.

5. Generate the Prisma client:

   ```shell
   npx prisma generate
   ```

6. Start the GraphQLAPI server:

   ```shell
   npm start
   ```

   The server will start running on `http://localhost:4000`.

## Usage

Once the server is running, you can use a GraphQL client tool (e.g., GraphQL Playground, Altair, or Apollo Studio Explorer) to interact with the API.

Access the GraphQL Playground by visiting `http://localhost:4000` in your browser. Here, you can explore the available schema, execute queries and mutations, and subscribe to real-time updates.

## Contributing

If you would like to contribute to the "GraphQLAPI" project, please follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository locally:

   ```shell
   git clone https://github.com/your-username/GraphQLAPI.git
   ```

3. Create a new branch for your changes:

   ```shell
   git checkout -b feature/your-feature-name
   ```

4. Make your modifications and additions.

5. Commit your changes:

   ```shell
   git commit -m "Add your commit message"
   ```

6. Push your changes to your forked repository:

   ```shell
   git push origin feature/your-feature-name
   ```

7. Open a pull request on the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
