"use client"

import { BlogService } from "@app/api/blog-service/blog";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export async function generateMetadata(
  { params, searchParams },
  parent
){
  // read route params
  const id = params.id
 
  // fetch data
  const blog = await BlogService.GetDetail(id)
 
  return {
    title: `${blog.title} | Time`,
    description: blog.sumary,
    content: "text/html; charset=UTF-8",
  }
}


// export const metadata = {
//   title: "GM to Retire the Chevrolet Malibu",
//   description: "The Chevrolet Malibu, the last midsize car made by a Detroit automaker, is heading for the junkyard.",
//   content: "text/html; charset=UTF-8",
// };
function convertToEmbedUrl(url) {
  if ( !url ) return ""
  // Check if the URL matches the YouTube video URL pattern
  var regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  var match = url.match(regex);

  // If the URL matches the pattern, construct the embeddable URL
  if (match) {
      var videoId = match[1];
      return "https://www.youtube.com/embed/" + videoId;
  } else {
      // If the URL doesn't match the pattern, return null or handle accordingly
      return null;
  }
}

const Business_Time_Detail = ({ params, searchParams }) => {
  const id = params.id
  const [blog_detail, set_blog_detail] = useState([]);
  const [minTime, setMinTime] = useState(0);

  const handleGetBlogDetail = async () => {
    const res = await BlogService.GetDetail(id);
    console.log("sdaghsjdas", res);
    set_blog_detail(res)
  }

  useEffect(() => {
    handleGetBlogDetail();
    setMinTime(getRandomNumber5To10());
  }, [])

  return (
    <>
      <div
        id="page-content"
        className="col-span-full flex flex-col items-center justify-center"
      >
        <div
          id="article-main"
          className="flex w-full max-w-article-container flex-col items-center pt-8 lg:px-6 lg:pt-12"
        >
          <div
            id="article-header"
            className="flex w-full flex-col justify-center"
          >
            <header className="col-span-full flex max-w-article-header flex-col items-center justify-center self-center px-4 pb-6">
              
              <div className="mb-4 mt-2 lg:mb-[1.4625rem]">
                <h1 className="text-center text-[1.75rem] font-medium leading-[1.875rem] tracking-0.5px lg:text-[2.4375rem] lg:leading-[2.9375rem] font-zilla-slab">
                  {blog_detail.title}
                </h1>
                <div className="mt-2 text-center font-roboto-condensed text-sm font-bold uppercase tracking-[0.6px] text-time-gray-3 md:text-base">
                  {minTime}&nbsp;
                  minute read
                </div>
              </div>
            </header>
          </div>
          <div
            id="article-content"
            className="flex w-full justify-center lg:justify-between lg:gap-5"
          >
            <div
              id="article-content-main"
              className="flex w-full max-w-article-featured-media flex-col items-center"
            >
              <div
                className="featured-media w-full max-w-full"
                data-type="image"
              >
                <figure
                  className="block h-auto w-full featured-image m-auto undefined"
                  style={{ maxWidth: 5616 }}
                >
                  <picture className="flex max-w-full flex-col items-center">
                    <img
                      src={`${blog_detail.image}`}
                    />
                  </picture>
                  <figcaption className="block max-w-full bg-white px-4 pt-2 font-roboto text-[.813rem] lg:px-0">
                    <span
                      aria-hidden="false"
                      className="inline leading-tight text-time-black"
                    >
                      {blog_detail.image_title}
                    </span>
                  </figcaption>
                </figure>
              </div>
              <article
                id="article-body"
                className="flex w-full max-w-article-body-centered flex-col lg:max-w-article-body"
              >
                <div className="my-6 w-full px-4 lg:pl-[6.5rem] lg:pr-14">
                  <div className="font-zilla-slab text-xs uppercase leading-6 tracking-[0.01563em] text-time-gray-4 text-center lg:text-left">
                    <div className="block lg:mr-3 lg:inline-block">
                      By
                      <a
                        href="#"
                        className="font-bold"
                      >
                        {blog_detail.author}
                      </a>
                    </div>
                    <div className="block lg:inline-block">
                      <time dateTime={dayjs(blog_detail.created_date).toISOString()}>
                        {/* May 9, 2024 7:12 PM EDT */}
                        {dayjs(blog_detail.created_date).format("DD/MM/YYYY")}
                      </time>
                    </div>
                  </div>
                </div>
                <div
                  id="article-body-main"
                  className="flex w-full flex-col gap-7 [&>*:not(.inline-image)]:px-4 [&>*:not(.inline-image)]:lg:pl-[6.5rem] [&>*:not(.inline-image)]:lg:pr-14 [&>.inline-image]:sm:px-4 [&>.inline-image]:lg:pl-[6.5rem] [&>.inline-image]:lg:pr-14"
                >
                  <p className="self-baseline px-0 font-pt-serif text-17px leading-7 tracking-0.5px" style={{whiteSpace: "break-spaces"}}>
                    {blog_detail.description}
                  </p>
                </div>
              </article>
              {/* <iframe src={blog_detail.youtbeLink}/> */}
              <iframe width="80%" height="487" src={convertToEmbedUrl(blog_detail.youtbeLink)} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business_Time_Detail;



function getRandomNumber5To10() {
  // Generate a random integer between 0 and 5
  const randomNumber = Math.floor(Math.random() * 6);

  // Add 5 to the random integer to get a number between 5 and 10
  const result = randomNumber + 5;

  // Return the result
  return result;
}