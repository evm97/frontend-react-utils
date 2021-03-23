import React from "react";

import { useEffectSkipFirst, usePrevious } from "./common";

export function useStickyEffectDetector(onChangeStickyEffect: (sticky: boolean) => void) {
  const onChangeStickyEffectRef = React.useRef(onChangeStickyEffect);

  useEffectSkipFirst(() => {
    onChangeStickyEffectRef.current = onChangeStickyEffect;
  }, [onChangeStickyEffect]);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([e]) => onChangeStickyEffectRef.current(e.intersectionRatio < 1), {
        threshold: [1],
      }),
    [],
  );

  const previousObserver = usePrevious(observer);

  useEffectSkipFirst(() => previousObserver.disconnect(), [observer]);

  return React.useMemo(
    () => (element?: HTMLElement) => {
      if (!element) return;
      observer.observe(element);
    },
    [observer],
  );
}
