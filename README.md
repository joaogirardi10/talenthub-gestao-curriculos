# TalentHub — Sistema de Gestão de Currículos

Projeto acadêmico **Trabalho 2 — Etapa 1 (Frontend)**. Sistema de gestão de currículos criado em Next.js App Router, com interfaces responsivas e persistência local demonstrativa.

## Tecnologias
- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS e componentes no padrão **shadcn/ui** (`components/ui`)
- React Hook Form + Yup (`useFieldArray` para experiências e formações)
- `react-input-mask-next` para máscaras de CPF, telefone e datas
- Sonner para notificações, SweetAlert2 para confirmações
- Lucide React, `next/image` e carregamento simulado com Skeleton

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Para compilar em modo de produção:

```bash
npm run build
npm start
```

## Rotas
| Caminho | Função |
| --- | --- |
| `/` | Landing page |
| `/curriculos/visualizar` | Listagem e busca em tempo real por nome ou cargo |
| `/curriculos/visualizar/[id]` | Detalhes do candidato e opção para excluir |
| `/curriculos/cadastrar` | Cadastro com validações, máscaras e campos dinâmicos |

## Recursos
- Página inicial com benefícios e profissionais em destaque
- Cards com nome, cargo, localização e resumo
- Perfil completo com experiência, formação, competências e contatos
- Cadastro validado com React Hook Form + Yup, erros específicos no Sonner
- Adicionar e remover múltiplas experiências e formações; validação individual de cada registro
- Máscaras para CPF, telefone, nascimento e períodos de formação/experiência
- Upload **simulado** de imagem: o nome do arquivo aparece, mas **a imagem não é armazenada**; será usado um avatar de `public/avatars`
- Persistência demonstrativa em `localStorage`, iniciada com três currículos fictícios
- Empty state para lista vazia ou busca sem resultados; skeleton ao carregar
- Feedback de sucesso, erros e confirmação de exclusão
- Navegação com destaque de rota ativa, layout responsivo e componentes reutilizáveis

## Avisos importantes
Este projeto é **apenas a etapa frontend**: não existe backend, banco de dados ou autenticação. A rota amigável não substitui proteção real; para proteger dados pessoais em produção seriam necessários autenticação, autorização e armazenamento seguro. **Não use CPFs nem dados pessoais reais** nesta demonstração. Os registros do `localStorage` ficam somente no mesmo navegador e dispositivo. O botão “Imprimir” usa a impressão nativa do navegador.

## Organização

```text
app/                 # Layout e rotas Next.js
components/ui/       # Componentes de UI reutilizáveis (padrão shadcn)
components/layout/   # Cabeçalho e rodapé
components/curriculos/ # Listagem, formulário e detalhe
lib/                 # Tipos, dados mockados e persistência
public/avatars/      # Avatares SVG locais
```

## Entrega acadêmica
Inclua no envio o link deste repositório e, opcionalmente, do deploy na Vercel. Preserve o histórico de commits.
