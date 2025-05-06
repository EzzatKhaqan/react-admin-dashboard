import React,{Suspense} from "react";

export const LazyWrapper = (Component)=>{
    <Suspense fallback={<div>loading...</div>} >
        <Component/>
    </Suspense>
};