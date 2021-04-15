https://www.youtube.com/watch?v=UXdfwTSTkc0

# SUPIT Projektni zadatak
Projektni zadatak za SUPIT, predmet na Algebri. Zaiskri ili neki k

## GitBash intro
Bio sam ti na kompjuter instalirao onaj GitBash. To ces koristit do daljnjega za rad na Gitu.

## git clone
Napravi folder ili si odredi destinaciju gdje zelis staviti ovaj projekt. Desnim klikom unutar foldera dobit ces opciju `GIT Bash here`.  
To stisni i napisi sljedece:  
`$ git clone https://github.com/JaViLuMa/SUPIT.git` (bez $).  
Ovom komandom napravis LOKALNI clone projekta na kojem mozes radit sto god hoces. Ako nesto zeznes i zelis ispocetka, to ces koristit.

## Branches, commitovi i ostale pizde materine
Branches mozes gledat na nacin kao da imas stablo:  
- *Deblo* je *ROOT* projekta
- Sve branches koje ces radit su grane  
  
Na kraju ce se ti branches ponovno spajati u ROOT projekta.

Brancheve mozes radit kad god, ALI recimo ako naprais NAVBAR, napravit ces branch posebno za to, napravis FOOTER; poseban branch za to.  
***IZBJEGAVAJ RADIT VISE BRANCHEVA U ISTO VRIJEME DOKLE GOD NISI GOTOV S PRIJASNJIM!!!***  
  
Recimo da ides radit FOOTER. Branch za njega ces napravit na ovaj nacin:  
`$ git checkout -b feature/footer` (feature/{NA CEMU GOD RADIS, AKO RADIS NA NAVBARU ONDA CE BITI feature/navbar itd. itd.})  
  
Ako zelis znati ako si dobro napravio, to mozes vidjeti ovdje:  
![Imgur](https://imgur.com/cwtmzE0.png)  

## Kako napraviti Pull Request
Pull request je ono sto nam omogucuje spremanje promjena u ROOT.  
  
Kada si u napravljenom branchu napravio zeljeni kod, promjene itd. onda to treba PUSHAT. To radis na sljedeci nacin:  
`$ git status` - Provjeravas gdje se dogodila promjena  
`$ git add .` - Nadodajes promjene za merge  
`$ git commit -m "Poruka o onome sto si radio"` - Napravi ovu poruku kratku ali preciznu. Ako si radio footer napisi "Napravljen footer"  
`$ git push origin feature/{IME BRANCHA}` - Ovime saljes na GitHub promjene  

## Otvaranje Pull Requesta
Sada ces morat otici na link glavnog projekta (https://github.com/JaViLuMa/SUPIT) i na vrhu projekta bi ti trebalo u zutom boxu pisati `CREATE PULL REQUEST`  
  
Nakon toga ce ti se otvoriti stranica gdje ces imat jedan zeleni gumb koji ces stisnut.  
  
Kada si to napravio, trebao bi doci na stranicu koja ima sljedece:
![Imgur2](https://imgur.com/3pQxaYm.png)
  
Stisnut ces taj `MERGE PULL REQUEST` i onda `CONFIRM MERGE`. Nakon toga ce ti se stvorit gumb `DELETE BRANCH` ako je sve kako spada. I to ces stisnut.  

## Pullanje promjena
Da bi kod sebe lokalno povukao promjene napisat ces sljedece komande:  
`$ git checkout feature/pocetniCommit`  
`$ git pull`  
  
I tako u krug :D
