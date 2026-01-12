import { PropsWithChildren } from 'react'

export default function IconBackground({ children }: PropsWithChildren) {
  return (
    <div className="border-accent-100 bg-accent-200 h-max grow-0 rounded-full border-2 p-1">
      {children}
    </div>
  )
}
