import { baseUrl } from '../data/settings';
import data from './data.json';

const path_start = `${baseUrl}/static/`;

export default [
  //===== TEXTURES =====
  {
    name: 'cliffAlbedo',
    type: 'texture',
    path: `${path_start}textures/cliff/cliff_Albedo.jpg`
  },
  {
    name: 'cliffDisplacement',
    type: 'texture',
    path: `${path_start}textures/cliff/cliff_Displacement.jpg`
  },
  {
    name: 'cliffNormal',
    type: 'texture',
    path: `${path_start}textures/cliff/cliff_Normal.jpg`
  },
  {
    name: 'cliffRoughness',
    type: 'texture',
    path: `${path_start}textures/cliff/cliff_Roughness.jpg`
  },
  {
    name: 'lensflare0_Alpha',
    type: 'texture',
    path: `${path_start}textures/lensflare/lensflare0_alpha.png`
  },
  {
    name: 'lensflare0',
    type: 'texture',
    path: `${path_start}textures/lensflare/lensflare0.png`
  },
  {
    name: 'lensflare1',
    type: 'texture',
    path: `${path_start}textures/lensflare/lensflare1.png`
  },
  //===== MODELS =====
  {
    name: 'handModel',
    type: 'objModel',
    path: `${path_start}models/hand/hand.obj`
  },
  {
    name: 'studioLights',
    type: 'fbxModel',
    path: `${path_start}models/studio_lights.fbx`
  },
  //===== TEST MODELS =====
  {
    name: 'skullModel',
    type: 'objModel',
    path: `${path_start}models/skull.obj`
  },
  //===== ENVIRONMENT MAPS =====
  {
    name: 'environmentMapTexture',
    type: 'cubeTexture',
    path: [
      `${path_start}textures/envMap/${data.envMap}/px.jpg`,
      `${path_start}textures/envMap/${data.envMap}/nx.jpg`,
      `${path_start}textures/envMap/${data.envMap}/py.jpg`,
      `${path_start}textures/envMap/${data.envMap}/ny.jpg`,
      `${path_start}textures/envMap/${data.envMap}/pz.jpg`,
      `${path_start}textures/envMap/${data.envMap}/nz.jpg`
    ]
  }
];
