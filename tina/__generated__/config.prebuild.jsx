// tina/config.js
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  // For local development without Tina Cloud
  local: true,
  // Remove these if using local mode
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
    // Hugo uses 'static' for public files
  },
  media: {
    tina: {
      mediaRoot: "static/images",
      // Where media will be stored
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        // Hugo content path
        format: "md",
        // Hugo typically uses markdown
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
