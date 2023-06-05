const Starship = `#graphql
  type Starship {
    name: String
    model: String
    manufacturer: String
    cost_in_credits: String
    length: String
    max_atmosphering_speed: String
    crew: String
    passengers: String
    cargo_capacity: String
    consumables: String
    hyperdrive_rating: String
    MGLT: String
    starship_class: String
    created: String
    edited: String
    url: String
    films: [Film]
    pilots: [Person]
  }

  type Starships {
    isCached: Boolean
    count: Int
    next: String
    previous: String
    results: [Starship]
  }

  type Query {
    allStarships(page: Int): Starships
    starship(id: Int!): Starship
  }
`;

export default Starship;
