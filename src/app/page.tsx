import Introduce from '@/component/introduce/Introduce'
import { SectionID } from '@/constant/sectionId'

export default function Home() {
  return (
    <main id={SectionID.mainContent} style={{ filter: 'none' }}>
      <div className="mx-auto max-w-7xl px-20 max-sm:px-10">
        <div className="mx-auto max-w-[1000px]">
          <Introduce />
        </div>
      </div>
    </main>
  )
}
