import React, { useState } from "react";
import WordCounter from "./WordCounter";
import NlStripper from "./NlStripper";
const Page = () => {
    return (
        <div className="main-page">
            <WordCounter />
            <NlStripper />
        </div>
    )
}

export default Page;