import { CalloutVariant } from '../components/ui/Callout/Callout'

export type CalloutMock = {
  id: string
  variant: CalloutVariant
  title?: string
  content: string
}

export const CALLOUT_MOCKS: CalloutMock[] = [
  {
    id: '1',
    variant: 'note',
    title: 'Note',
    content: 'This API is still experimental and may change in the future.'
  }
]
