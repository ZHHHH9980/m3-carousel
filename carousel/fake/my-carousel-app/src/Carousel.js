import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://fluid-material.vercel.app/images/1.webp",
  "https://fluid-material.vercel.app/images/2.webp",
  "https://fluid-material.vercel.app/images/3.webp",
  "https://fluid-material.vercel.app/images/4.webp",
  "https://fluid-material.vercel.app/images/5.webp",
  "https://fluid-material.vercel.app/images/6.webp",
  "https://fluid-material.vercel.app/images/7.webp",
  "https://fluid-material.vercel.app/images/8.webp",
  "https://fluid-material.vercel.app/images/9.webp",
  // 添加所有图片 URL
  "https://fluid-material.vercel.app/images/10.webp",
];

const Carousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // containerRef.current.children: 这里假设containerRef是一个使用useRef钩子创建的对DOM元素的引用。.current属性指向当前的DOM节点，.children获取该节点的所有子元素。
    const elements = Array.from(containerRef.current.children);

    elements.forEach((element, index) => {
      // gsap.fromTo(element, {...}, {...}): 这是GSAP的动画函数，用来定义元素从一个状态过渡到另一个状态。
      gsap.fromTo(
        element,
        {
          width: 100,
        },
        {
          width: 415,
          ease: "sine.inOut",
          /*
              scrollTrigger: 这部分定义了ScrollTrigger的配置
              trigger: element：当前元素作为滚动监听的触发器。
              start和end定义动画触发和结束的滚动位置。使用模板字符串和计算来动态设置这些值。
              scrub: true：使滚动和动画进度相链接，实现滚动同步动画。
              snap：配置动画结束时的“吸附”效果，使结束平滑且对齐。
            */
          scrollTrigger: {
            horizontal: !0,
            scroller: "#scroller",
            trigger: element,
            start: `${index * (element.offsetWidth + 10) - 700}px center`,
            end: `${index === 0 ? "+=0px" : "+=700px"}`,
            // start: index * (element.offsetWidth + 10) - 700,
            // end: index === 0 ? "+=0px" : "+=700px",
            scrub: !0,
            snap: {
              // snapTo: "labelsDirectional"指定滚动吸附到由标签指示的方向。在GSAP中，标签可以用来标记时间线的特定点。"labelsDirectional"表示吸附行为会基于滚动的方向（向上滚动或向下滚动）来决定吸附到上一个标签或下一个标签。这意味着如果用户向下滚动，滚动结束时将吸附到下一个标签；如果向上滚动，则吸附到上一个标签。
              snapTo: "labelsDirectional",

              // duration对象定义了吸附动作的持续时间范围。这里的min: 0.25和max: 0.5表示吸附动作的最短持续时间是0.25秒，最长是0.5秒。
              duration: { min: 0.25, max: 0.5 },
              ease: "cubic.inOut",
            },
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <main className="bingus">
      <div ref={containerRef} id="scroller" className="carousel">
        {images.map((src, index) => (
          <div
            key={src}
            className={
              index === images.length - 1
                ? "image-container last-filler-item"
                : "image-container"
            }
          >
            <img src={src} alt="test"></img>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carousel;
