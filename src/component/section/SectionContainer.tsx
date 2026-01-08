'use client'

import { ComponentProps, PropsWithChildren } from 'react'
import WithFadeUpTranslate from '../container/WithFadeUpTranslate'

type Props = {
  title: string
  count: string
  className?: string
} & ComponentProps<'section'>

export default function SectionContainer({
  children,
  title,
  count,
  className,
  ...attr
}: PropsWithChildren<Props>) {
  return (
    <section className={`${className ? className : ''} mb-8 py-24`} {...attr}>
      <WithFadeUpTranslate>
        <h2 className="sectionHeader">
          <span className="text-green text-xl">{count}</span>
          <p className="text-3xl font-semibold">{title}</p>
        </h2>
      </WithFadeUpTranslate>
      {children}
    </section>
  )
}
