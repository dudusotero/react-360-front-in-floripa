import { ReactInstance, Surface } from 'react-360-web'
import { SIZE } from './src/constants'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  })

  const { width, height } = SIZE
  r360.renderToSurface(
    r360.createRoot('App', {}),
    new Surface(width, height, Surface.SurfaceShape.Cylinder),
  )

  r360.compositor.setBackground('./static_assets/stars.jpg')
}

window.React360 = { init }
