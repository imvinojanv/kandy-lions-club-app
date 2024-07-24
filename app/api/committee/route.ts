import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
    req: Request,
) {
    try {
        const { name, designation, description, imageUrl } = await req.json();

        await db.committee.create({
            data: {
                name,
                designation,
                description,
                imageUrl,
            },
        });

        return new NextResponse("Committee Member Created", {
            status: 201,
        });
    } catch (error) {
        console.error("[COMMITTEE_MEMBER_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}