export default class userDTO {
    constructor(user){
        this.user_id = user?.user_id || null
        this.email = user.email
        this.password = user.password
        this.role_id = user.role_id
        this.person_id = user.person_id
    }
}


