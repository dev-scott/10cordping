import { db } from "@/db"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"
import {startOfMonth} from "date-fns"
export const categoryRouter = router({
    getEventCategories:privateProcedure.query( async({c,ctx})=>{
        
        const categories = await db.eventCategory.findMany({
            where:{userId:ctx.user.id},
            select:{
                id:true,
                name:true,
                emojie:true,
                updatedAt:true,
                createdAt:true,
            },
            orderBy:{updatedAt:"desc"}
            
        })

        const categoriesWithCounts = await Promise.all(
            categories.map(async ()=>{

                const now = new Date()
                const firstDayOfMonth = startOfMonth(now)

                const [ ] = Promise.all([
                    db.event.findMany({
                        where:{eventCategoryId: { id:category.id}}
                    })
                ])

            })
        )
        
        return c.json({})

    })
})
