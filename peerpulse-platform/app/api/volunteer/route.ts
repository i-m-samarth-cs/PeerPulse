import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { userId, communityId, duration, impact } = await req.json()

    const session = await prisma.volunteerSession.create({
      data: {
        userId,
        communityId,
        duration,
        impact,
        verified: true,
      },
    })

    // Award extra points for volunteer work
    await prisma.user.update({
      where: { id: userId },
      data: {
        points: { increment: duration * 2 },
      },
    })

    return NextResponse.json({ success: true, session })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to log volunteer session' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const sessions = await prisma.volunteerSession.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
    return NextResponse.json(sessions)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch volunteer sessions' }, { status: 500 })
  }
}
