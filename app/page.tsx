import Image from "next/image";
import VideoPlayer from "./components/video-player";
import CommentBox from "./components/comment-box";

export default function Home() {
  return (
    <div className="py-4 flex lg:gap-8 gap-4 flex-col lg:flex-row">
      {/* left side */}
      <div className="lg:w-[70%] w-full min-h-screen">
        <VideoPlayer />
        <CommentBox />
      </div>

      {/* right side */}
      <div className="min-h-full flex-1 rounded-2xl flex justify-center items-center border">ye kal karunga</div>
    </div>
  );
}
