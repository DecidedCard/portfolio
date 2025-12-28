'use client'
import { SectionID } from '@/constant/sectionId'
import useOnClickOutside from '@/hook/useOnClickOutside'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Menu() {
  const navContainerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen((t) => !t)

  useOnClickOutside(
    navContainerRef,
    useCallback(() => {
      setIsOpen(false)
    }, [])
  )

  /* 사이드바가 오픈일 때 사이드 이펙트 */
  useEffect(() => {
    const mainEl = document.getElementById(SectionID.mainContent)!
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
      mainEl.style.filter = 'blur(4px)'
    } else {
      document.body.style.overflowY = 'auto'
      mainEl.style.filter = 'none'
    }
  }, [isOpen])

  /* resize event */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={navContainerRef} className="z-30 hidden h-10 max-md:block">
      <div className="text-primary-300 relative z-10 inline-block h-10 w-[30px]">
        <button
          onClick={onToggle}
          className="absolute top-1/2 -translate-y-1/2"
        >
          {isOpen ? (
            <IoMdClose size={40} className="pointer-events-none relative" />
          ) : (
            <RxHamburgerMenu
              size={40}
              className="pointer-events-none relative"
            />
          )}
        </button>
      </div>
      <aside
        className={`${
          isOpen ? openSideBar : closeSideBar
        } bg-bg-200 shadow-primary-300 fixed top-0 right-0 z-0 hidden h-screen w-[min(400px,75vw)] items-center justify-center px-10 py-16 shadow-lg transition-all max-md:flex`}
      >
        <nav>
          <ol className="[&>a>li>span]:text-text-200 text-text-100 text-2xl">
            <Link
              href={`/#${SectionID.aboutMe}`}
              onClick={() => setIsOpen(false)}
            >
              <li className="flex flex-col items-center px-8 py-4">
                <span>01.</span>
                <p>About</p>
              </li>
            </Link>
            <Link
              href={`/#${SectionID.skills}`}
              onClick={() => setIsOpen(false)}
            >
              <li className="flex flex-col items-center px-8 py-4">
                <span>02.</span>
                <p>Skills</p>
              </li>
            </Link>
            <Link
              href={`/#${SectionID.mainProjects}`}
              onClick={() => setIsOpen(false)}
            >
              <li className="flex flex-col items-center px-8 py-4">
                <span>03.</span>
                <p>Projects</p>
              </li>
            </Link>
            <Link
              href={`/#${SectionID.contact}`}
              onClick={() => setIsOpen(false)}
            >
              <li className="flex flex-col items-center px-8 py-4">
                <span>04.</span>
                <p>Contact</p>
              </li>
            </Link>
          </ol>
        </nav>
      </aside>
    </div>
  )
}

const openSideBar = 'translate-x-0'
const closeSideBar = 'translate-x-full'
