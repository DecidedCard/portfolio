'use client'

import { useState } from 'react'
import { SectionID } from '@/constant/sectionId'
import WithFadeUpTranslate from '../../container/WithFadeUpTranslate'
import SectionContainer from '../../section/SectionContainer'
import SkillContent from '../SkillContent/SkillContent'

export const SkillCategoryList = [
  { index: 0, title: 'Language', class: 'skillTabActiveter0' },
  { index: 1, title: 'FrontEnd', class: 'skillTabActiveter1' },
  { index: 2, title: 'ETC', class: 'skillTabActiveter2' },
]

export default function Skills() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  return (
    <SectionContainer
      title="Skills"
      count="02."
      className="mx-0 min-h-[500px] md:mx-6"
      id={SectionID.skills}
    >
      <WithFadeUpTranslate>
        <div className="flex flex-col md:flex-row">
          <div className="tabList">
            {SkillCategoryList.map((obj) => (
              <button
                key={obj.title}
                className={`tabBtn ${
                  obj.index === currentTitleIndex ? 'text-green' : ''
                }`}
                onClick={() => setCurrentTitleIndex(obj.index)}
              >
                {obj.title}
              </button>
            ))}

            <div
              className={`skillTabActiveter ${SkillCategoryList[currentTitleIndex].class}`}
            ></div>
          </div>

          <div className="relative mt-6 ml-8 max-md:ml-0 md:mt-0">
            <SkillContent categoryIndex={currentTitleIndex} />
          </div>
        </div>
      </WithFadeUpTranslate>
    </SectionContainer>
  )
}
