'use client'

import NotionContent from '@/component/project/MainProject/NotionContent/NotionContent'
import { useParams } from 'next/navigation'
import { NotionAPI } from 'notion-client'
import { useEffect } from 'react'

const notion = new NotionAPI()

export default function NotionPage() {
  const { pageId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const recordMap = await notion.getPage(`${pageId}`)
      console.log(recordMap)
    }
    fetchData()
  }, [pageId])
  // return <NotionContent recordMap={recordMap} />
  return <div>test</div>
}
