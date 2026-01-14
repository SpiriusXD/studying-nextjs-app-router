import { getAllEntities } from "@/app/server/generic-db-service";
import {NextResponse} from "next/server";

// export const apartments = [];

let id = 0;

const generateId = () => {
    return id++;
}
 
/*
o address: string
o rooms: number
o floor: number
o type: string
o isCommercial: Boolean
*price: number
 */
const entityName = "apartment";

export async function GET(req1) {

    const apartments = await getAllEntities(entityName);
   

    return Response.json(apartments);
}

export async function POST(req) {
    console.log(req.body)
    const apartment = await req.json();
    
    const newApartment = await createNewEn



    return Response.json(newApartment);

}

export async function PUT(req) {
    const updatedApartment = await req.json();

    const index = apartments.findIndex(item => item.id === updatedApartment.id);
    apartments[index] = updatedApartment;
    return Response.json(updatedApartment);

}


export async function DELETE(req) {
    const reqData = await req.json();

    const id = reqData.id;
    console.log("data " , id)

    const index = apartments.findIndex(item => item.id === id);
    if(index < 0) return Response.json({ message: "doesn't exist" }, { status: 400 });



    console.log("index = ", index)
    apartments.splice(index, 1);

    return Response.json(true);

}