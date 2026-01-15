import { useEffect, useRef } from 'react'

// 화면에 dom이 보이는지 체크 하는 hook
export default function useInterSectionCoord<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    ref.current.style.top = '50px'
    ref.current.style.opacity = '0'

    const observe = new IntersectionObserver(
      (e) => {
        e.forEach((entity) => {
          if (entity.isIntersecting) {
            ref.current!.style.top = '0px'
            ref.current!.style.opacity = '1'
          }
        })
      },
      { threshold: 0.4 } // 40%이상 보일 때 작동하게 설정
    )

    observe.observe(ref.current)

    return () => {
      observe.disconnect()
    }
  }, [ref])
  return ref
}
