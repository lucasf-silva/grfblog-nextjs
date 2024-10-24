import BlogLayout from "@/components/layouts/BlogLayout"
import { getBlog } from "@/server/blogService"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    params: {
        blog_slug: string
    }
}

export async function generateMetadata(
    {params: { blog_slug }}: Props
): Promise<Metadata> {
    const blog = await getBlog({ slug: blog_slug })

    return{
        title: blog.data?.title ?? 'NOT FOUND',
        description: blog.data?.subtitle ?? 'NOT FOUND'
    }
}

const Layout = async ({ children, params: {blog_slug} }: Props) => {
    const blog = await getBlog({ slug: blog_slug })

    if (!blog.data) {
        return notFound()
    }

    return(
        <BlogLayout blog={blog.data}>
            {children}
        </BlogLayout>
    )
}

export default Layout;