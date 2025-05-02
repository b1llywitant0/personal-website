import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'g0u76tke', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: '2025-05-02',
})
