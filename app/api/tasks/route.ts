import { NextResponse } from 'next/server';
export type Task = { id: number; title: string; done: boolean };
let tasks: Task[] = [
  { id: 1, title: 'Nauči Zustand', done: true },
  { id: 2, title: 'Isprobaj TanStack Query', done: false },
  { id: 3, title: 'Profiliraj listu', done: false },
];
export async function GET(){ return NextResponse.json(tasks); }
export async function POST(req: Request){
  const body = await req.json();
  const task: Task = { id: Date.now(), title: body.title, done: false };
  tasks.push(task); return NextResponse.json(task, { status: 201 });
}
export { tasks };
