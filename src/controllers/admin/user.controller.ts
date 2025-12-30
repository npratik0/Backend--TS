import { AdminUserService } from "../../services/admin/user.service";
import { Request, Response } from "express";
import z, { success } from 'zod';
import { CreateUserDTO } from "../../dtos/user.dto";
import { UserService } from "../../services/user.service";

let userService = new UserService();
let adminUserService = new AdminUserService();
export class AdminUserController {
    async createUser(req: Request, res: Response) {
        // can be same as AuthCOntroller.register
        try{
                    //validate request body
                    const parsedData = CreateUserDTO.safeParse(req.body);
                    if(!parsedData.success){ // validation failed
                        return res.status(400).json(
                            {
                                success: false, message: z.prettifyError(parsedData.error)
                            }
                        )
                    }
                    const userData: CreateUserDTO = parsedData.data;
                    const newUser = await userService.createUser(userData);
                    return res.status(201).json({
                        success: true, message: "User Created", data: newUser
                    });
                    
                }catch(error: Error | any){ // exception handling
                    return res.status(500).json(
                        {success: false, message: error.message || "Internal Service Error"}
                    )
                }
    }
    async getOneUser(req: Request, res: Response) {
        try {
            const userId = req.params.id; // routes /:id
            const user = await adminUserService.getOneUser(userId);
            return res.status(200).json(
                { success: true, data: user }
            );
        } catch (error: Error | any) {
            return res.status(error.statusCode ?? 500).json(
                { success: false, message: error.message || "Internal Server Error" }
            );
        }
    }
}