import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="p-[100px] bg-zinc-800 flex flex-col justify-center items-center">
            <Image className="bg-yellow-200 rounded-lg" src="/dashboard.png" width="1080" height="500" />
        </div>
    )
}