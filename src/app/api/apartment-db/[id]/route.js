import {apartments} from "@/app/apartment/route";


export async function GET(req1, {params}) {
    const {id} =await params;

    console.log("id = " + id)

    const apartment = apartments.filter(item=>{
        return item.id === +id;
    })[0];


    return Response.json(apartment);


}