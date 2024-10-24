"use client"

import { AdminHero } from "@/components/AdminHero"
import { getDashboardData } from "@/server/admin/dashboardService"
import { useBlogAdminStore } from "@/store/blogAdminStore"
import { DashboardData } from "@/types/Dashboard"
import { Col, Row, Statistic } from "antd"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export const AdminDashboardPage = () => {
    const { blogSelected } = useBlogAdminStore()
    const { data } = useSession()

    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState<DashboardData>()

    const t = useTranslations('DashboardPage')

    useEffect(() => {
        const handleGetData = async () => {
            if (!blogSelected) return;

            setLoading(true)
            const data = await getDashboardData({ blogId: blogSelected.id })
            setDashboardData(data)
            setLoading(false)
        }

        handleGetData()
    }, [blogSelected])

    return (
        <div>
            <div className="space-y-6 pb-5">
                <AdminHero
                    title={t('title', { name: data?.user?.name })}
                    description={t('description', { blogName: blogSelected?.title })}
                />

                <div className="px-8">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic
                                title={t('total_users')}
                                value={dashboardData?.totalUsers}
                                valueStyle={{ color: '#489703' }}
                                loading={loading}
                            />
                        </Col>
                        <Col span={8}>
                            <Statistic
                                title={t('total_posts')}
                                value={dashboardData?.totalPosts}
                                valueStyle={{ color: '#ffb108' }}
                                loading={loading}
                            />
                        </Col>
                        <Col span={8}>
                            <Statistic
                                title={t('your_total_posts')}
                                value={dashboardData?.totalPostsMadeByYou}
                                valueStyle={{ color: '#0572ff' }}
                                loading={loading}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}