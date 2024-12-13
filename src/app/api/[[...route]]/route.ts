import { httpHandler } from "@/server"

export const runtime = "edge"
export const preferredRegion = 'auto'

export { httpHandler as GET, httpHandler as POST }
