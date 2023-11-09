import { useEffect, useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-8 animate-bounce">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-green-600 hover:bg-green-700 focus:ring-green-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 w-10 h-10',
        )}
      >
        <BiArrowToTop className="h-10 w-8" aria-hidden="true" />
      </button>
    </div>
  )
}