import Image from 'next/image'

import { SectionID } from '@/constant/sectionId'
import SectionContainer from '../section/SectionContainer'
import WithFadeUpTranslate from '../container/WithFadeUpTranslate'

import basicImage from '../../../public/assets/basic_profile_image.jpeg'

import styles from './AboutMe.module.css'

export default async function AboutMe() {
  return (
    <SectionContainer title="About Me" count="01." id={SectionID.aboutMe}>
      <WithFadeUpTranslate>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-[70%] break-keep">
            <div className="mb-16 text-xl">
              <h3 className="text-text-200 mb-3 text-2xl">
                [사용자 경험에서 출발한 프론트엔드]
              </h3>
              <p>
                부트캠프 과정과 여러 실무형 프로젝트를 통해 React와 Next.js를
                중심으로 웹 프론트엔드 개발을 경험했습니다. 특히 사용자에게 직접
                전달되는 화면과 인터랙션을 구현하며, 작은 UI 차이 하나가 사용
                경험을 크게 바꾼다는 점에 매력을 느껴 프론트엔드 개발에 집중하고
                있습니다.
              </p>
            </div>
            <div className="mb-16 text-xl">
              <h3 className="text-text-200 mb-3 text-2xl">
                [개선을 통해 성장하는 개발자]
              </h3>
              <p>
                새로운 프로젝트를 시작할 때마다, 이전 프로젝트에서 겪었던 문제를
                그대로 반복하지 않으려 노력합니다. 데이터 구조를 다시
                설계하거나, 렌더링 흐름을 개선하고, 상태 관리 방식을 재검토하는
                등 “왜 불편했는지”를 되짚으며 리팩토링하는 과정에서 가장 큰
                성장을 느낍니다. 이러한 개선의 반복이 더 나은 코드와 더 안정적인
                서비스를 만든다고 믿습니다.
              </p>
            </div>
            <div className="mb-16 text-xl">
              <h3 className="text-text-200 mb-3 text-2xl">
                [끝까지 해결하는 태도]
              </h3>
              <p>
                프로젝트를 진행하며 예상치 못한 버그나 구조적인 문제를 자주
                마주했습니다. 로컬 스토리지와 DB 간 데이터 불일치, 인증 메일
                발송 과정에서의 도메인 설정 문제, 실시간 상태 동기화 오류 등
                다양한 문제를 겪었지만, 원인을 끝까지 추적하며 해결해 왔습니다.
                이 경험을 통해 문제는 반드시 원인이 있고, 끝까지 파고들면 해결할
                수 있다는 확신을 가지게 되었습니다.
              </p>
            </div>
          </div>
          <div
            className={`${styles.imgBorder} relative mx-auto aspect-square h-75 w-75 max-w-75 md:w-[70%]`}
          >
            <Image
              src={basicImage}
              alt="프로필 이미지"
              sizes="300px"
              placeholder="blur"
              className="z-50 -translate-x-2 -translate-y-2 rounded-lg duration-300"
            />
          </div>
        </div>
      </WithFadeUpTranslate>
    </SectionContainer>
  )
}
