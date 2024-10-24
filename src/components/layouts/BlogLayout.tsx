"use client"

import { Layout } from "antd"
import Image from "next/image";
import Logo from "@/assets/imgs/logo.svg";
import { LocaleDropdown } from "./LocaleDropdown";
import { ToggleTheme } from "./ToggleTheme";
import { Blog } from "@prisma/client";
import { useBlogStore } from "@/store/blogStore";
import { useEffect } from "react";
import { Link } from "@/lib/navigation";

const { Header, Content } = Layout;

type Props = {
    children: React.ReactNode;
    blog: Blog;
}

const BlogLayout = ({ children, blog }: Props) => {
    const { setBlog } = useBlogStore();

    useEffect(() => {
        setBlog(blog);
    }, [blog]);

    return (
        <Layout className="h-screen overflow-hidden">
            <Header className="flex justify-between bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-zinc-800">
                <div className="flex items-center justify-between gap-4 container px-8">
                    <Link href={`${blog.slug}`}>
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={150}
                            priority
                        />
                    </Link>
                </div>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={150}
                        priority
                    />
                </Link>
                <div className="flex items-center gap-8">
                    <LocaleDropdown />
                    <ToggleTheme />
                </div>
            </Header>
            <Content>
                <div className="size-full flex items-center justify-center overflow-auto container px-8 mx-auto">
                    {children}
                </div>
            </Content>
        </Layout>
    )
}

export default BlogLayout;