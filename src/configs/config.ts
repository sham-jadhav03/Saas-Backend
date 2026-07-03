import { config as dotenvConfig } from "dotenv"
import { z } from "zod";

dotenvConfig();

const envSchema = z.object({
    NODE_ENV:z.enum(["development", "production", "test"]),
    PORT: z.coerce.number(),
    MONGO_URI:z.string().min(1),
    JWT_SECRET:z.string().min(32)
})

const parsed = envSchema.safeParse(process.env);

if(!parsed.success){
    console.error(parsed.error.format());
    process.exit(1);
}

export const env = parsed.data;