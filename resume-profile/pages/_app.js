import 'tailwindcss/tailwind.css';
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("🚀 ~ file: _app.js ~ line 8 ~ MyApp ~ pageProps", pageProps)
  return <Component {...pageProps} />
}

export default MyApp
