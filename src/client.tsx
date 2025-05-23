import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-05-02',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: string) {
  return builder.image(source)
}
