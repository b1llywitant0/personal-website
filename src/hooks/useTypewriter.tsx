import { useState, useEffect } from 'react'

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1000
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const currentWord = words[wordIndex]
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1)
          setText(currentWord.slice(0, charIndex - 1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        if (charIndex < currentWord.length) {
          setText(currentWord.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        } else {
          setIsPaused(true)
          setTimeout(() => setIsDeleting(true), pauseTime)
          setTimeout(() => setIsPaused(false), pauseTime)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, isPaused])

  return text
}
