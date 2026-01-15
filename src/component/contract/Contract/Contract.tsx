'use client'

import SpecialBtn from '@/component/common/button/SpecialBtn'
import Confeti from '@/component/Confetti/Confetti'
import WithFadeUpTranslate from '@/component/container/WithFadeUpTranslate'
import { SectionID } from '@/constant/sectionId'
import { postMail } from '@/service/client/mail'
import { EmailDateType } from '@/types'
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import { IoMdClose } from 'react-icons/io'
import { ClipLoader } from 'react-spinners'

export default function Contact() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [isMailPending, setIsMailPending] = useState(false)
  const [isSuccessSend, setIsSuccessSend] = useState(false)
  const [form, setForm] = useState<Required<EmailDateType>>({
    title: '',
    message: '',
    email: '',
  })

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e
  ) => {
    const { value, name } = e.target

    switch (name) {
      case 'email':
        return setForm((s) => ({ ...s, email: value }))
      case 'title':
        return setForm((s) => ({ ...s, title: value }))
      case 'message':
        return setForm((s) => ({ ...s, message: value }))
    }
  }

  const onSendMail = (data: EmailDateType) => {
    postMail(data)
      .then(() => {
        alert('메일이 성공적으로 전송되었습니다.')
        setIsSuccessSend(true)
      })
      .finally(() => setIsMailPending(false))
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setIsMailPending(true)
    onSendMail(form)
  }

  useEffect(() => {
    dialog.current?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.nodeName === 'DIALOG') {
        dialog.current?.close()
      }
    })
  }, [])

  return (
    <section
      className="flex flex-col items-center py-40"
      id={SectionID.contact}
    >
      <WithFadeUpTranslate>
        <h2 className="text-lightest-slate mb-8 text-3xl font-semibold">
          Contact
        </h2>
      </WithFadeUpTranslate>
      <WithFadeUpTranslate delay={0.2}>
        <p className="mb-14 text-lg">
          저와 함께 작업하고 싶거나, 더 많은 정보를 원하신다면 언제든지
          연락주세요. 새로운 기회를 기다리고 있습니다!
        </p>
      </WithFadeUpTranslate>
      <WithFadeUpTranslate delay={0.4}>
        <SpecialBtn
          className="px-6 py-4 text-xl"
          onClick={() => {
            dialog.current?.showModal()
            setIsSuccessSend(false)
          }}
        >
          Send Mail!
        </SpecialBtn>
      </WithFadeUpTranslate>
      <dialog
        ref={dialog}
        className="border-green bg-light-navy text-lightest-slate w-full max-w-3xl rounded-md border"
      >
        <header className="mb-4 flex items-center justify-between py-2">
          <div aria-hidden></div>
          <h2 className="text-xl">Send Mail</h2>
          <button className="px-2" onClick={() => dialog.current?.close()}>
            <IoMdClose size={20} />
          </button>
        </header>
        <form onSubmit={onSubmit} className="mb-10 flex flex-col gap-4 px-8">
          <label className="flex flex-col gap-1">
            <span className="text-green text-lg font-semibold">Title</span>
            <input
              onChange={onChange}
              name="title"
              type="text"
              required
              className="bg-lightest-navy text-lightest-slate rounded-lg px-4 py-1"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-green text-lg font-semibold">Your Email</span>
            <input
              onChange={onChange}
              name="email"
              type="email"
              required
              className="bg-lightest-navy text-lightest-slate rounded-lg px-4 py-1"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-green text-lg font-semibold">Message</span>
            <textarea
              name="message"
              onChange={onChange}
              required
              className="bg-lightest-navy text-lightest-slate resize-none rounded-lg px-4 py-4"
              rows={20}
            />
          </label>

          <div className="relative mt-8 flex w-full items-center justify-center">
            <SpecialBtn
              className="disabled:hover:none disabled:text-light-navy w-full text-xl leading-9"
              disabled={isMailPending}
            >
              보내기
            </SpecialBtn>
            {isMailPending && (
              <ClipLoader size={17} className="absolute" color="#36d7b7" />
            )}
          </div>
        </form>
        {isSuccessSend && <Confeti />}
      </dialog>
    </section>
  )
}
