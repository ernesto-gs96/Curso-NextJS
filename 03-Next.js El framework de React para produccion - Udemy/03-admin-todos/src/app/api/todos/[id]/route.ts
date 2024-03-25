import prisma from '@/app/lib/prima';
import { NextResponse, NextRequest } from 'next/server';

interface Segments {
    params: {
        id: string,
    }
}

export async function GET(request: Request, { params }: Segments) {

    const { id } = params;

    const todo = await prisma.todo.findUnique({
        where: {
            id: id
        }
    });

    if ( !todo ) {
        return NextResponse.json({ message: `todo con ${id} no existe` }, { status: 404 } )
    }

    return NextResponse.json(todo)
}

export async function PUT(request: Request, { params }: Segments) {

    const { id } = params;

    const todo = await prisma.todo.findUnique({
        where: {
            id: id
        }
    });

    if ( !todo ) {
        return NextResponse.json({ message: `todo con ${id} no existe` }, { status: 404 } )
    }

    const body = await request.json();

    const updateTodo = await prisma.todo.update({
        where: { id },
        data: { ...body }
    });

    return NextResponse.json(updateTodo)
}