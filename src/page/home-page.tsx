import Image from "next/image";
import { PostListPage } from "./post-list-page";

export default function HomePage(){
    return(
        <div>
            <div className="flex flex-row px-24 py-20 justify-around ">
                {/* Post list */}
                <PostListPage/>
                {/* user list */}
                <div className="flex flex-row justify-center bg-[#fff] ml-20" style={{width: '20%'}}>
                    <div className="mr-6">
                        <Image alt="avatar" src={'/user.jpg'} width={100} height={100} className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        <p>title</p>
                        <p>body</p>
                    </div>
                </div>
            </div>

        </div>
    )
}