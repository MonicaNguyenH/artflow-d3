import { title } from 'process';
import Head from 'next/head';

export default function HeaderArea({ title, description }) {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content="ArtFlow Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon1.svg" />
            </Head>
        </>
    )
}