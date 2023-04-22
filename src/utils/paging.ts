
export const setPrevPage = (pageId:string) => {
    localStorage.setItem('prevPage', pageId);
}
export const setNextPage = (pageId:string) => {
    localStorage.setItem('nextPage', pageId);
}

export const getPrevPage = ():string => {
    return localStorage.getItem('prevPage');
}
export const getNextPage = ():string => { 
    return localStorage.getItem('nextPage');
}
export const removePrevPage = ()=> {
    localStorage.removeItem('prevPage');
}
export const removeNextPage = ()=> {
    localStorage.removeItem('nextPage');
}

export const persistBlogsList = (blogs: any[])=>{
    sessionStorage.removeItem('PersistBlogs')
    sessionStorage.setItem('PersistBlogs',JSON.stringify(blogs))
}
export const getPersistBlogsList = ():any[] =>{
    return JSON.parse(sessionStorage.getItem('PersistBlogs'));
} 
