"use client"

import { SignUp } from "@clerk/nextjs"

const Page = ()=>{

    return(
        <div className="relative  w-full flex flex-1 items-center justify-center">
            <SignUp/>
        </div>
    )

}
export default Page
// export const runtime = 'edge'
