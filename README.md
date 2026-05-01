markdown# Phones App

A simple React + TypeScript app that fetches a list of devices from a REST API and lets you add new ones.

## What it does

- Fetches devices from `restful-api.dev/objects` on load
- Displays them in a card grid
- Has a form to add a new device via POST

## Stack

- React + TypeScript
- Vite
- CSS Modules

## Getting started

```bash
npm install
npm run dev
```

## Project structure

src/
├── api/
│ └── phones.ts # fetch and POST logic
├── components/
│ ├── Form.tsx
│ ├── PhonesList.tsx
│ └── PhonesComponent.tsx
├── types.ts
└── App.tsx

## Notes

The API is a public test API so POSTed devices won't actually persist — the response will look successful but the data resets. Good enough for demo purposes.

Extra: We can add custom eror Message for the error returned from the backend, but it should be shaped correctly
