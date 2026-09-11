'use client';
import { useTheme } from '@/store/theme';
import Tasks from '@/components/Tasks';
export default function Home(){
 const theme=useTheme(s=>s.theme); const toggle=useTheme(s=>s.toggle);
 return <main className={theme}><div className="wrap"><div className="top"><div><h1>Task Manager</h1><p>Zustand + TanStack Query</p></div><button onClick={toggle}>{theme==='light'?'🌙 Dark':'☀️ Light'}</button></div><Tasks/></div></main>;
}
