import { Bell, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-6 items-center">
      <div className="flex justify-between items-center gap-16">
        <div className="text-yellow-500 text-xl font-bold uppercase">Airena</div>
        <ul className="lg:flex justify-between items-center gap-4 hidden">
          <li>Browse</li>
          <li>Following</li>
          <li>Categories</li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-6 ">
        <div>
          <Search className="size-5" />
        </div>
        <div>
          <Bell className="size-5" />
        </div>
        <div>
          <User className="size-5" />
        </div>
      </div>
    </nav>
  );
}
