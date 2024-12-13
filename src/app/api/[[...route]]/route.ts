import { httpHandler } from "@/server"

export const runtime = "edge"
export const preferredRegion = ['auto', 'iad1']

export { httpHandler as GET, httpHandler as POST }
