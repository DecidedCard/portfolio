'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp } from '@/constant/framer-motion'
import { BlogIcon, GitHubIcon } from '../common/header/react-icons'
import { Links } from '@/constant/link'
import { useLoadingStore } from '@/store/useLoadingStore'

const ICONLIST = [
  { link: Links.velog, ICON: <BlogIcon size={30} /> },
  { link: Links.github, ICON: <GitHubIcon size={30} /> },
]

export default function Introduce() {
  const { isFinishing } = useLoadingStore()

  return (
    <motion.section
      className="flex h-screen flex-col justify-center"
      initial="init"
      animate={isFinishing ? 'on' : 'init'}
      transition={{ staggerChildren: 0.2, delayChildren: 1 }}
    >
      <motion.h1 className="text-accent-100 pb-8 text-2xl" variants={FadeUp}>
        프론트엔드 개발자
      </motion.h1>
      <motion.h2
        className="text-accent-200 pb-6 text-6xl font-bold"
        variants={FadeUp}
      >
        정해준 입니다.
      </motion.h2>
      <motion.h2
        className="text-primary-300 pb-8 text-4xl font-bold"
        variants={FadeUp}
      >
        문제를 끝까지 파고들며,
        <br /> 작은 개선을 반복하며 더 나은 사용자 경험을 만들어갑니다.
      </motion.h2>
      <motion.p
        className="text-text-200 max-w-145 pb-8 text-xl break-keep"
        variants={FadeUp}
      >
        제 웹 포트폴리오를 방문해 주셔서 진심으로 감사드립니다.
      </motion.p>

      <motion.ol className="text-primary-200 flex gap-4" variants={FadeUp}>
        {ICONLIST.map((obj, i) => (
          <Link key={i} href={obj.link} target="_blank">
            <li>{obj.ICON}</li>
          </Link>
        ))}
      </motion.ol>
    </motion.section>
  )
}
