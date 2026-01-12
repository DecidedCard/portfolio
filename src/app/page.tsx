import AboutMe from '@/component/aboutMe/AboutMe'
import Introduce from '@/component/introduce/Introduce'
import Skills from '@/component/skills/Skills/Skills'
import { SectionID } from '@/constant/sectionId'

export default function Home() {
  return (
    <main id={SectionID.mainContent} style={{ filter: 'none' }}>
      <div className="mx-auto max-w-7xl px-20 max-sm:px-10">
        <div className="mx-auto max-w-250">
          <Introduce />
          <AboutMe />
          <Skills />
        </div>
      </div>
    </main>
  )
}
