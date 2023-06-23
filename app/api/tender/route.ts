import { NextRequest, NextResponse } from "next/server";
import Tender from "@models/tender";
import { connectToDB } from "@utils/database";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const title = req.nextUrl.searchParams.get("title");
    const tenderID = req.nextUrl.searchParams.get("tenderID");
    const nameofthework = req.nextUrl.searchParams.get("nameofthework");
    const fund = req.nextUrl.searchParams.get("fund");
    const financialYear = req.nextUrl.searchParams.get("financialYear");

    const queryObject: any = {};
    if (title) {
      queryObject.title = { $regex: title, $options: "i" };
    }

    if (tenderID) {
      queryObject.tenderID = { $regex: tenderID, $options: "i" };
    }

    if (nameofthework) {
      queryObject.nameofthework = { $regex: nameofthework, $options: "i" };
    }

    if (fund) {
      queryObject.fund = { $regex: fund, $options: "i" };
    }
    if (financialYear) {
      queryObject.financialYear = { $regex: financialYear, $options: "i" };
    }
    //.skip(skip).limit(limit)

    await connectToDB();
    const tenders = await Tender.find(queryObject);
    return NextResponse.json(tenders);
  } catch (error) {
    console.log(error);
  }
}
