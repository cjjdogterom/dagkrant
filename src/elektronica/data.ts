import { BASIS } from './basis'
import { INSTALLATIE } from './installatie'
import { METEN } from './meten'
import type { ElektroLes } from './types'

export type { ElektroLes }

export const ELEKTRONICA: ElektroLes[] = [...BASIS, ...METEN, ...INSTALLATIE]
