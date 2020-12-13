import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import Test from '../components/test'
import dynamic from "next/dynamic";

const OBJModel = dynamic(
  ()=>import('react-3d-viewer').then((mod) => mod.OBJModel),
  {ssr: false}
)

const components = {Test, OBJModel}

/**
 * serialize mdx to string
 */
export async function mdxToString(mdx) {
  return await renderToString(mdx, {components})
}

/**
 * render string back to react components
 */
export function stringToMdx(string) {
  return hydrate(string, {components})
}
