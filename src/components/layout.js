import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '@/styles/layout.module.css'
import Header from './header'

export default function Layout({title, keywords, description, children}) {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/'}
            <div className={styles.container}>
            {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Abraham.Ai',
    description: "Artist in the Cloud",
    keywords: 'art, artist, AI, machine learning, prompt, generative'
}