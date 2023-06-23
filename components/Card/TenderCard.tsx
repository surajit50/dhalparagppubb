"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
const TenderCard = () => {
  return (
    <div className="h-[350px] overflow-x-scroll">
      <ul className="latest-news-ul flex flex-col">
        <li className="flex  items-center">
          <Link href="">items.title</Link>
          <img src="/assets/images/latest-news-blink-img.gif" />
        </li>
      </ul>
    </div>
  );
};

export default TenderCard;
