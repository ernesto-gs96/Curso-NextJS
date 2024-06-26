import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prima";
import { NextResponse, NextRequest } from "next/server";
import * as yup from 'yup';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    
    const take = Number( searchParams.get("take") ?? '10' );
    const skip = Number( searchParams.get("skip") ?? '0' );

    if (isNaN(take)) {
        return NextResponse.json({ message: 'Take tiene que se un numero' }, { status: 400 });
    }

    if (isNaN(skip)) {
        return NextResponse.json({ message: 'Skip tiene que se un numero' }, { status: 400 });
    }

    const todos = await prisma.todo.findMany({
        take: take,
        skip: skip
    });

    return NextResponse.json(todos);
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
})

export async function POST(request: Request) {

    const user = await getUserSessionServer();
    if ( !user ) {
        return NextResponse.json('No autorizado',{ status: 401 });
    }

    try {
        // TODO: Mejorar para mandar error si envio atributos extras
        const { description, complete, ...rest } = await postSchema.validate( await request.json() );
        const todo = await prisma.todo.create({ data: { description, complete, userId: user.id } });
        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json( error, { status: 400 } );
    }
}

export async function DELETE(request: Request) {
    const user = await getUserSessionServer();
    if ( !user ) {
        return NextResponse.json('No autorizado',{ status: 401 });
    }
    try {
        const todo = await prisma.todo.deleteMany({ where: { complete: true, userId: user.id } });
        return NextResponse.json('Borrados');
    } catch (error) {
        return NextResponse.json( error, { status: 400 } );
    }
}