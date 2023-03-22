import { useNProgress } from "@tanem/react-nprogress";

export default function LoadingBar({ isRouteChanging }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  const cont = {
    opacity: isFinished ? 0 : 1,
    pointerEvents: "none",
    transition: `opacity ${animationDuration}ms linear`,
  };

  const bar = {
    background: "#F6FBFF",
    height: "2px",
    left: 0,
    marginLeft: `${(-1 + progress) * 100}%`,
    position: "fixed",
    top: 0,
    transition: `margin-left ${animationDuration}ms linear`,
    width: "100%",
    zIndex: 1031,
  };

  const spinner = {
    boxShadow: `0 0 10px #29d, 0 0 5px #29d`,
    display: "block",
    height: "100%",
    opacity: 1,
    position: "absolute",
    right: 0,
    transform: "rotate(3deg) translate(0px, -4px)",
    width: "100px",
  };

  return (
    <div style={cont}>
      <div style={bar}>
        <div style={spinner} />
      </div>
    </div>
  );
}
