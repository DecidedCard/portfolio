import NotionContent from '@/component/project/MainProject/NotionContent/NotionContent'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

// 참고용 next16 공식문서 링크 https://nextjs.org/docs/app/api-reference/file-conventions/default#params-optional
interface Props {
  params: Promise<{ pageId: string }>
}

export default async function NotionPage({ params }: Props) {
  const { pageId } = await params
  const recordMap = await notion.getPage(pageId)
  return <NotionContent recordMap={recordMap} />
}
