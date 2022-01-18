import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

const StayHome = createIcon({
  displayName: 'StayHome',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <line x1="15.9" x2="15.9" y1="9.79" y2="13.36"></line>
        <path
          fill="currentColor"
          d="M12.304 15.5h-.5c-.138 0-.25-.112-.25-.25v-.5c0-.138.112-.25.25-.25h.5c.138 0 .25.112.25.25v.5c0 .138-.112.25-.25.25Z"
        ></path>
        <path d="M7.994 17.203c.487.393.985.771 1.506 1.121l1.134.761c.826.554 1.905.554 2.731 0l1.134-.761c.521-.349 1.02-.728 1.506-1.121"></path>
        <path d="M4.568 13.546c-.222-.295-.445-.588-.65-.895 -.997-1.489-1.195-3.373-.529-5.036 .546-1.365 1.666-2.421 3.061-2.886v0c.454-.152.93-.229 1.409-.229 1.366 0 2.656.625 3.502 1.698l.639.81 .639-.81c.846-1.073 2.136-1.698 3.502-1.698 .479 0 .956.077 1.41.229v0c1.395.465 2.514 1.521 3.061 2.886 .665 1.663.467 3.548-.529 5.036 -.206.307-.429.6-.65.895"></path>
        <path d="M5.211 16.654c1.723-2.036 3.505-4.022 5.355-5.942 .779-.808 2.088-.808 2.867 0 1.85 1.921 3.632 3.906 5.355 5.942"></path>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

export default memo(StayHome)
