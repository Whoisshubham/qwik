import { connectDb } from '../../../helper/db';
import { appoiments } from '../../../modals/appoiments';
import { NextResponse, NextRequest } from 'next/server';
export async function DELETE(req, content) {
  connectDb();
  if (req.method === 'DELETE') {
    if (content == null) {
      return NextResponse.json({ "error": "Id is required!" }, { status: 403 });
    }
    try {
      const deleteData = await appoiments.findById(content.params.id);

      if (deleteData) {
        const status = await appoiments.deleteOne({ _id: content.params.id });

        return NextResponse.json({ success: true }, { message: "Send Successfully!" }, { status: 200 });
      } else {
        return NextResponse.json({ "message": "No Data By this id!" }, { status: 203 });
      }

    } catch (error) {
      console.log(error);
      return NextResponse.json({ "message": "somthing Went Wrong!" }, { status: 400 });
    }

    
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}