import { _create } from "../../../utils/DOM"

interface PaginationProps  {
    nextHandler? : ()=>void;
    prevHandler? : ()=>void;
    currentPage? : number;
    hasNext? : boolean;
    loadMoreHanler : ()=>void;
}
export const BlogListPagination= ({loadMoreHanler}:PaginationProps):HTMLElement =>{
    
    const blogPaginationwrapper = _create('div',{
        class : 'blog-list-pagination-wrapper'
    })
    // const nextButton = _create('button',{
    //     class : 'blog-list-pagination-next'
    // })
    // const prevButton = _create('button',{
    //     class : 'blog-list-pagination-prev'
    // })
    // nextButton.appendChild(_create('i',{class : 'fas fa-chevron-right'}))
    // prevButton.appendChild(_create('i',{class : 'fas fa-chevron-left'}))
    // blogPaginationwrapper.append(prevButton,nextButton);
    // nextButton.addEventListener('click', ()=>{
    //     nextHandler();
    // })
    
    // prevButton.addEventListener('click', ()=>{
    //     prevHandler(); 
    // })
    // if(!hasNext){
    //     nextButton.setAttribute("disabled",'true')
    // }
    // if(currentPage == 1) {
    //     prevButton.setAttribute("disabled",'true')
    // }
    const loadMoreButton = _create('button', {
        class: 'load_button',
    },{
        textContent: 'Load More'
    })
    loadMoreButton.addEventListener('click',()=> loadMoreHanler?.())
    blogPaginationwrapper.appendChild(loadMoreButton)
    return blogPaginationwrapper
}