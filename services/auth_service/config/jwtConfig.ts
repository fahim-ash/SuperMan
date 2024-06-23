export const jwtConfig = {
    secret: process.env.JWT_SECRET as any,
    expiresIn: process.env.JWT_EXPIRES_IN as string,
    algorithm: process.env.JWT_ALGORITHM as any,
};
