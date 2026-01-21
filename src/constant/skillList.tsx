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
      description: `• 시맨틱 태그를 활용해 접근성과 구조를 고려한 마크업을 작성합니다.
      • 폼 요소/메타 태그/SEO 기본 구조를 이해하고 적용할 수 있습니다.
      `,
    },
    {
      SkillIcon: (
        <IconBackground>
          <CssIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'CSS',
      description:
        '• Flex/Grid 기반 레이아웃을 설계하고 반응형 UI를 구현할 수 있습니다.',
    },
    {
      SkillIcon: (
        <IconBackground>
          <JavascriptIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Javascript',
      description: `• ES6+ 문법으로 비동기 로직(Promise/async-await)을 포함한 코드를 작성합니다.
      • 배열/객체 기반 데이터 가공과 상태 흐름을 안정적으로 다룰 수 있습니다.
      `,
    },
    {
      SkillIcon: (
        <IconBackground>
          <TypeScript className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Typescript',
      description:
        '• 타입으로 도메인 모델을 명확히 정의하고, 런타임 오류를 줄이는 코드를 지향합니다.',
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
      description: `• 컴포넌트 설계와 상태 분리를 통해 유지보수 가능한 UI 구조를 만듭니다.
        • 재사용 가능한 공통 컴포넌트와 UI 패턴을 만들어 적용한 경험이 있습니다.
        `,
    },
    {
      SkillIcon: (
        <IconBackground>
          <NextIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'NextJS',
      description: `• App Router 기반으로 라우팅/레이아웃/서버-클라이언트 컴포넌트를 구성할 수 있습니다.
			• SSR/CSR을 상황에 맞게 선택하고, 데이터 패칭 구조를 설계한 경험이 있습니다.
      • API Route(또는 Route Handler)와 미들웨어를 활용한 기능 구현 경험이 있습니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <AxiosIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Axios',
      description: `• interceptors로 인증 토큰 처리, 공통 에러 핸들링 등 요청 레이어를 표준화합니다.
			• API 모듈을 분리해 재사용성과 유지보수성을 높이는 방식으로 사용합니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <TailwindCssIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'TailwindCSS',
      description: `• 디자인 토큰(색/간격/타이포)을 기준으로 일관된 UI를 빠르게 구현합니다.`,
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
      description: `• 전역 상태 관리를 위해 Zustand를 사용한 경험이 있습니다.
• 컴포넌트 간 상태 공유와 상태 흐름을 단순하게 유지하는 데 활용했습니다.
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
      description:
        '• 핵심 UI 플로우 중심으로 테스트를 작성하며 점진적으로 범위를 넓히고 있습니다.',
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
      description: `• 개발/배포 환경 차이를 줄이기 위해 Dockerfile로 빌드/실행 환경을 구성해본 경험이 있습니다.
      • 환경변수/빌드 단계 분리를 고민하며 재현 가능한 실행 환경을 만들었습니다.
`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <GitIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Git',
      description:
        '• 충돌 해결 및 브랜치 전략(기능 브랜치 기반)으로 협업한 경험이 있습니다.',
    },
    {
      SkillIcon: (
        <IconBackground>
          <GithubIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Github',
      description: `• PR 기반 코드리뷰 흐름에서 이슈/커밋/리뷰를 통해 협업한 경험이 있습니다.
      • GitHub Actions 등 CI 설정을 학습/적용하며 품질을 자동화하려고 노력합니다.
			`,
    },
    {
      SkillIcon: (
        <IconBackground>
          <VercelIcon className={styles.svg} width="0" height="0" />
        </IconBackground>
      ),
      title: 'Vercel',
      description:
        '• Next.js 프로젝트를 Vercel로 배포하고, 환경 변수/빌드 설정을 관리한 경험이 있습니다.',
    },
  ],
]

export default SkillList
