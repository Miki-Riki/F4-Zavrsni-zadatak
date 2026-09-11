import { NextResponse } from 'next/server';
import { tasks } from '../route';
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const body = await req.json();
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return NextResponse.json({ message: 'Nije pronađeno' }, { status: 404 });
  Object.assign(task, body); return NextResponse.json(task);
}
