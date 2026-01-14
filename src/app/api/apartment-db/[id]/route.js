import { getEntity } from "@/app/server/generic-db-service";


export async function GET(req1, {params}) {
    const {id} =await params;

    console.log("id - ", id);
    
    const apartment = await getEntity("apartment", id);


    return Response.json(apartment);


}