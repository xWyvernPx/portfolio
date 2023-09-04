import { atom } from "recoil";

interface BlogPageState {
    topBlogs: any[]
}

export const BlogPageAtom = atom<BlogPageState>({
    key: "blogPageState",
    default: {
        topBlogs: []
    },
})