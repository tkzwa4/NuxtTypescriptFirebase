import { firestore } from 'firebase/app'

export type User = {
  id?: string
  name: string
  status: number
  isRequiredInfoFilled: boolean
  createdAt: firestore.Timestamp | null
  updatedAt: firestore.Timestamp | null
}

export const blankUser: User = {
  name: '',
  status: 0,
  isRequiredInfoFilled: false,
  createdAt: null,
  updatedAt: null,
}
