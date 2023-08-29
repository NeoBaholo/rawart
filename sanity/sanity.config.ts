import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision';
import schemas from "./schemas"

const config = defineConfig({
  name: 'default',
  
  title: 'sanity-rawrisangart',

  projectId: 'enzx19g0',
  
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {types: schemas },

  apiVersion: "2023-08-27"
})

export default config