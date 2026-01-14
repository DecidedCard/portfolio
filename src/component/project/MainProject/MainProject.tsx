import SectionContainer from '@/component/section/SectionContainer'
import PROJECT_DATA from '@/constant/projectData'
import { SectionID } from '@/constant/sectionId'
import Project from './Project/Project'

export default function MainProjects() {
  return (
    <SectionContainer
      title="Main Projects"
      count="03."
      id={SectionID.mainProjects}
    >
      {PROJECT_DATA.map((pro, i) => (
        <Project key={i} {...pro} />
      ))}
    </SectionContainer>
  )
}
