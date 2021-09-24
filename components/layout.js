import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Старый Саратов'
export const siteTitle = name

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Сайт проекта Виртуальный Старый Саратов"
                />
                <meta
                    property="og:image"
                    content="upload.wikimedia.org/wikipedia/commons/3/3a/Coat_of_Arms_of_Saratov_gubernia_%28Russian_empire%29.png"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/sarat781.jpg"
                            className={utilStyles.borderCircle}
                            height={250}
                            width={200}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/sarat781.jpg"
                                    className={utilStyles.borderCircle}
                                    height={250}
                                    width={200}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← На главную</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
