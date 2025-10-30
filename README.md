# Tryum Landing Comercial

Landing page em Next.js 16 (App Router) com React 19, Tailwind v4 e componentes Radix.

## Requisitos
- Node.js 20+
- pnpm (via Corepack)

## Instalação
```powershell
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
```

## Desenvolvimento
```powershell
pnpm dev
```

## Lint e formatação
```powershell
pnpm lint
pnpm format
```

## Build e produção
```powershell
pnpm build
pnpm start
```

## Tecnologias
- Next.js 16, React 19
- Tailwind CSS v4 (postcss plugin)
- Radix UI + componentes utilitários
- ESLint (flat config) + Prettier

## Observações
- Checagens de TypeScript no build estão ativas (sem ignorar erros).
- Otimização de imagens do Next está habilitada por padrão.
- Tema claro/escuro com `next-themes`; altere `defaultTheme` em `app/layout.tsx`.
