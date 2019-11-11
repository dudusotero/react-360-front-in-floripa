import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('App', {}),
    new Surface(1600, 600, Surface.SurfaceShape.Cylinder),
  );

  r360.compositor.setBackground('./static_assets/stars.jpg');

}

window.React360 = { init };
