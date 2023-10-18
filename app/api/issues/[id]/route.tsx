import prisma from "@/prisma/client";
import { issueSchema } from "@/validations/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const issue = await prisma.issue.findUnique({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(issue, { status: 200 });
  } catch (error) {
    return NextResponse.json("Could not fetch the issue", { status: 500 });
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const DeletedIssue = await prisma.issue.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(DeletedIssue, { status: 200 });
  } catch (error) {
    return NextResponse.json("Could not delete the issue", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json("invalid data", { status: 400 });
    const issue = await prisma.issue.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        description: body.descripton,
        status: body.status,
      },
    });
    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    return NextResponse.json("Could not fetch the issue", { status: 500 });
  }
}
