import Tender from "@models/tender";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const tender = await Tender.find(params.tenderId);
    if (!tender) return new Response("Tender Not Found", { status: 404 });

    return new Response(JSON.stringify(tender), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
