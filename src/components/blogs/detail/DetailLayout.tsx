import React,{useMemo,useEffect} from 'react'
import styled from 'styled-components'
import { goBack, navigateTo } from '../../../main'
import {NotionRenderer} from 'react-notion-x'
import { Code, } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import '../../../assets/style/notion_custom.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import { reactive } from '../../hooks/reactive'
type Props = {
    blog: any
}
const Layout = styled.div`
    width: 100%;
    padding: 2rem;

`
const Headline = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
`
const BackButton = styled.button`
display: flex;
justify-content: space-between;
gap: .5rem;
background-color: var(--text-color);
align-items: center;
transition: all 0.2s linear;
&:hover {
    border-color: var(--text-color);
   i {
    transform: translateX(-3px);
   }
}
`
const DetailLayout = ({blog}: Props) => {
    window.$on("change_theme",()=>{
        document.getElementById
    })
    const mapPageUrl = (pageId) => {
        return `/blogs/${pageId}`
      }
    return (
        <div>

        <Headline>
            <BackButton onClick={()=>{
                goBack();
            }}><i className="fas fa-chevron-left"></i>Back</BackButton>
            <div>Functions</div>
        </Headline>
        {blog&&<NotionRenderer 

        defaultPageCover='https://source.unsplash.com/1200x300/?random'
        className={`${document.body.classList.contains('dark') ? 'dark-mode' : 'light-mode'} notion_custom`}
        defaultPageIcon="📒"
        disableHeader
        previewImages
        mapPageUrl={mapPageUrl}
        components={{
            Code,
            Collection
          }}

        recordMap={blog} fullPage={true} darkMode={false}/>}
    </div>
  )
}

export default DetailLayout