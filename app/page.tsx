import Image from "next/image";
import VideoPlayer from "./components/video-player";
import CommentBox from "./components/comment-box";

export default function Home() {
  return (
    <div className="py-4 flex gap-8 flex-col md:flex-row">
      {/* left side */}
      <div className="md:w-[60vw] min-h-screen">
        <VideoPlayer />
        <CommentBox />
      </div>

      {/* right side */}
      <div className="min-h-full flex-1 rounded-2xl flex justify-center items-center border">ye kal karunga</div>
    </div>
  );
}
