import type { ReactNode } from 'react'
import { SCHEMAS1 } from './schemas1'
import { SCHEMAS2 } from './schemas2'
import { SCHEMAS3 } from './schemas3'

const ALLE_SCHEMAS: Record<number, ReactNode> = { ...SCHEMAS1, ...SCHEMAS2, ...SCHEMAS3 }

export function ElektroSchema({ lesId }: { lesId: number }) {
  const svg = ALLE_SCHEMAS[lesId]
  if (!svg) return null
  return <div className="kr-elektro-schema">{svg}</div>
}
