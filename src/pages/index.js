import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import {Layout} from '../components/Layout/index.js'
import { ListingsComponent } from '../components/Listings.tsx'
import { coreListingsListQueryOptions } from '../api/hooks/useCoreListingsList.ts'

const Home = () => {
  return (
    <Layout>
      <ListingsComponent/>
    </Layout>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(coreListingsListQueryOptions());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
