import { Button } from '@chakra-ui/button'
import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = (evt) => {
    evt.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
  }
  if (!supportsPWA) {
    return null
  }
  return (
    <Button
      size='sm'
      aria-label='Install App'
      title='Install App'
      leftIcon={<FaPlusCircle />}
      onClick={onClick}
    >
      Install
    </Button>
  )
}

export default InstallPWA
