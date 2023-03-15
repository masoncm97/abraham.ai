import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from '@/components/header'

export default function Layout({title, keywords, description, children}) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
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