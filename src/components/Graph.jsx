import dynamic from 'next/dynamic'
import Linegraph from '../../^/untitled/ts-nul-authority/Untitled-1'

const DynamicComponentWithNoSSR = dynamic(() => import(<Linegraph />), {
  ssr: false,
})

export default DynamicComponentWithNoSSR
