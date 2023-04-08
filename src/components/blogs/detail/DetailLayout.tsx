import React,{useMemo,useEffect} from 'react'
import styled from 'styled-components'
import { goBack, navigateTo } from '../../../main'
import {NotionRenderer} from 'react-notion-x'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
type Props = {
    name : string,
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
`
const DetailLayout = ({name,blog}: Props) => {

    console.log(blog);
    
  
    
    return (
        <div>

        <Headline>
            <button onClick={()=>{
                goBack();
            }}>back</button>
            <div>Functions</div>
        </Headline>
        <h1>TEST LAYOUT REACT {name}</h1>
        {blog&&<NotionRenderer recordMap={blog} fullPage={true} darkMode={false}/>}
    </div>
  )
}

export default DetailLayout