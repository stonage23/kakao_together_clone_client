import React from 'react'
import { Admin } from '../components';
import Layout from '../Layout';




export default function AdminPage({children}) {
  return (
    <Layout>
      <Admin />
    </Layout>
  )
}
