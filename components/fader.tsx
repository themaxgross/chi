import React from 'react'
import { backgroundColor } from 'styles/constants'
export function Fader() {
  React.useEffect(() => {
    if (!window.AnimationEvent) {
      return
    }
    var fader = document.getElementById('fader')
    if (!fader) {
      return
    }
    fader.classList.add('fade-out')

    if (!window.AnimationEvent) {
      return
    }
    const anchors = document.getElementsByTagName('a')

    for (let idx = 0; idx < anchors.length; idx += 1) {
      if (anchors[idx].href === window.location.pathname) {
        continue
      }
      anchors[idx].addEventListener('click', function (event) {
        const fader = document.getElementById('fader'),
          anchor = event.currentTarget as HTMLAnchorElement

        if (!fader) {
          return
        }

        const listener = function () {
          window.location = (anchor.href as unknown) as Location
          fader.removeEventListener('animationend', listener)
        }
        fader.addEventListener('animationend', listener)

        event.preventDefault()
        fader.classList.add('fade-in')
      })
    }

    window.addEventListener('pageshow', function (event) {
      if (!event.persisted) {
        return
      }
      var fader = document.getElementById('fader')
      if (!fader) {
        return
      }
      fader.classList.remove('fade-in')
    })
  }, [])

  return (
    <React.Fragment>
      <svg id='fader'></svg>
      <style jsx global>
        {`
          #fader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999999;
            pointer-events: none;
            background: ${backgroundColor};
            animation-duration: 220ms;
            animation-timing-function: ease-in-out;
          }

          @keyframes fade-out {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          #fader.fade-out {
            opacity: 0;
            animation-name: fade-out;
          }

          #fader.fade-in {
            opacity: 1;
            animation-name: fade-in;
          }
        `}
      </style>
    </React.Fragment>
  )
}
