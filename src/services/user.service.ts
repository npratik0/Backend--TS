import { CreateUserDTO, LoginUserDTO } from "../dtos/user.dto";
import { HttpError } from "../errors/http-error";
import { UserRepository } from "../repositories/user.repository";
import bcryptjs from "bcryptjs"

let userRepository = new UserRepository();

export class UserService{
    async createUser(data:CreateUserDTO) {
        // buhsiness logic before creating User
        const emailCheck = await userRepository.getUserByEmail(data.email);
        if(emailCheck){
            throw new Error("Email already in use");
        }
        const usernameCheck = await userRepository.getUserByUsername(data.username);
        if(usernameCheck){
            throw new Error("Username already in use");
        }

        // hash password
        const hashedPassword = await bcryptjs.hash(data.password,10); //10 - complexity
        data.password = hashedPassword;

        // Create user
        const newUser = await userRepository.createUser(data);
        return newUser;
    }

    async loginUser(data: LoginUserDTO){
        const user = await userRepository.getUserByEmail(data.email);
        if(!user){
            throw new HttpError(404, "User not found");
        }
        // compare password
        const validPassword = await bcryptjs.compare(data.password, user.password);
        // plaintext, hahed
        if(!validPassword){
            throw new HttpError(401, "Invalid Credentials");
        }
    }
}