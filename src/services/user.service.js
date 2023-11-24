import User from "../models/user.model.js";

class UserService {
  static async findUserByEmail(email) {
    const user = await User.findOne({ email }).lean();
    return user;
  }

  static async findUserById(id) {
    const user = await User.findOne({ _id: id }).lean();
    return user;
  }

  static async createUser({ name, email, password, role, attributes }) {
    const user = await User.create({ name, email, password, role, attributes });
    return user;
  }
}

export default UserService;
