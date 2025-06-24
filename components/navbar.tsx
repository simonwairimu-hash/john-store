import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const storeId = "6ef56bf2-edda-467a-a16e-0fbc92b0791e";
  const categories = await getCategories(storeId);
  return(
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">JOHN FASHION STORE</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}
export default  Navbar;