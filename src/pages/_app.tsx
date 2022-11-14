/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from "next/app";
import Head from 'next/head'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
	<>
	<Head>
	<meta name="application-name" content="PWA App" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="PWA App" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="msapplication-config" content="/icons/browserconfig.xml" />
	<meta name="msapplication-TileColor" content="#2B5797" />
	<meta name="msapplication-tap-highlight" content="no" />
	<meta name="theme-color" content="#000000" />

	<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
	<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

	<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
	<link rel="manifest" href="/manifest.json" />
	<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:url" content="https://devdoro.raissak.com" />
	<meta name="twitter:title" content="Devdoro" />
	<meta name="twitter:description" content="A gamified pomodoro application for devs who forget to move." />
	<meta name="twitter:image" content="/icons/android-chrome-192x192.png" />
	<meta name="twitter:creator" content="@KzRaissa" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Devdoro, a pomodoro to get devs moving" />
	<meta property="og:description" content="A gamified pomodoro application for devs who forget to move. Photo by Victor Miyata on Pexels" />
	<meta property="og:site_name" content="Devdoro" />
	<meta property="og:url" content="https://devdoro.raissak.com" />
	<meta property="og:image" content="https://i.imgur.com/RPUgvu1.jpg" />

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Task tracker, movement reminder • Dev·Doro</title>
	<script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>
	</Head>
	
	<main id="main" className="bg-base-100/10">
        <Component {...pageProps} />
	</main>
	</>
	)
}

export default MyApp
