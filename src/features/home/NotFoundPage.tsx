import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="flex flex-col items-start gap-4">
      <h1 className="font-heading text-3xl font-bold">Página não encontrada</h1>
      <Link to="/" className="text-primary underline underline-offset-4">
        Voltar para o início
      </Link>
    </section>
  )
}
