const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    """
    Lists SpaceX launches.
    """
    launches(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): LaunchConnection!
    """
    Get a launch by ID.
    """
    launch(id: ID!): Launch
    """
    Get the loggedin user.
    """
    me: User
  }

  """
  Simple wrapper around our list of launches that contains a cursor to the
  last item in the list. Pass this cursor to the launches query to fetch
  results after these.
  """
  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  """
  The rocket launch.
  """
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  """
  The rocket.
  """
  type Rocket {
    id: ID!
    name: String
    type: String
  }

  """
  The user.
  """
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  """
  The rocket launch mission.
  """
  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  """
  Mission's patch size.
  """
  enum PatchSize {
    SMALL
    LARGE
  }

  type Mutation {
    """
    Book trips.
    """
    bookTrips(launchIds: [ID]!): TripUpdateResponse!

    """
    Cancel one of your trips.
    """
    cancelTrip(launchId: ID!): TripUpdateResponse!

    """
    User login by email.
    """
    login(email: String): String
  }

  """
  The trip update mutantions response.
  """
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
