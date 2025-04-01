import { User } from "lucide-react";

export default function Comment() {
  return (
    <div className=" flex gap-4">
      <div className=" rounded-full size-9 flex justify-center items-center bg-primary-foreground/50 border">
        <User className="size-4" />
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <h2 className="text-base font-medium">Emily</h2>
          <p className="text-xs text-primary/50">2m ago</p>
        </div>
        <p className="text-sm">Love that summer dress!!</p>
      </div>
    </div>
  );
}
