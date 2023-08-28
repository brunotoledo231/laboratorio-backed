import userDTO from '../dao/dto/UserDTO.js'


export default class UserRepository {
    constructor(user) {
        this.user = user
    }
   
    getAllUsers = async() => {
        return await this.user.getAll()
    }
    createUser = async(user) => {
        const newUser = new userDTO(user)
        return await this.user.create(newUser)
    }
    updateUser = async (userName, updatedUserData) => {
        try {
            const updated = await this.user.update(userName, updatedUserData);
            return updated;
        } catch (error) {
            throw error;
        }
    };
    
    getUserByEmail = async(email) => {
        return await this.user.getOneByEmail(email)
    }
    getUserById = async(id) => {
        return await this.user.getOneById(id)
    }
    deleteUserById = async(id) => {
        return await this.user.delete(id)
    }
}