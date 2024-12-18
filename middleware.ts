import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
const locales = ['en', 'pt']
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  if (pathnameIsMissingLocale) {
    const locale = 'en'
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}