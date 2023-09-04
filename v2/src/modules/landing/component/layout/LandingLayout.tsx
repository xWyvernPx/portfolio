import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import styled from 'styled-components'

const PageBox = styled.div`
    margin-top: 5rem;
    padding-bottom: 3rem;
`

const LandingLayout = () => {
  return (
    <>
        <Header></Header>
            <PageBox>
            <Outlet/>
            </PageBox>
        <Footer/>
    </>
  )
}

export default LandingLayout