import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        user: { select: { name: true, email: true, image: true } },
        responses: { include: { user: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(tickets)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tickets' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, description, priority, category } = await req.json()

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        priority,
        category,
        userId: user!.id,
      },
    })

    return NextResponse.json(ticket)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create ticket' }, { status: 500 })
  }
}
