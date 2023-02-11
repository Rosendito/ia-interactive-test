import { Transition } from '@headlessui/react'

const BaseTransitionChild = ({ transitionName, children, className }) => {
  return (
    <Transition.Child
      enter={transitionName + '-enter'}
      enterFrom={transitionName + '-enter-from'}
      enterTo={transitionName + '-enter-to'}
      leave={transitionName + '-leave'}
      leaveFrom={transitionName + '-leave-from'}
      leaveTo={transitionName + '-leave-to'}
      className={className}
    >
      {children}
    </Transition.Child>
  )
}

export default BaseTransitionChild
