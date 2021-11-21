import React from 'react'
import Layout from '../../components/Layout/Layout'
import TopPositionsTable from '../../components/TopPositionsTable/TopPositionsTable'
import TopSlider from '../../components/TopSlider/TopSlider'
import setPageTitle from '../../utils/setPageTitle'

function Home() {
    React.useEffect(() => {
        setPageTitle('Home')
    }, [])

    return (
        <Layout>
            <TopSlider/>
            <TopPositionsTable/>
        </Layout>
    )
}

export default Home
