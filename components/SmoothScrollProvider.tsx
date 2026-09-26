"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Disable Lenis on the workspace route so code editors, previews, and chat panels scroll natively with mouse wheel
    if (pathname?.startsWith("/workspace")) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Setup requestAnimationFrame loop for Lenis scroll rendering
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept all anchor link clicks for smooth scrollTo transitions
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement instanceof HTMLElement) {
          e.preventDefault();
          
          // Smooth scroll to the target element with offset for the floating navbar
          lenis.scrollTo(targetElement, {
            offset: -90,
            immediate: false,
          });
          
          // Update URL hash without jumping
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis;
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [pathname]);

  return <>{children}</>;
}
