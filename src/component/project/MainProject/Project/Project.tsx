'use client'

import useInterSectionCoord from '@/hook/useInterSectionCoord'
import { Project as ProjectType } from '@/types'
import { useState } from 'react'

import styles from './Project.module.css'
import Link from 'next/link'
import SpecialBtn from '@/component/common/button/SpecialBtn'
import NotionAnimate from '../NotionAnimate/NotionAnimate'

export default function Project({
  title,
  date,
  serviceMaintain,
  description,
  skillList,
  linkList,
  ImgComponent,
  detailSrc,
}: ProjectType) {
  const ref = useInterSectionCoord<HTMLDivElement>()
  const [isOpenDetail, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen((t) => !t)

  return (
    <div ref={ref} className={styles.project}>
      <div className={styles.projectCountent}>
        <h3 className={styles.projectOverline}>Main Project</h3>
        <h2 className={styles.projectTitle}>
          <Link href={'/'} target="_blank">
            {title}
          </Link>
        </h2>
        {serviceMaintain !== '' && (
          <span className="text-xs text-red-500">{serviceMaintain}</span>
        )}
        <p className="m-0 block md:mb-4">{date}</p>

        <div className={`${styles.projectDescription} `}>
          <p
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <ul className={styles.projectTechList}>
          {skillList.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <div className={styles.projectLinks}>{linkList}</div>
        <SpecialBtn className="z-20 mt-2" onClick={toggleIsOpen}>
          상세내용
        </SpecialBtn>
      </div>
      <div className={styles.projectImage}>{ImgComponent}</div>

      <NotionAnimate
        isOpen={isOpenDetail}
        src={detailSrc}
        toggleIsOpen={toggleIsOpen}
      />
    </div>
  )
}
