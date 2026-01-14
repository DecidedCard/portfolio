'use client'

import { ComponentProps, PropsWithChildren } from 'react'
import WithFadeUpTranslate from '../container/WithFadeUpTranslate'

import styles from './SectionContainer.module.css'

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
        <h2 className={styles.sectionHeader}>
          <span className="text-accent-100 text-xl">{count}</span>
          <p className="text-text-200 text-3xl font-semibold">{title}</p>
        </h2>
      </WithFadeUpTranslate>
      {children}
    </section>
  )
}
