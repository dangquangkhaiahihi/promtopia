import "@styles/global.css";
import "@styles/section.css";
import "@styles/d2fa83842ed0de50.css";
import "@styles/fa856d16d7c632cd.css";
import { domain } from "@utils/configuration";
import Link from "next/link";

const RootLayout = ({ children, meta }) => {
  return (
    <html lang="en">
        <head>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Business | Time</title>

            <link
                rel="shortcut icon"
                href="assets/favicon/favicon-32.png"
                type="image/vnd.microsoft.icon"
            />
            <link
                rel="icon"
                href="assets/favicon/favicon-32.png"
                sizes="32x32"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-57.png"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-57.png"
                sizes="57x57"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-72.png"
                sizes="72x72"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-76.png"
                sizes="76x76"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-114.png"
                sizes="114x114"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-120.png"
                sizes="120x120"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-144.png"
                sizes="144x144"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-152.png"
                sizes="152x152"
            />
            <link
                rel="apple-touch-icon"
                href="assets/favicon/favicon-180.png"
                sizes="180x180"
            />
            <link
                rel="icon"
                sizes="192x192"
                href="assets/favicon/favicon-192.png"
            />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="Read the latest stories about Business on Time"
            />
            <link rel="canonical" href={domain} />
            <meta property="og:title" content="Business | Time" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Time" />
            <meta property="og:url" content={domain} />
            <meta
                property="og:description"
                content="Read the latest stories about Business on Time"
            />
            <meta
                name="pinterest:url"
                content={domain}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={domain} />
            <meta name="twitter:title" content="Business" />
            <meta
                name="twitter:description"
                content="Read the latest stories about Business on Time"
            />
            <meta
                name="pinterest:description"
                content="Read the latest stories about Business on Time"
            />
            <meta name="twitter:site" content="@TIME" />
            <meta property="fb:app_id" content="991230477954201" />
            <meta property="fb:pages" content="10606591490" />
        </head>
        <body className="">
            <header
                id="page-header"
                className="top-0 z-50 col-span-full w-full sticky"
            >
                <div>
                    <div className="fixed left-0 top-0 z-40 h-full w-full bg-[rgba(0,0,0,0.7)] [transition:opacity_0.3s_ease-in-out] pointer-events-none opacity-0" />
                    <nav className="relative left-0 top-0 z-50 flex h-navbar-height w-full items-center justify-between overflow-hidden px-3 lg:px-6 border-b border-solid border-time-gray-6 bg-white [transition:all_0.09s_ease-in]">
                    <div className="flex items-center">
                        <button
                        type="button"
                        aria-label="Navigation Menu Button"
                        className="mr-2 px-2"
                        >
                        <div className="relative h-6 w-6 px-[0.1875rem] py-1.5">
                            <div className="absolute h-[0.0625rem] w-5 [transition:transform_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] before:absolute before:left-0 before:top-[0.3125rem] before:h-[0.0625rem] before:w-5 before:[transition:opacity_0.15s_ease_0.18s] after:absolute after:left-0 after:top-2.5 after:h-[0.0625rem] after:w-5 after:[transition:transform_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] bg-time-black before:bg-time-black after:bg-time-black" />
                        </div>
                        </button>
                        <div className="absolute left-[50%] [transition:transform_0.3s_ease-in-out,opacity_0.2s_ease-in-out] lg:static lg:translate-x-0 translate-x-[-50%]">
                        <Link href="/">
                            <img src="/assets/icons/logo.svg" title="Logo" alt="Logo" style={{height: '40px'}}/>
                            {/* <svg
                                role="img"
                                width={82}
                                preserveAspectRatio="xMinYMin meet"
                                viewBox="0 0 98 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <title>TIME Logo</title>
                                <path
                                    fill="#e90606"
                                    d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"
                                />
                            </svg> */}
                        </Link>
                        </div>
                    </div>
                    </nav>
                    <nav
                    className="fixed left-[-300px] z-50 h-[calc(100%-theme(height.navbar-height))] w-[300px] overflow-y-scroll bg-white p-5 pb-8 [transition:transform_0.3s_ease-in-out]"
                    style={{ top: "calc(0px + 3.5rem)" }}
                    >
                    <div className="mb-4 border-b border-b-time-gray-7 pb-4">
                        <div className="py-1 font-roboto text-xs font-bold uppercase leading-7 text-time-gray-1">
                        Sections
                        </div>
                        <ul>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Home
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            U.S.
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Politics
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            World
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Health
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Climate
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Future of Work by Charter
                            </a>
                        </li>
                        <li>
                            <a
                            href={domain}
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Business
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Tech
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Entertainment
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Ideas
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Science
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            History
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Sports
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Magazine
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME 2030
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Next Generation Leaders
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME100 Leadership Series
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME Studios
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Video
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME100 Talks
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIMEPieces
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            The TIME Vault
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME for Health
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.timeforkids.com/"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME for Kids
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.timeedge.com/login"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME Edge
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.co2.com/"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME CO2
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Red Border: Branded Content by TIME
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Coupons
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Personal Finance by TIME Stamped
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Shopping by TIME Stamped
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mb-4 border-b border-b-time-gray-7 pb-4">
                        <div className="py-1 font-roboto text-xs font-bold uppercase leading-7 text-time-gray-1">
                        Join Us
                        </div>
                        <ul>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Newsletters
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Subscribe
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Give a Gift
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Shop the TIME Store
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://timecoverstore.com/"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            TIME Cover Store
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mb-4 border-b border-b-time-gray-7 pb-4">
                        <div className="py-1 font-roboto text-xs font-bold uppercase leading-7 text-time-gray-1">
                        Customer Care
                        </div>
                        <ul>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            US &amp; Canada
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Global Help Center
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mb-4 border-b border-b-time-gray-7 pb-4">
                        <div className="py-1 font-roboto text-xs font-bold uppercase leading-7 text-time-gray-1">
                        Reach Out
                        </div>
                        <ul>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Careers
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Press Room
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Contact the Editors
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Media Kit
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Reprints and Permissions
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mb-4 border-b border-b-time-gray-7 pb-4">
                        <div className="py-1 font-roboto text-xs font-bold uppercase leading-7 text-time-gray-1">
                        More
                        </div>
                        <ul>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            About Us
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Your Privacy Rights
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Terms of Use
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Modern Slavery Statement
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-1 font-roboto text-sm font-light leading-7 text-time-gray-1 hover:text-time-red"
                            >
                            Site Map
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <div className="py-1 font-roboto text-xs font-bold uppercase leading-7 text-time-gray-1">
                        Connect with Us
                        </div>
                        <ul className="flex gap-1">
                        <li>
                            <a
                            href="https://www.facebook.com/time"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            >
                            <svg
                                role="img"
                                aria-hidden="true"
                                width={36}
                                height={36}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fillRule="evenodd" fill="none" stroke="null">
                                <path
                                    d="M32.95 18c0 8.258-6.693 14.95-14.95 14.95S3.05 26.26 3.05 18 9.742 3.05 18 3.05 32.95 9.74 32.95 18"
                                    strokeWidth={2}
                                    stroke="#e90606"
                                />
                                <path
                                    d="M19.718 13.698c.433-.014.866-.004 1.3-.004h.18V11.57c-.232-.023-.473-.054-.716-.065-.445-.02-.89-.04-1.336-.03-.68.013-1.323.17-1.884.55-.644.435-.998 1.05-1.132 1.773-.057.3-.07.607-.08.912-.01.477-.002.953 0 1.43v.18h-2.16v2.373h2.147v5.966h2.622V18.7h2.134l.33-2.385h-.482c-.608.002-2.004 0-2.004 0s.006-1.177.02-1.687c.02-.7.46-.912 1.057-.932"
                                    fill="#e90606"
                                />
                                </g>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.instagram.com/time/?hl=en"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            >
                            <svg
                                role="img"
                                aria-hidden="true"
                                width={36}
                                height={36}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fillRule="evenodd" fill="none" stroke="null">
                                <path
                                    d="M32.95 18c0 8.257-6.693 14.95-14.95 14.95S3.05 26.258 3.05 18 9.742 3.05 18 3.05 32.95 9.742 32.95 18"
                                    strokeWidth={2}
                                    stroke="#e90606"
                                />
                                <path
                                    d="M22.624 22c0 .344-.28.624-.623.624h-8.47c-.342 0-.62-.28-.62-.623v-5.13h1.218c-.07.29-.104.59-.104.9 0 2.07 1.677 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-.306-.038-.604-.108-.89h1.22V22zm-7.137-5.13c.356-.907 1.24-1.552 2.274-1.552 1.04 0 1.92.645 2.28 1.553.11.28.17.58.17.9 0 1.347-1.1 2.444-2.44 2.444-1.345 0-2.442-1.097-2.442-2.443 0-.314.06-.615.17-.89zm4.916-3.576c0-.19.154-.344.344-.344h1.49c.19 0 .344.154.344.344v1.49c0 .19-.15.344-.34.344h-1.49c-.19 0-.34-.154-.34-.344v-1.49zM22 11.592h-8.478c-1.065 0-1.93.865-1.93 1.93v8.48c0 1.064.865 1.93 1.93 1.93h8.48c1.065 0 1.93-.866 1.93-1.93v-8.48c0-1.065-.865-1.93-1.93-1.93z"
                                    fill="#e90606"
                                />
                                </g>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://twitter.com/time"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                            >
                            <svg
                                role="img"
                                aria-hidden="true"
                                width={36}
                                height={36}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M32.977 18C32.977 26.272 26.272 32.976 18 32.976C9.728 32.976 3.023 26.272 3.023 18C3.023 9.728 9.728 3.024 18 3.024C26.272 3.024 32.977 9.728 32.977 18Z"
                                stroke="#e90606"
                                strokeWidth={2}
                                />
                                <path
                                d="M18.5899 17.7781L22.712 13H21.7352L18.1559 17.1487L15.2972 13H12L16.323 19.2736L12 24.2842H12.9769L16.7566 19.903L19.7757 24.2842H23.0729L18.5896 17.7781H18.5899ZM17.2519 19.3289L16.8139 18.7042L13.3288 13.7333H14.8293L17.6417 17.745L18.0798 18.3697L21.7356 23.5843H20.2352L17.2519 19.3292V19.3289Z"
                                fill="#e90606"
                                />
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.pinterest.com/timemagazine"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Pinterest"
                            >
                            <svg
                                role="img"
                                aria-hidden="true"
                                width={36}
                                height={36}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fillRule="evenodd" fill="none" stroke="null">
                                <path
                                    d="M32.976 18c0 8.272-6.705 14.976-14.976 14.976-8.27 0-14.976-6.704-14.976-14.976C3.024 9.728 9.73 3.024 18 3.024S32.976 9.728 32.976 18"
                                    strokeWidth={2}
                                    stroke="#e90606"
                                />
                                <path
                                    d="M17.162 20.54c-.012.038-.022.072-.03.105-.505 1.976-.562 2.415-1.08 3.332-.247.437-.525.85-.834 1.246-.034.044-.067.102-.137.088-.07-.01-.08-.08-.08-.14-.08-.6-.13-1.2-.11-1.81.03-.79.13-1.06 1.15-5.34.02-.06 0-.12-.02-.18-.24-.65-.29-1.32-.08-2 .46-1.46 2.12-1.57 2.41-.36.18.75-.292 1.72-.654 3.16-.3 1.19 1.1 2.04 2.298 1.17 1.106-.8 1.534-2.72 1.45-4.08-.16-2.71-3.13-3.29-5.02-2.42-2.16 1-2.65 3.68-1.675 4.91.126.157.22.25.18.41-.06.244-.117.49-.186.735-.05.184-.2.25-.384.175-.36-.148-.66-.377-.9-.678-.83-1.026-1.07-3.057.03-4.776 1.212-1.906 3.47-2.676 5.534-2.443 2.468.28 4.02 1.964 4.316 3.873.13.87.035 3.012-1.186 4.53-1.404 1.74-3.68 1.854-4.73.785-.08-.08-.146-.18-.225-.272"
                                    fill="#e90606"
                                />
                                </g>
                            </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
            <div className="above-footer" />
            <footer className="main padding-24-top">
                <div className="logo-container margin-0-auto">
                <a
                    className="display-inline-block"
                    href="#"
                    aria-label="Logo"
                >
                    <img src="/assets/icons/logo.svg" title="Logo" alt="Logo" style={{height: '40px'}}/>
                    {/* <svg
                        role="img"
                        // itemProp="logo"
                        width="90px"
                        height="100%"
                        preserveAspectRatio="xMinYMin meet"
                        viewBox="0 0 98 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                    <title>TIME logo</title>
                    <path
                        fill="#e90606"
                        d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"
                    />
                    </svg> */}
                </a>
                </div>
                <div
                className="social-container margin-0-auto padding-24-tb display-flex rule-bottom"
                data-tracking-zone="footer"
                >
                <span
                    className="icon icon-facebook-circle-stroke social-stroke-icon color-accent margin-4-right"
                    data-social-service="Facebook"
                >
                    <a
                    href="https://www.facebook.com/time"
                    className="display-block"
                    target="_blank"
                    rel="noopener"
                    title="Facebook share"
                    aria-label="Share on Facebook"
                    >
                    <svg
                        width={36}
                        height={36}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        <g fillRule="evenodd" fill="none" stroke="null">
                        <path
                            d="M32.95 18c0 8.258-6.693 14.95-14.95 14.95S3.05 26.26 3.05 18 9.742 3.05 18 3.05 32.95 9.74 32.95 18"
                            strokeWidth={2}
                            stroke="#B7B4B4"
                        />
                        <path
                            d="M19.718 13.698c.433-.014.866-.004 1.3-.004h.18V11.57c-.232-.023-.473-.054-.716-.065-.445-.02-.89-.04-1.336-.03-.68.013-1.323.17-1.884.55-.644.435-.998 1.05-1.132 1.773-.057.3-.07.607-.08.912-.01.477-.002.953 0 1.43v.18h-2.16v2.373h2.147v5.966h2.622V18.7h2.134l.33-2.385h-.482c-.608.002-2.004 0-2.004 0s.006-1.177.02-1.687c.02-.7.46-.912 1.057-.932"
                            fill="#B7B4B4"
                        />
                        </g>
                    </svg>
                    </a>
                </span>
                <span
                    className="icon icon-instagram-circle-stroke social-stroke-icon color-accent margin-4-right"
                    data-social-service="Instagram"
                >
                    <a
                    href="https://www.instagram.com/time/?hl=en"
                    className="display-block"
                    target="_blank"
                    rel="noopener"
                    title="Instagram share"
                    aria-label="Share on Instagram"
                    >
                    <svg
                        width={36}
                        height={36}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        <g fillRule="evenodd" fill="none" stroke="null">
                        <path
                            d="M32.95 18c0 8.257-6.693 14.95-14.95 14.95S3.05 26.258 3.05 18 9.742 3.05 18 3.05 32.95 9.742 32.95 18"
                            strokeWidth={2}
                            stroke="#B7B4B4"
                        />
                        <path
                            d="M22.624 22c0 .344-.28.624-.623.624h-8.47c-.342 0-.62-.28-.62-.623v-5.13h1.218c-.07.29-.104.59-.104.9 0 2.07 1.677 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-.306-.038-.604-.108-.89h1.22V22zm-7.137-5.13c.356-.907 1.24-1.552 2.274-1.552 1.04 0 1.92.645 2.28 1.553.11.28.17.58.17.9 0 1.347-1.1 2.444-2.44 2.444-1.345 0-2.442-1.097-2.442-2.443 0-.314.06-.615.17-.89zm4.916-3.576c0-.19.154-.344.344-.344h1.49c.19 0 .344.154.344.344v1.49c0 .19-.15.344-.34.344h-1.49c-.19 0-.34-.154-.34-.344v-1.49zM22 11.592h-8.478c-1.065 0-1.93.865-1.93 1.93v8.48c0 1.064.865 1.93 1.93 1.93h8.48c1.065 0 1.93-.866 1.93-1.93v-8.48c0-1.065-.865-1.93-1.93-1.93z"
                            fill="#B7B4B4"
                        />
                        </g>
                    </svg>
                    </a>
                </span>
                <span
                    className="icon icon-twitter-circle-stroke social-stroke-icon color-accent margin-4-right"
                    data-social-service="Twitter"
                >
                    <a
                    href="https://twitter.com/time"
                    className="display-block"
                    target="_blank"
                    rel="noopener"
                    title="Twitter share"
                    aria-label="Share on Twitter"
                    >
                    <svg
                        width={36}
                        height={36}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        <g fillRule="evenodd" fill="none" stroke="null">
                        <path
                            d="M32.977 18c0 8.272-6.705 14.976-14.977 14.976S3.023 26.272 3.023 18C3.023 9.728 9.728 3.024 18 3.024S32.977 9.728 32.977 18"
                            strokeWidth={2}
                            stroke="#B7B4B4"
                        />
                        <path
                            d="M15.783 21.476c-1.48-.052-2.404-1.114-2.65-1.976.413.078.82.063 1.222-.037.01-.002.02-.01.04-.018-.8-.187-1.42-.616-1.848-1.307-.286-.46-.422-.962-.418-1.514.4.214.81.333 1.26.345-.607-.44-1.01-1.01-1.177-1.73-.164-.73-.057-1.42.306-2.07 1.54 1.813 3.492 2.81 5.872 2.973-.02-.113-.037-.21-.048-.31-.08-.67.054-1.295.416-1.86.454-.71 1.1-1.15 1.93-1.29.96-.156 1.796.117 2.495.795.046.045.085.06.15.045.586-.125 1.14-.335 1.657-.635l.04-.02h.02c-.225.664-.635 1.174-1.22 1.55.553-.06 1.08-.206 1.586-.426l.01.013c-.11.143-.215.29-.327.427-.302.373-.65.7-1.035.984-.034.025-.05.05-.05.09.016.424 0 .846-.053 1.266-.11.885-.352 1.73-.73 2.534-.39.833-.9 1.585-1.54 2.246-1.083 1.12-2.39 1.844-3.912 2.18-.52.115-1.05.173-1.585.19-1.64.046-3.16-.36-4.554-1.224l-.066-.043c.996.107 1.94-.02 2.85-.393.484-.197.93-.457 1.354-.79"
                            fill="#B7B4B4"
                        />
                        </g>
                    </svg>
                    </a>
                </span>
                <span
                    className="icon icon-pinterest-circle-stroke social-stroke-icon color-accent"
                    data-social-service="Pinterest"
                >
                    <a
                    href="https://www.pinterest.com/timemagazine"
                    className="display-block"
                    target="_blank"
                    rel="noopener"
                    title="Pinterest share"
                    aria-label="Share on Pinterest"
                    >
                    <svg
                        width={36}
                        height={36}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        <g fillRule="evenodd" fill="none" stroke="null">
                        <path
                            d="M32.976 18c0 8.272-6.705 14.976-14.976 14.976-8.27 0-14.976-6.704-14.976-14.976C3.024 9.728 9.73 3.024 18 3.024S32.976 9.728 32.976 18"
                            strokeWidth={2}
                            stroke="#B7B4B4"
                        />
                        <path
                            d="M17.162 20.54c-.012.038-.022.072-.03.105-.505 1.976-.562 2.415-1.08 3.332-.247.437-.525.85-.834 1.246-.034.044-.067.102-.137.088-.07-.01-.08-.08-.08-.14-.08-.6-.13-1.2-.11-1.81.03-.79.13-1.06 1.15-5.34.02-.06 0-.12-.02-.18-.24-.65-.29-1.32-.08-2 .46-1.46 2.12-1.57 2.41-.36.18.75-.292 1.72-.654 3.16-.3 1.19 1.1 2.04 2.298 1.17 1.106-.8 1.534-2.72 1.45-4.08-.16-2.71-3.13-3.29-5.02-2.42-2.16 1-2.65 3.68-1.675 4.91.126.157.22.25.18.41-.06.244-.117.49-.186.735-.05.184-.2.25-.384.175-.36-.148-.66-.377-.9-.678-.83-1.026-1.07-3.057.03-4.776 1.212-1.906 3.47-2.676 5.534-2.443 2.468.28 4.02 1.964 4.316 3.873.13.87.035 3.012-1.186 4.53-1.404 1.74-3.68 1.854-4.73.785-.08-.08-.146-.18-.225-.272"
                            fill="#B7B4B4"
                        />
                        </g>
                    </svg>
                    </a>
                </span>
                </div>
                <nav
                className="footer-links margin-0-auto padding-16-tb rule-bottom"
                data-tracking-zone="footer"
                aria-label="Footer Navigation"
                >
                <section>
                    <ul className="margin-8-top">
                    <li>
                        <a href="#"> Home </a>
                    </li>
                    <li>
                        <a href="#"> U.S. </a>
                    </li>
                    <li>
                        <a href="#"> Politics </a>
                    </li>
                    <li>
                        <a href="#"> World </a>
                    </li>
                    <li>
                        <a href="#"> Health </a>
                    </li>
                    <li>
                        <a href={domain}> Business </a>
                    </li>
                    <li>
                        <a href="#"> Tech </a>
                    </li>
                    <li>
                        <a href="#personal-finance/">
                        Personal Finance by TIME Stamped
                        </a>
                    </li>
                    <li>
                        <a href="#shopping/">
                        Shopping by TIME Stamped
                        </a>
                    </li>
                    <li>
                        <a href="#charter/">
                        Future of Work by Charter
                        </a>
                    </li>
                    </ul>
                </section>
                <section>
                    <ul className="margin-8-top">
                    <li>
                        <a href="#">
                        Entertainment
                        </a>
                    </li>
                    <li>
                        <a href="#"> Ideas </a>
                    </li>
                    <li>
                        <a href="#"> Science </a>
                    </li>
                    <li>
                        <a href="#"> History </a>
                    </li>
                    <li>
                        <a href="#"> Sports </a>
                    </li>
                    <li>
                        <a href="#magazine"> Magazine </a>
                    </li>
                    <li>
                        <a href="#vault/"> The TIME Vault </a>
                    </li>
                    <li>
                        <a href="#"> TIME For Kids </a>
                    </li>
                    <li>
                        <a href="https://www.co2.com/"> TIME CO2 </a>
                    </li>
                    <li>
                        <a href="#coupons"> Coupons </a>
                    </li>
                    </ul>
                </section>
                <section>
                    <ul className="margin-8-top">
                    <li>
                        <a href="#"> TIME Edge </a>
                    </li>
                    <li>
                        <a href="#"> Video </a>
                    </li>
                    <li>
                        <a href="#"> Masthead </a>
                    </li>
                    <li>
                        <a href="#newsletters/?source=TD_Footer_Link">
                        Newsletters
                        </a>
                    </li>
                    <li>
                        <a
                        href="#subscribe-footer-time"
                        className="subx_track_952 subscribe-link"
                        data-key="qobuskf@g"
                        data-event={4}
                        data-location="footer"
                        >
                        Subscribe
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Subscriber Benefits
                        </a>
                    </li>
                    <li>
                        <a href="#"> Give a Gift </a>
                    </li>
                    <li>
                        <a href="#">
                        {" "}
                        Shop the TIME Store{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#"> Careers </a>
                    </li>
                    <li>
                        <a href="#">
                        Modern Slavery Statement
                        </a>
                    </li>
                    </ul>
                </section>
                <section>
                    <ul className="margin-8-top">
                    <li>
                        <a href="#">
                        {" "}
                        Press Room{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#"> TIME Studios </a>
                    </li>
                    <li>
                        <a href="#">
                        U.S. &amp; Canada Customer Care
                        </a>
                    </li>
                    <li>
                        <a href="#"> Global Help Center </a>
                    </li>
                    <li>
                        <a href="#"> Contact the Editors </a>
                    </li>
                    <li>
                        <a href="#">
                        Reprints and Permissions
                        </a>
                    </li>
                    <li>
                        <a href="#"> Site Map </a>
                    </li>
                    <li>
                        <a href="#"> Media Kit </a>
                    </li>
                    <li>
                        <a href="#">
                        Supplied Partner Content
                        </a>
                    </li>
                    <li>
                        <a href="#"> About Us </a>
                    </li>
                    </ul>
                </section>
                </nav>
                <div className="footer-legal padding-16-tb text-align-center">
                © 2024 TIME USA, LLC. All Rights Reserved. Use of this site
                constitutes acceptance of our
                <a href="#">
                    Terms of Service
                </a>
                ,
                <a href="#">
                    Privacy Policy
                </a>
                (
                <a href="#">
                    Your Privacy Rights
                </a>
                ) and
                <a href="#" className="grey-link">
                    Do Not Sell or Share My Personal Information
                </a>
                .<br />
                TIME may receive compensation for some links to products and
                services on this website. Offers may be subject to change without
                notice.
                </div>
            </footer>
        </body>
    </html>
  );
};

export default RootLayout;
