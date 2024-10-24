"use client"

import { Layout } from "antd"
import Image from "next/image";
import Logo from "@/assets/imgs/logo.svg";
import { LocaleDropdown } from "./LocaleDropdown";
import { ToggleTheme } from "./ToggleTheme";
import { Link } from "@/lib/navigation";

const { Header, Content } = Layout;

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout className="h-screen overflow-hidden">
            <Layout className="dark:bg-slate-900">
                <Header className="flex justify-between items-center gap-4 xl:px-40 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-zinc-800">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={150}
                            priority
                        />
                    </Link>
                    <div className="flex items-center gap-5">
                        <LocaleDropdown />
                        <ToggleTheme />
                    </div>
                </Header>
                <Content className="flex items-center justify-center overflow-auto bg-white dark:bg-slate-950">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default HomeLayout;