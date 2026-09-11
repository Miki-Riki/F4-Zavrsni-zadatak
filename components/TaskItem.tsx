'use client';
import { memo } from 'react';
export type Task = { id: number; title: string; done: boolean };
type Props = { task: Task; onToggle: (task: Task) => void };
function TaskItem({ task, onToggle }: Props) {
  return <div className="task"><span className={task.done ? 'done' : ''}>{task.title}</span><button onClick={() => onToggle(task)}>{task.done ? 'Vrati' : 'Gotovo'}</button></div>;
}
export default memo(TaskItem);
