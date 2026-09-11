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
Prije memoizacije promjena stanja uzrokovala je ponovno renderiranje stavki liste, uključujući komponente čiji se podaci nisu promijenili.

Nakon primjene ```React.memo``` na stavke liste smanjen je broj nepotrebnih ponovnih renderiranja. Profiler je pokazao da se prilikom promjene stanja ponovno renderiraju samo komponente kojima su se promijenili propsi.

Tijekom profiliranja komponenta ```Tasks``` renderirala se približno 0.5–0.6 ms, što pokazuje da je renderiranje aplikacije brzo. Memoizacija je korisna jer kod većeg broja stavki sprječava nepotrebno renderiranje i time poboljšava performanse aplikacije.

Zaključak je da memoizaciju ne treba koristiti na svakoj komponenti, već nakon profiliranja i na komponentama kod kojih se može smanjiti broj nepotrebnih renderiranja.
