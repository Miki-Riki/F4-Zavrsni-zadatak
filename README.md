# F4 završni zadatak

Next.js aplikacija koja demonstrira:
- Zustand za globalno UI stanje (tema), uz selektore
- TanStack Query `useQuery` za dohvat liste
- `useMutation` + `invalidateQueries` za dodavanje i izmjenu
- optimistički update pri dodavanju
- `memo` za stavke liste i `useCallback` za stabilan callback

## Pokretanje
```bash
npm install
npm run dev
```
Otvori http://localhost:3000

## Profiler izvještaj
U React DevTools > Profiler napravi Record prije i poslije memoizacije `TaskItem` komponente. Nakon memoizacije, kod promjene nevezanog UI stanja (npr. teme) pojedine stavke liste ne bi se trebale nepotrebno ponovno renderirati kada su im propsi nepromijenjeni. U izvještaj za predaju upiši stvarno opažanje iz svog Profiler snimanja.
