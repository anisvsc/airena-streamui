import { Button } from "@/components/ui/button";
import { Ellipsis, Flag, Heart, MenuIcon, Plus, Share, Share2, User } from "lucide-react";

export default function VideoPlayer() {
  return (
    <div>
      {/* player */}
      <div className="aspect-video rounded-2xl bg-primary-foreground/50 flex justify-center items-center">video player here</div>

      {/* user stuff */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4 gap-4">
        {/* left */}
        <div className=" flex gap-4 lg:justify-between">
          <div className=" rounded-full bg-primary-foreground/50 border size-10 flex justify-center items-center">
            <User className="size-4 lg:size-5" />
          </div>
          <div>
            <h2 className="text-base font-bold lg:text-base">Summer Fashion</h2>
            <p className="text-primary/40 text-sm lg:text-xs">Sarah Style - Fashion and Beauty</p>
          </div>
        </div>

        {/* right */}
        <div className="flex lg:justify-between items-center gap-4">
          <Button className="rounded-full" size={"sm"}>
            <Plus /> Follow
          </Button>

          <div>
            <Ellipsis />
          </div>
        </div>
      </div>

      {/* likes and all */}
      <div className="flex gap-6 mt-2">
        <div className="flex items-center gap-2">
          <Heart className="size-5 text-foreground/70" /> 12.5k
        </div>
        <div className="flex items-center gap-2">
          <Share2 className="size-5 text-foreground/70" /> Share
        </div>
        <div className="flex items-center gap-2">
          <Flag className="size-5 text-foreground/70" /> Report
        </div>
      </div>
    </div>
  );
}
