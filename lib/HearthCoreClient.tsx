import {Client} from '@umbraco/headless-client'

const HeartcoreClient = new Client({
  projectAlias: process.env.UMBRACO_PROJECT_ALIAS,
  apiKey: process.env.UMBRACO_API_KEY,
  language: 'en-US', // can be overwritten per method
  preview: false // true/false if the preview API should be used
})

export default HeartcoreClient