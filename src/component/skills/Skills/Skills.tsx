'use client'

import { useState } from 'react'
import { SectionID } from '@/constant/sectionId'
import WithFadeUpTranslate from '../../container/WithFadeUpTranslate'
import SectionContainer from '../../section/SectionContainer'
import SkillContent from '../SkillContent/SkillContent'

import styles from './Skills.module.css'

export const SkillCategoryList = [
  { index: 0, title: 'Language', class: 'skillTabActive0' },
  { index: 1, title: 'FrontEnd', class: 'skillTabActive1' },
  { index: 2, title: 'ETC', class: 'skillTabActive2' },
]

export default function Skills() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  return (
    <SectionContainer
      title="Skills"
      count="02."
      className="mx-0 min-h-125 md:mx-6"
      id={SectionID.skills}
    >
      <WithFadeUpTranslate>
        <div className="flex flex-col md:flex-row">
          <div className={styles.tabList}>
            {SkillCategoryList.map((obj) => (
              <button
                key={obj.title}
                className={`${styles.tabBtn} ${
                  obj.index === currentTitleIndex ? 'text-accent-100' : ''
                }`}
                onClick={() => setCurrentTitleIndex(obj.index)}
              >
                {obj.title}
              </button>
            ))}
            <div
              className={`${styles.skillTabActive} ${styles[SkillCategoryList[currentTitleIndex].class]}`}
            />
          </div>

          <div className="relative mt-6 ml-8 max-md:ml-0 md:mt-0">
            <SkillContent categoryIndex={currentTitleIndex} />
          </div>
        </div>
      </WithFadeUpTranslate>
    </SectionContainer>
  )
}
