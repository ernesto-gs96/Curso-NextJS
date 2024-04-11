import prisma from '@/lib/prima'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

    await prisma.todo.deleteMany(); // DELETE sin WHERE
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            email: 'ernesto_gs96@outlook.com',
            password: bcrypt.hashSync('1Qwertyu'),
            roles: ['admin','client','super-user'],
            todos: {
                create: [
                    { description: 'Actualizar CV', complete: true },
                    { description: 'Actualizar portafolio', complete: true  },
                    { description: 'Terminar curso Nextjs' },
                    { description: 'Terminar curso JAVA' },
                    { description: 'Terminar curso DJANGO' },
                ]
            }
        }
    });

    // await prisma.todo.createMany({
    //     data: [
    //         { description: 'Piedra del alma', complete: true },
    //         { description: 'Piedra del poder' },
    //         { description: 'Piedra del tiempo' },
    //         { description: 'Piedra del espacio' },
    //         { description: 'Piedra del realidad' },
    //     ]
    // });
    
    // const todo = await prisma.todo.create({
    //     data: { description: 'Piedra del alma', complete: true }
    // });

    // console.log(todo);

  return NextResponse.json( { message: 'Seed Excecuted' } )
}