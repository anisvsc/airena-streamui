import { Input } from "@/components/ui/input";
import Comment from "./comment";
import { Send, SendHorizonal } from "lucide-react";

export default function CommentBox() {
  return (
    <div className="mt-8 rounded-2xl bg-[#0f1111]">
      <h2 className="p-4 border-b font-bold">Comments</h2>
      <div className="flex flex-col space-y-4 p-4 border-b">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="p-4 flex justify-between items-center gap-8">
        <Input className="rounded-full" placeholder="Type a message ..." />
        <SendHorizonal />
      </div>
    </div>
  );
}
