import { connectDb } from '../../helper/db';
import { appoiments } from '../../modals/appoiments';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request, response) {
    connectDb();
    try {
        const getAppoiment = await appoiments.find();
        return NextResponse.json(getAppoiment, { status: 200 });
    } catch (error) {
        return NextResponse.json({ "error": error }, { status: 500 });
    }

}