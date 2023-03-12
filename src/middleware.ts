export {default} from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/lesson",
    "/review",
    "/profile",
    "/admin/kanji",
    "/admin/user",
  ],
};
