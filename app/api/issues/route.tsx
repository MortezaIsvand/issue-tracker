import prisma from "@/prisma/client";
import { issueSchema } from "@/validations/validationSchemas";
import { Issue, Status } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json({ message: "invalid data" }, { status: 400 });
    const issue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
        status: body.status || "OPEN",
      },
    });
    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not create the issue" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const status =
    (req.nextUrl.searchParams.get("status") as Status) || undefined;
  const orderBy =
    (req.nextUrl.searchParams.get("orderBy") as keyof Issue) || undefined;
  const page = parseInt(req.nextUrl.searchParams.get("page")!) || 1;
  const pageSize = 4;

  try {
    const issues = await prisma.issue.findMany({
      where: {
        status,
      },
      orderBy: orderBy
        ? {
            [orderBy]: orderBy === "createdAt" ? "desc" : "asc",
          }
        : { updatedAt: "desc" },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
    return NextResponse.json(issues, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not fetch the issues." },
      { status: 500 }
    );
  }
}
