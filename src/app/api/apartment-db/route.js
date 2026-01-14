import {
    createEntity,
    deleteEntity,
    getAllEntities,
    updateEntity
} from "@/app/server/generic-db-service";
import {
    NextResponse
} from "next/server";

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

    const newApartment = await createEntity(apartment, entityName);



    return Response.json(newApartment);

}

export async function PUT(req) {
    const apartment = await req.json();

    const updatedApartment = await updateEntity(apartment, entityName);

    return Response.json(updatedApartment);

}


export async function DELETE(req) {
    const reqData = await req.json();

    const id = reqData._id;

    const result = await deleteEntity(id, entityName);

    return Response.json(result);

}