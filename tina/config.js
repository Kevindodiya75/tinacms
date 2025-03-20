import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: 'main',
  local: false,
  clientId: "8115650f-4032-434e-86eb-b470d65d2b13",
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  media: {
    tina: {
      mediaRoot: 'static/images', 
      publicFolder: 'static',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts', // Hugo content path
        format: 'md', // Hugo typically uses markdown
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})