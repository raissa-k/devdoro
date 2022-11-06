import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="description" content="A gamified pomodoro application for devs who forget to move." />
				<link rel="shortcut icon" href="favicon.png" type="image/png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}