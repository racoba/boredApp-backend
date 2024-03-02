import { Request, Response, Router } from "express";
import jwt, { Secret, } from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserRepository from "../repositories/UserRepository";

export const Secret_Key: Secret = "safa325624egedhwey373u45u5u"
const authRouter = Router();
const userRepository = UserRepository.repository;

authRouter.post("/register", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userExists = await UserRepository.getUserByEmail(email);
        if (userExists) {
            return res.sendStatus(409)
        }
        const user = userRepository.create({
            ...req.body,
            password: hashedPassword,
        });

        await userRepository.save(user);

        return res.status(200).json(user);
    } catch (e) {
        console.error(e);
        return res.status(400);
    }
})

authRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await UserRepository.getUserByEmail(email);

        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.SECRET_KEY as Secret,
            {
                expiresIn: "1h"
            }
        );

        res.json({ token });
    } catch (e) {
        console.error("Error logging in: ", e);
        res.status(500).json({ message: "Server Error" });
    }
})

function verifyToken(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Acess Denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY as Secret)
        req.body.user = decoded;
        console.log(req.body.user);

        next();

    } catch (e) {
        console.error("Error verifying token: ", e);
        res.status(401).json({ message: "Invalid Token" });
    }
}

authRouter.get("/userinfo", verifyToken, async (req: Request, res: Response) => {
    try {
        const { userId } = req.body.user;
        const user = await UserRepository.getUserById(userId);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const { password, ...userInfo } = user;
        res.json({ user: userInfo });
    } catch (e) {
        console.error("Error fetching user info: ", e);
        res.status(500).json({ message: "Server Error" });
    }
})

export default authRouter;