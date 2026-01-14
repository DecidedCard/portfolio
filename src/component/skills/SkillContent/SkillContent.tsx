import { SkillCategoryList } from '../Skills/Skills'

import IconBackground from '@/component/icons/IconBackground/IconBackground'

import styles from './SkillContent.module.css'
import SkillList from '@/constant/skillList'

type Props = {
  categoryIndex: number
}

export default function SkillContent({ categoryIndex }: Props) {
  return SkillCategoryList.map((cate) => (
    <div
      key={cate.index}
      className={
        categoryIndex === cate.index
          ? styles.contentFadeIn
          : styles.contentFadeOut
      }
    >
      <h3 className="text-text-100 mb-6 text-xl leading-10 font-semibold">
        Skill Stack <span className="text-accent-100">@ {cate.title}</span>
      </h3>
      {SkillList[cate.index].map(({ description, SkillIcon, title }, index) => (
        <ul key={cate.index + '' + index}>
          <li className="mb-4 flex gap-4">
            <IconBackground>{SkillIcon}</IconBackground>
            <div>
              <h3 className="text-accent-100 mb-2 text-xl">{title}</h3>
              <p className="text-text-200 text-lg whitespace-pre-line">
                {description}
              </p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  ))
}
