import UserRepository from './users.respository.js'
import PersonRepository from './persons.repository.js'
import {user} from '../dao/sql/users.sql.js'
import {person} from '../dao/sql/persons.sql.js'

export const UserService = new UserRepository(user)
export const PersonService = new PersonRepository(person)
