import JSend from "../../helpers/JSend.js"
import {notion} from "../../3rd/notion.js"
export const TagController = {
    GetAll : async (req,res,next) => {
        const db = await notion.databases.retrieve({
            database_id : process.env.DATABASE_ID
        })
        const properties = db.properties
        res.json(JSend.SuccessResponse(properties))
    }

}