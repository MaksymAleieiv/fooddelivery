import React from 'react'
import Layout from '../../components/Layout/Layout'
import TopPositionsTable from '../../components/TopPositionsTable/TopPositionsTable'
import TopSlider from '../../components/TopSlider/TopSlider'
import useTitle from '../../hooks/useTitle'

function Home() {
    useTitle('Home')
    return (
        <Layout>
            <TopSlider/>
            <TopPositionsTable/>
        </Layout>
    )
}

export default Home
