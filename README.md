# Labo-String: CLI per Utilità su Stringhe

Labo-String è una semplice interfaccia a riga di comando (CLI) sviluppata in Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità

- **Inversione di una stringa**
- **Verifica se una stringa è palindroma**
- **Troncamento di una stringa a una lunghezza massima specificata**
- **Conteggio delle occorrenze di ciascun carattere in una stringa**

## Requisiti

- [Node.js](https://nodejs.org/) (versione 14 o superiore)

## Installazione

Clona il repository e installa le dipendenze:

```bash
git clone https://github.com/AlbyMiscy/ssgs-labo-02.git
cd ssgs-labo-02
npm ci
```

## Utilizzo

Esegui il programma tramite Node.js passando i parametri richiesti:

```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

## Test 

Per eseguire i test:

```bash
npm test
```
> Nota: Questo comando eseguirà tutti i test Jest in `stringUtils.test.js` e genererà automaticamente un report nella cartella `coverage`. 

### Opzioni disponibili

- `1`: Inverti Stringa  
  Esempio: `node index.js 1 "ciao"`
- `2`: Controlla Palindromo  
  Esempio: `node index.js 2 "anna"`
- `3`: Tronca Stringa (richiede lunghezza massima)  
  Esempio: `node index.js 3 "esempio" 4`
- `4`: Conta Caratteri  
  Esempio: `node index.js 4 "banana"`

## Struttura del progetto

```
ssgs-labo-02/
├── index.js
├── package.json
├── .gitignore
├── README.md
└── src/
    └── stringUtils.
└── test/
    └── stringUstils.test.js
```