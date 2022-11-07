import Head from 'next/head'

import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return ( 
	<>
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Task tracker, movement reminder • Dev·Doro</title>
	</Head>
	
	<main id="main">
        <Component {...pageProps} />
	</main>
	</>
	)
}

export default MyApp
