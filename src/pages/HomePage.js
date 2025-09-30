import { Home } from 'components';
import React from 'react'
import Layout from '../Layout';




export default function HomePage({children}) {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
