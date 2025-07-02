import { Redis } from "@upstash/redis";

if (!process.env.KV_REST_API_URL) {
  throw new Error(
    "KV_REST_API_URL is not defined. Please check your environment variables."
  );
}

if (!process.env.KV_REST_API_TOKEN) {
  throw new Error(
    "KV_REST_API_TOKEN is not defined. Please check your environment variables."
  );
}

export const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});
