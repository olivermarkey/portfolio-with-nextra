import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold md:inline">Olly</span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Oliver Markey" />
      <meta property="og:title" content="Oliver Markey" />
      <meta property="og:description" content="Oliver Markey" />
      <meta name="apple-mobile-web-app-title" content="Oliver Markey" />
      <link rel='icon' href='next.svg'/>
      <title>Oliver Markey</title>
    </React.Fragment>
  ),
  project: {
    link: 'https://github.com/olivermarkey',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
