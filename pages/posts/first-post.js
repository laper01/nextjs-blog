import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPosts() {
  return (
    <Layout>
      <Head>
        <title>First posts</title>
      </Head>
      <h1>First Posts</h1>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`https://connect.facebook.net/en_US/sdk.js`)
        }}
      />
      <h2>
        <Link href="/" >Back to Home</Link>
      </h2>
      <h3>profile image</h3>
      <Image
        src="/images/profile.jpg"
        width={144}
        height={144}
        alt="profile picture"
      />


    </Layout>

  )
}