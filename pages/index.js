// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Container } from 'semantic-ui-react'

export default function Home() {
  return (
    <Container>
      <h3>Examples</h3>
      <ul>
        <li><Link href={'/upload/'}>Single File Upload</Link></li>
        <li><Link href={'/upload/'}>Multiple Files Upload</Link></li>
        <li><Link href={'/ebs/workspace'}>EBS Workspace</Link></li>
      </ul>
    </Container>
  )
}
