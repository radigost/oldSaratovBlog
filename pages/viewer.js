import Layout from '../components/layout'
import Head from 'next/head'



export default function Viewer({ postData }) {
    return (
        <Layout>
            <Head>
            </Head>
            <article>
                <p>
                    <iframe allowFullScreen="true" width="600" height="400" frameBorder="0" scrolling="no"
                            marginHeight="0" marginWidth="0"
                            src="https://www.arcgis.com/apps/CEWebViewer/viewer.html?&3dWebScene=1c7509a3e2fd423a85a010f9cd9ab1b1&view=445.68,51.45,-1612.45,537.8,137.38,-1556.14,0.95&lyr=1,1,1,1,1,1,1,1,1,1&wkid=0&v=2&reducedUI"></iframe>
                </p>
            </article>
        </Layout>
    )
}
