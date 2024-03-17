import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    // Get the visitor's IP address
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.ip || '0.0.0.0';

    // Record the visitor's IP address
    try {
        // Check if the visitor already exists
        const existingVisitor = await prisma.visitor.findUnique({
            where: { ip: String(ip) },
        });
        // If the visitor doesn't exist, create a new record
        if (!existingVisitor) {
            await prisma.visitor.create({
                data: { ip: String(ip) },
            });
        }
        // Count the total number of visitors
        const visitorCount = await prisma.visitor.count();

        // Return the visitor count
        return new NextResponse(JSON.stringify({ visitorCount }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: 'Error recording visit' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
