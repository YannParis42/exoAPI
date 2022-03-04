export interface ApiRandomUser {

  gender: string;

  name: {
    title: string,
    first: string,
    last: string
  }

  location: {

    street: {
      number: number
      name: string
    }

    city: string,
    state: string,
    country: string,
    postcode: number,
  }

  email: string

  dob: {
    date: Date
    age: number
  }

  cell: string

  picture: {
    large: string
  }
}
