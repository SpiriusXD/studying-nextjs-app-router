import {NextResponse} from "next/server";

export const apartments = [];

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

export async function GET(req1) {

    if (apartments.length < 3) {
        apartments.push({
            id: generateId(),
            address: "Hayezira 13 Petach Tikva",
            rooms: 1,
            floor: 2,
            type: "Industrial",
            isCommercial: true,
            price: 1800
        });
        apartments.push({
            id: generateId(),
            address: "Ezel 1 Petach Tikva",
            rooms: 2,
            floor: 1,
            type: "OLD",
            isCommercial: false,
            price: 2600
        });

        apartments.push({
            id: generateId(),
            address: "Savionim 6 Ariel",
            rooms: 4,
            floor: 3,
            type: "Karavan",
            isCommercial: false,
            price: 3300
        });
    }

    return Response.json(apartments);
}

export async function POST(req) {
    console.log(req.body)
    const newApartment = await req.json();
    newApartment.id = generateId();
    apartments.push(newApartment);
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
    console.log("index = ", index)
    apartments.splice(index, 1);

    if(index < 0) return Response.json({ message: "doesn't exist" }, { status: 400 });
    return Response.json(true);

}