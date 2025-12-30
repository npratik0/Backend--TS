import  jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/http-error";
import { JWT_SECRET } from "../config";
import { UserRepository } from "../repositories/user.repository";
import { success } from "zod";
import { IUser } from "../models/user.model";

declare global {
    namespace Express{
        interface Request {
            user? : Record<string,any> | IUser
        }
    }
}


// Adding user info to req object

const userRepository = new UserRepository();

export const authorizedMiddleware = 
    async (req: Request, res: Response, next: NextFunction) => {
        // if(req.headers && req.headers.authorization){
        //     return next();
        // }
        // return res.status(401).json({success: false, message: "Unauthorized"});
    }
