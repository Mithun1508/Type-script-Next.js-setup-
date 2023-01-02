import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js This is Mithun checkout my Github profile at "https://github.com/Mithun1508" 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
