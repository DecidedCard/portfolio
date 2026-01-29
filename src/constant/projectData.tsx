import { GitHubIcon, ShareIcon } from '@/component/common/header/react-icons'
import { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const PROJECT_DATA: Project[] = [
  {
    title: 'On’s',
    date: '2025.03 ~ 2025.08',
    serviceMaintain: '',
    description: `무인 매장을 운영하는 점주를 위한 통합 관리 대시보드 서비스입니다.
매출·재고·발주 데이터를 하나의 화면에서 확인할 수 있도록 설계했으며,
React Query 기반 데이터 패칭과 Recharts를 활용한 시각화를 구현했습니다.
상태 관리 구조를 직접 설계하며 실사용자를 고려한 대시보드 UX 개선에 집중했습니다.
    `,
    skillList: [
      'React',
      'NextJS (App Router)',
      'TypeScript',
      'React Query',
      'Zustand',
      'TailwindCSS',
      'Recharts',
      'Vercel',
    ],
    linkList: (
      <>
        <Link
          href={'https://github.com/DecidedCard/On-s-FE.git'}
          target="_blank"
        >
          <GitHubIcon size={20} />
        </Link>
      </>
    ),

    // TODO 이미지 선택 후 수정
    ImgComponent: (
      <Image src="/assets/project-images/haalnam-main.png" fill alt="이미지" />
    ),
    detailSrc: '/notion/1e5e6eb9de7a80cc8967f987b9eee87e', // TODO 추후 노션 작성 후 수정
  },
  {
    title: 'Credit Guard',
    date: '2024.08 (1개월 MVP)',
    serviceMaintain: '',
    description: `
실버링 인턴십 기간 동안 프론트엔드를 단독으로 담당한
부동산 계약 및 월세 납부 기반 신용 관리 서비스 MVP입니다.

임차인의 월세 납부 이력을 기반으로 신용 점수를 시각화하고,
계약서 관리, 월세 납부 현황, 신용도 분석 기능을 제공하는 모바일 중심 서비스입니다.

Next.js(App Router) 기반으로 전체 화면을 구현했으며,
Axios interceptor를 활용한 토큰 갱신 구조와
로그인·SMS 인증·신용 점수 조회·계약 관리 등 핵심 플로우를 직접 개발했습니다.
  `,
    skillList: [
      'NextJS (App Router)',
      'React',
      'TypeScript',
      'Axios',
      'TailwindCSS',
      'Token Auth',
      'REST API',
    ],
    linkList: <>{/* 링크 없음 */}</>,
    ImgComponent: (
      <Image
        src="/assets/project-images/CreditGuard.png"
        fill
        alt="Credit Guard"
      />
    ),
    detailSrc: '/notion/credit-guard-project',
  },
  {
    title: 'Porifo',
    date: '2024.03 ~ 2024.05',
    serviceMaintain: '',
    description: `개발자와 취업 준비생을 위한 포트폴리오·이력서 생성 서비스입니다.
입력한 정보를 기반으로 미리보기와 실제 결과물을 분리하여 제공했으며,
폼 상태 관리와 UI 컴포넌트 재사용성에 집중해 개발했습니다.
디자이너와 협업하며 Figma 기반 UI를 구현한 경험이 있습니다.
    `,
    skillList: [
      'React',
      'NextJS',
      'TypeScript',
      'TailwindCSS',
      'Zustand',
      'Vercel',
    ],
    linkList: (
      <>
        <Link href={'https://github.com/DecidedCard/Porifo'} target="_blank">
          <GitHubIcon size={20} />
        </Link>
        <Link href={'https://www.porifo.com/'} target="_blank">
          <ShareIcon size={20} />
        </Link>
      </>
    ),

    ImgComponent: (
      <Link
        href={'https://www.porifo.com/'}
        target="_blank"
        className="relative"
      >
        <Image
          src="/assets/project-images/emmerce-main.png" // TODO 추후 이미지 선택 후 수정
          fill
          alt="이미지"
        />
      </Link>
    ),
    detailSrc: '/notion/c82099c04f4540f0817285a224841055', // TODO 노션 작성 후 수정
  },
]

export default PROJECT_DATA
