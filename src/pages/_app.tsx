import Head from 'next/head'
import { Fragment } from 'react'

import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return ( 
	<Fragment>
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Task tracker, movement reminder • Dev·Doro</title>
	</Head>
	
	<main id="main">
        <Component {...pageProps} />
	</main>
	</Fragment>
	)
}

export default MyApp
