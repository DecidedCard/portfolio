import Image from 'next/image'

import IconBackground from '@/component/icons/IconBackground/IconBackground'
import styles from '@/component/skills/SkillContent/SkillContent.module.css'

// language
import HtmlIcon from '../../public/assets/skills/icons/language/html-5.svg'
import CssIcon from '../../public/assets/skills/icons/language/css-3.svg'
import JavascriptIcon from '../../public/assets/skills/icons/language/javascript.svg'
import TypeScript from '../../public/assets/skills/icons/language/typescript-icon.svg'

// front
import ReactIcon from '../../public/assets/skills/icons/front/react.svg'
import NextIcon from '../../public/assets/skills/icons/front/nextjs-icon.svg'
import AxiosIcon from '../../public/assets/skills/icons/front/axios.svg'
import TailwindCssIcon from '../../public/assets/skills/icons/front/tailwindcss-icon.svg'
import ReactTestingLibraryIcon from '../../public/assets/skills/icons/front/testing-library.svg'

//etc
import DockerIcon from '../../public/assets/skills/icons/etc/docker-icon.svg'
import GitIcon from '../../public/assets/skills/icons/etc/git-icon.svg'
import GithubIcon from '../../public/assets/skills/icons/etc/github-octocat.svg'
import VercelIcon from '../../public/assets/skills/icons/etc/vercel-icon.svg'

const SkillList = [
  [
    {
      SkillIcon: (
        <IconBackground>
          <HtmlIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'HTML5',
      description: '• 기본적인 HTML 태그를 사용할 수 있습니다.',
    },
    {
      SkillIcon: (
        <IconBackground>
          <CssIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'CSS',
      description: '• 순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.',
    },
    {
      SkillIcon: (
        <IconBackground>
          <JavascriptIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Javascript',
      description: '• ES6+ 문법을 활용하여 코드를 작성 할 수 있습니다. ',
    },
    {
      SkillIcon: (
        <IconBackground>
          <TypeScript className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Typescript',
      description:
        '• 타입을 활용하여 명확한 코드를 작성할 수 있으며, 제네릭, 인덱싱, 유틸리티 타입을 사용할 수 있습니다.',
    },
  ],
  [
    {
      SkillIcon: (
        <IconBackground>
          <ReactIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'React',
      description:
        '• 리액트로 여러 프로젝트를 해봤으며, ContextAPI, useReducer, useState, useCallBack, useMemo, Suspense를 활용 할 수 있습니다.',
    },
    {
      SkillIcon: (
        <IconBackground>
          <NextIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'NextJS',
      description: `• 상황별로 SSG, SSR, CSR를 활용할 수 있습니다. 
			• middleware와 API를 작성할 수 있습니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <AxiosIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Axios',
      description: `• interceptors를 이용하여 에러와, 요청 전처리를 할 수 있습니다.
			• 재요청 로직을 프로젝트에 적용한 경험이 있습니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <TailwindCssIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'TailwindCSS',
      description: `• 최근 즐겨 사용하고 있습니다. 프로젝트에 적용한 경험이 있습니다.`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <div className="relative h-16 w-16 max-md:h-10 max-md:w-10">
            <Image
              src="/assets/skills/icons/front/zustand-icon.png"
              fill
              alt="zustand image"
            />
          </div>
        </IconBackground>
      ),
      title: 'Zustand',
      description: `• 최근 프로젝트에 전역 상태 관리를 위해 사용한 경험이 있습니다.
				• localStorage와 연동, reducer형태로 적용한 경험이 있습니다.
				`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <ReactTestingLibraryIcon
            className={styles.svg}
            width="0"
            height="0"
          />
        </IconBackground>
      ),
      title: 'React-Testing-Library',
      description: `• React-Testing-Library 사용하여 프로젝트에 적용한 경험이 있습니다.
			• 전체를 테스트 하지 않았지만, 어떻게 사용하는지를 알게되었습니다.
			`,
    },
  ],
  [
    {
      SkillIcon: (
        <IconBackground>
          <DockerIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Docker',
      description: `• NextJS 프로젝트를 Docker 파일을 작성하여 배포해 본 경험이 있습니다.
`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <GitIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Git',
      description: `• 코드 저장과 버전 기록을 위해 사용했습니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <GithubIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Github',
      description: `• 외부 저장과 협업을 위해 사용하였습니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <VercelIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Vercel',
      description: `• NextJS 프로젝트를 배포해 본 경험이 있습니다.
			`,
    },
  ],
]

export default SkillList
