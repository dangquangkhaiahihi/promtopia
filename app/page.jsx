"use client"

import { useEffect, useState } from "react";
import { BlogService } from "./api/blog-service/blog";
import Link from "next/link";
import { covertToNameUsedInUrl } from "@utils/cleanAccents";
import useAxios from "axios-hooks";
import { domain } from "@utils/configuration";
import dayjs from "dayjs";

export const metadata = {
  title: "Business | Time 123sad",
  description: "Read the latest stories about Business on Time",
  content: "text/html; charset=UTF-8",
};

const Business_Time = () => {
  const [list_paginate_blogs, set_list_paginate_blogs] = useState([]);
  const [list_recommended, set_list_recommended] = useState([]);
  const [list_hot, set_list_hot] = useState([]);

  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const handleGetListPaginateBlogs = async () => {
    try {
        const res = await BlogService.GetList({
          pageindex: pageIndex,
        });
        console.log('res.items', res.items);
        set_list_paginate_blogs(res.items);
        setPageCount(res.pageCount);
    } catch (err) {
      console.log("ERROR", err);
        set_list_paginate_blogs([]);
    }
  }

  const handleGetListRecommended = async () => {
    try {
        const res = await BlogService.GetRecommended();
        console.log('handleGetListRecommended', res);
        set_list_recommended(res);
    } catch (err) {
      console.log("ERROR", err);
        set_list_recommended([]);
    }
  }

  const handleGetListHot = async () => {
    try {
        const res = await BlogService.GetHot();
        console.log('handleGetListHot', res);
        set_list_hot(res);
    } catch (err) {
      console.log("ERROR", err);
        set_list_hot([]);
    }
  }

  useEffect(() => {
    handleGetListPaginateBlogs();
    handleGetListRecommended();
    handleGetListHot();
  }, [])

  useEffect(() => {
    handleGetListPaginateBlogs();
  }, [pageIndex]);
  
  const renderPagination = () => {
    const maxVisiblePages = 3; // Change this value according to your preference
    const pages = [];
    let startPage = Math.max(1, pageIndex - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);
  
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
  
    if (startPage > 1) {
      pages.push(
        <span key="first" onClick={() => setPageIndex(1)} style={{cursor: 'pointer', color: pageIndex === 1 ? "" : "#e90606"}}>
          1
        </span>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis-prev" className="ellipsis">
            ...
          </span>
        );
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <span key={i} onClick={() => setPageIndex(i)} className={pageIndex === i ? 'current' : ''} style={{cursor: 'pointer', color: pageIndex === i ? "" : "#e90606"}}>
          {i}
        </span>
      );
    }
  
    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        pages.push(
          <span key="ellipsis-next" className="ellipsis">
            ...
          </span>
        );
      }
      pages.push(
        <span key="last" onClick={() => setPageIndex(pageCount)} style={{cursor: 'pointer', color: pageIndex === pageCount ? "" : "#e90606"}}>
          {pageCount}
        </span>
      );
    }
  
    return pages;
  };
  

  return (
    <>
      <main>
        <div className="container-main">
          <div
            id="pagination-data"
            data-path="/section/business/"
            data-current-page={1}
            data-total-posts={10479}
            data-posts-per-page={20}
          />
          <div className="container-main__headline">
            <h1>Business</h1>
            <div className="container-main__top-tags">
              <span>
                <a
                  target="_blank"
                  href="#"
                >
                  The Leadership Brief
                </a>
              </span>
            </div>
          </div>
          <div className="container-main__headline-underline" />
          <section className="section-curated">
            <div className="section-curated__primary">
              {
                list_hot.length > 0 ?
                <div className="taxonomy-tout primary" data-index="">
                  <Link href={`/${list_hot[0].id}/${covertToNameUsedInUrl(list_hot[0].title)}`}>
                    <div className="image-wrapper">
                      <div>
                        <div className="component image-new image">
                          <div
                            className="image-container"
                            data-alt=""
                            data-fetchpriority="high"
                          >
                            <img style={{opacity: 1}}
                              src={domain + list_hot[0].image} alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <h2 className="headline">
                        {list_hot[0].title}
                      </h2>
                      <span className="byline">
                        <span>By {list_hot[0].author}</span>
                      </span>
                    </div>
                  </Link>
                </div> :<></>
              }
            </div>
            {
              list_hot.length > 1 ? 
              <div className="section-curated__secondary">
                {
                  list_hot.map((item, index) => {
                    if (index == 0) return;
                    return (
                      <div className="taxonomy-tout" key={index}>
                        <Link href={`/${item.id}/${covertToNameUsedInUrl(item.title)}`}>
                          <div className="image-wrapper">
                            <div>
                              <div className="component image-new image">
                                <div
                                  className="image-container"
                                  data-alt=""
                                >
                                  <img style={{opacity: 1}}
                                    src={domain + item.image} alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <h2 className="headline">
                              {item.title}
                            </h2>
                            <span className="byline">
                              <span>By {item.author} </span>
                            </span>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div> : <></>
            }
          </section>
          <section className="section-related">
            <div className="section-related__touts-wrapper">
              <div className="section-related__title-more">
                More in <span>Business</span>
              </div>
              <div
                className="component taxonomy-related-touts section-related__touts"
                data-index=""
              >
                {
                  list_paginate_blogs.map((item, index) => (
                    <div className="taxonomy-tout" key={index}>
                      <Link href={`/${item.id}/${covertToNameUsedInUrl(item.title)}`}>
                          <div className="image-wrapper">
                            <div>
                              <div className="component image-new image">
                                <div
                                  className="image-container"
                                  data-alt=""
                                >
                                  <img style={{opacity: 1}}
                                    src={domain + item.image} alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <h2 className="headline">
                              {item.title}
                            </h2>
                            <h3 className="summary">
                              {item.sumary}
                            </h3>
                            <span className="byline">
                              <span>{item.author}</span>&nbsp;
                              <span>
                                <time dateTime={dayjs(item.created_date).toISOString()}>
                                  {dayjs(item.created_date).format("DD/MM/YYYY")}
                                </time>
                              </span>
                            </span>
                          </div>
                      </Link>
                    </div>
                  ))
                }
              </div>
              <div className="section-related__pages">
                {renderPagination()}
                <span onClick={() => setPageIndex(prevIndex => {
                  if (prevIndex + 1 > pageCount) return prevIndex;
                  return prevIndex + 1;
                })} className="next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
                    <polygon points="10 6 8.59 7.41 13.17 12 8.59 16.59 10 18 16 12"></polygon>
                  </svg>
                </span>
              </div>
            </div>
          </section>
          <section className="section-recirc">
            <div className="section-recirc__wrapper">
              <div className="section-recirc__title-more">
                More from <span>TIME</span>
              </div>
              <div className="section-recirc__divider-line" />
              <div
                className="bottom-recirc padded-mobile"
                data-tracking-zone="bottom-recirc"
              >
                <div
                  className="component feed clearfix taxonomy-bottom-recirc"
                  data-endpoint="/element-api/content-proxy/documents"
                  data-request-data="%7B%22excluded%22%3A%5B6976739%2C6976614%2C6976336%2C6976106%2C6974376%2C6975810%2C6975797%2C6975683%2C6972880%2C6975167%2C6973935%2C6973091%2C6972668%2C6971614%2C6971710%2C6968791%2C6968812%2C6968783%2C6968805%2C6968785%5D%2C%22recirculation%22%3Atrue%7D"
                  data-partial="swipe-h"
                  data-variation="taxonomy-bottom-recirc"
                  data-type="feed"
                  data-title="More From TIME"
                >
                  <div className="subtitle feed-subtitle heading-2">
                    More From TIME
                  </div>
                  <ul className="items swipe-h">
                    {/* TODO */}
                    {
                      list_recommended.map((item, index) => (
                        <li id={`${item.id}-item`} key={index}>
                          <article className="partial tile media image-top  type-" data-crop="marquee_large_2x" data-headline-style="heading-content">
                            <div className="media-img margin-16-bottom">
                              <div className="partial figure">
                                <figure className="layout-shift-fix-base" style={{ paddingTop: '55.5%' }}>
                                  <Link href={`/${item.id}/${covertToNameUsedInUrl(item.title)}`}>
                                    <picture>
                                    <img className="fix-layout-shift" 
                                      src={domain + item.image} alt=""
                                    />
                                    </picture>
                                  </Link>
                                </figure>
                              </div>
                            </div>
                            <div className="media-body article-info bucket-margin margin-24-bottom clearfix">
                              <div className="headline heading-5 heading-content-small padding-4-top media-heading">
                                <Link href={`/${item.id}/${covertToNameUsedInUrl(item.title)}`}>
                                  {item.title}
                                </Link>
                              </div>
                              <div className="article-info-extended"></div>
                            </div>
                          </article>
                        </li>
                      ))
                    }
                  </ul>
                  <div className="taxonomy-bottom-recirc-desktop">
                    {
                      list_recommended.map((item, index) => (
                        <article className="partial tile media image-top  type-" data-crop="marquee_large_2x" data-headline-style="heading-content">
                          <div className="media-img margin-16-bottom">
                            <Link href={`/${item.id}/${covertToNameUsedInUrl(item.title)}`}>
                              <div className="partial figure">
                                <figure className="layout-shift-fix-base" style={{ paddingTop: '55.5%' }}>
                                    <picture>
                                      <img className="fix-layout-shift" 
                                        src={domain + item.image} alt=""
                                      />
                                    </picture>
                                </figure>
                              </div>
                            </Link>
                          </div>
                          <div className="media-body article-info bucket-margin margin-24-bottom clearfix">
                            <div className="headline heading-5 heading-content-small padding-4-top media-heading">
                              <Link href={`/${item.id}/${covertToNameUsedInUrl(item.title)}`}>
                                {item.title}
                              </Link>
                            </div>
                            <div className="article-info-extended"></div>
                          </div>
                        </article>

                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Business_Time;