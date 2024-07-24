"use client"

import CommitteeMemberForm from "@/components/committee-member-form";
import { FileUpload } from "@/components/file-upload";

const DashboardPage = () => {
    return (
        <main className="flex h-screen flex-col items-center justify-start overflow-y-auto">
            <CommitteeMemberForm />
        </main>
    )
}

export default DashboardPage