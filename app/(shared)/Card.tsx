import React from 'react'
import Link from 'next/link';
import { Post } from '@prisma/client';
import Image from 'next/image';

type Props = {
    className?:string;
    imageHeight?:string;
    isSmallCard?:boolean;
    isLongForm?:boolean;
    post:Post;
}

const Card = ({className,imageHeight,post,isSmallCard=false,isLongForm=false}:Props) => {
    const{id,title,author,createdAt,image,snippet}=post||{};
    const date=new Date(createdAt);
    const options={ year:"numeric",month:"long",day:"numeric"} as any;
    const formattedDate=date.toLocaleDateString("en-US",options);
  return (
    <div className={className}>
    <Link className="basis-full hover:opacity-70" 
     href={`/post/${post?.id}`}>
        <div className={`relative w-auto mb-3 ${imageHeight}`}>

        <Image 
        fill
        alt="tech"
        src={image}
        placeholder="blur"
        sizes="(max-width: 480px) 100vw,
        (max-width:768px)75vw,
        (max-width:1060px)50vw,
        33vw"
        style={{objectFit:"cover"}}
        />
        </div>
    </Link>
    <div className="basis-full">
     <Link  href={`/post/${post?.id}`}>
        <h4 className={`font-bold hover:text-accent-green
       ${ isSmallCard ?"text-base":"text-lg"}
       ${ isSmallCard}?"tline-clamp-2":""}`}
       >
        {title}
       </h4>


     </Link>
     <div className={`${isSmallCard?"my-2" :"flex my-3"} gap-3`}>
     <h5 className="font-semibold text-xs">{author}</h5>
     <h6 className="text-wh-300 text-x5">{formattedDate}</h6>
</div>
<p className={`text-wh-100 ${isLongForm?"Line-clamp-5":"Line-clamp-3"}`}>
    {snippet}
</p>
    </div>
    </div>
  )
}

export default Card