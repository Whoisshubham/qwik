
import { connectDb } from '../../helper/db';
import { appoiments } from '../../modals/appoiments';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request, response) {
 

  const { name, email, phone, message, selectTestFor } = await request.json();
  const result = await new appoiments({
    name,
    email,
    phone,
    message,
    selectTestFor
  });
  
  try {
    connectDb();
    const saveData = await result.save();
    return NextResponse.json({ "message": "Send Successfully!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 403,
      errors: { error }
    });
  }

}
