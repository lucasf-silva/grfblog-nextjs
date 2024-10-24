import { AdminSettings } from "@/components/pages/admin/Settings";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Admin Page",
}

const AdminSettingsPage = async () => {

    return (
        <AdminSettings/>
    )
}

export default AdminSettingsPage;