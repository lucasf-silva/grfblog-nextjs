import { AdminDashboardPage } from "@/components/pages/admin/Dashboard";
import { PostsPage } from "@/components/pages/admin/Posts";
import { getBlogPosts } from "@/server/admin/blogPostService";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Admin Page",
}

type Props = {
    params: {
        blog_slug: string;
    }
}

const AdminPosts = async ({ params: { blog_slug } }: Props) => {
    const posts = await getBlogPosts({ blogSlug: blog_slug });
    
    return (
        <PostsPage
            posts={posts.data!}
        />
    )
}

export default AdminPosts;