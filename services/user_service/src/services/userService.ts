import User from "../models/user";

class UserService {
    public async createUser(data: {}) {
        User.create(data);
    }

    // todo: create filters
    public async getUser() {
        User.findAll();
    }
}

export default new UserService();
