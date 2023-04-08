
const useLoading = ()=>{
    const primaryLoader = document.querySelector(".primary-loader");
    const progressLoader = document.querySelector(".progress-loader");
    const LoaderDeboundOff = ()=> {
        // primaryLoader.classList.add("active");
        // progressLoader.classList.add("active");
        if(primaryLoader.classList.contains("active") || progressLoader.classList.contains("active")){   
            primaryLoader.classList.remove("active");
            progressLoader.classList.remove("active");
            document.body.style.setProperty("overflow-y", "auto");
        }
      }
      const openLoading = ()=>{
        if(!primaryLoader.classList.contains("active") && !progressLoader.classList.contains("active")){   
            primaryLoader.classList.add("active");
            progressLoader.classList.add("active");
            document.body.style.setProperty("overflow-y", "hidden");
        }
      }
      return {
        openLoading: openLoading,
        closeLoading: LoaderDeboundOff
      }
}
export default useLoading;