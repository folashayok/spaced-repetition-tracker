import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex flex-col bg-purple-200 h-screen">

      <nav className="flex flex-row justify-between text-2xl p-2">
        <h1 className="">Spaceo</h1> 
        <Button asChild className="bg-purple-300 text-black">
          <Link href="/dashboard">Click</Link>
        </Button> 
      </nav>


      <div className="flex flex-col items-center justify-center h-screen text-center m-6">
        <h1 className="text-7xl p-3">Improve your studying and memorization with spaced repetition</h1>
        <p className="text-2xl p-3">Spaced repetition is a scientifically proven method that involves reviewing information at closer intervals, boosting your memory, and making it less likely you’ll forget everything. Studies show it can significantly improve learning and reduce the time spent studying. </p>
      </div>
    </div>
  );
}
