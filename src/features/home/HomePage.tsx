import { useState } from 'react'

import { Button } from '@/shared/ui/button'

export function HomePage() {
  const [interested, setInterested] = useState(false)

  return (
    <section className="flex flex-col items-start gap-6">
      <h1 className="font-heading text-4xl font-bold tracking-tight">
        Do PDF do edital ao seu plano de estudos
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Envie o edital, informe suas horas disponíveis e receba um cronograma até a prova, ponderado
        pelos pesos de cada disciplina.
      </p>
      <Button
        size="lg"
        onClick={() => {
          setInterested(true)
        }}
        disabled={interested}
      >
        {interested ? 'Avisaremos quando abrir' : 'Quero participar do beta'}
      </Button>
    </section>
  )
}
