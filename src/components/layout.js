import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '@/styles/layout.module.scss'
import Header from './header'
import Home from './home'

export default function Layout({title, keywords, description, children}) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,700;1,400&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            {router.pathname === '/'}
            {children}
        </>
    )
}

Layout.defaultProps = {
    title: 'Abraham.Ai',
    description: "Artist in the Cloud",
    keywords: 'art, artist, AI, machine learning, prompt, generative'
}