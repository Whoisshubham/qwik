import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
const jwt = require('jsonwebtoken');


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookieStore = cookies()
  const token = await request.cookies.get('token') ?? "value";
  const value = token.value ?? "value";
  const decodedToken = jwt.decode(value, { complete: true });
  if (decodedToken == null || decodedToken.payload.email !== "admin@gmail.com") {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {

  matcher: ['/admin/dashboard/:path*',
    '/admin/inbox:path*'
  ],

}