'use client';
import { FormEvent, useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import TaskItem, { Task } from './TaskItem';

async function getTasks(): Promise<Task[]> { const r=await fetch('/api/tasks'); if(!r.ok) throw new Error('Greška'); return r.json(); }
async function addTask(title:string): Promise<Task> { const r=await fetch('/api/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title})}); if(!r.ok) throw new Error('Greška'); return r.json(); }
async function updateTask(task:Task): Promise<Task> { const r=await fetch(`/api/tasks/${task.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({done:!task.done})}); if(!r.ok) throw new Error('Greška'); return r.json(); }

export default function Tasks(){
 const qc=useQueryClient(); const [title,setTitle]=useState('');
 const {data=[],isPending,isError}=useQuery({queryKey:['tasks'],queryFn:getTasks});
 const add=useMutation({mutationFn:addTask,
  onMutate:async(title)=>{await qc.cancelQueries({queryKey:['tasks']}); const previous=qc.getQueryData<Task[]>(['tasks'])??[]; const optimistic:Task={id:-Date.now(),title,done:false}; qc.setQueryData<Task[]>(['tasks'],[...previous,optimistic]); return {previous};},
  onError:(_e,_v,ctx)=>qc.setQueryData(['tasks'],ctx?.previous),
  onSettled:()=>qc.invalidateQueries({queryKey:['tasks']})});
 const edit=useMutation({mutationFn:updateTask,onSuccess:()=>qc.invalidateQueries({queryKey:['tasks']})});
 const toggle=useCallback((task:Task)=>edit.mutate(task),[edit]);
 const submit=(e:FormEvent)=>{e.preventDefault(); const value=title.trim(); if(!value)return; add.mutate(value); setTitle('');};
 if(isPending)return <p>Učitavam...</p>; if(isError)return <p>Greška pri dohvatu.</p>;
 return <><form className="form" onSubmit={submit}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Nova stavka"/><button>Dodaj</button></form>{data.map(t=><TaskItem key={t.id} task={t} onToggle={toggle}/>)}</>;
}
