import React, {useCallback, useEffect, useRef, useState} from "react";

let touchstartY = 0;
let smoothPullDistance = 0;
let intersectionObserver: IntersectionObserver | undefined;

interface PullToRefreshProps {
    children: React.ReactNode;
    onRefresh: () => Promise<any>;
}

type PullStatus = "idle" | "pulling" | "refresh" | "refreshing" | "complete";

const getPullStatus = (status?: PullStatus) => {
    switch (status) {
        case "idle":
            return "";
        case "pulling":
            return "下拉刷新";
        case "refresh":
            return "松手刷新";
        case "refreshing":
            return "加载中";
        case "complete":
            return "加载完成";
        default:
            return "";
    }
};

const PullToRefresh: React.FC<PullToRefreshProps> = (props: PullToRefreshProps) => {
    const {children, onRefresh} = props;
    const node = useRef<HTMLDivElement>(null);
    const loadingNode = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<PullStatus>("idle");
    const [text, setText] = useState<string>(getPullStatus());
    const statusRef = useRef(status); // 使用 ref 来保存状态值

    // 使用 useEffect 来同步 ref 和状态值
    useEffect(() => {
        statusRef.current = status;
    }, [status]);

    const calculateDisplacement = (currentY: number): number => {
        const displacement = currentY - touchstartY;
        if (displacement > 60) {
            return (displacement - 60) * 0.2 + 60;
        }
        return displacement;
    };

    const resetNodeStyle = () => {
        node.current!.style.transform = "translateY(0px)";
        node.current!.style.transition = "transform 0.5s ease 0s";
        setText(getPullStatus("idle"));
        setStatus("idle");
    };

    const updateStatusBasedOnEvent = useCallback((event: TouchEvent) => {
        if (window.scrollY === 0 && event.type === "touchstart" && event.touches.length > 0) {
            touchstartY = event.touches[0]!.clientY;
            setStatus("idle");
            setText(getPullStatus("idle"));
            node.current!.style.transition = "transform 0s";
        } else if (event.type === "touchmove" && event.touches.length !== 0) {
            if (window.scrollY === 0) {
                const displacement = calculateDisplacement(event.touches[0]!.clientY);
                if (displacement > 0) {
                    smoothPullDistance = displacement;
                    node.current!.style.transform = `translateY(${smoothPullDistance}px)`;
                }
            }
        } else if (event.type === "touchend") {
            if (statusRef.current === "refresh") {
                setStatus("refreshing");
                setText(getPullStatus("refreshing"));
                node.current!.style.transform = "translateY(64px)";
                node.current!.style.transition = "transform 0.5s ease 0s";
                if (!(typeof onRefresh === "function")) {
                    return;
                }
                onRefresh().then(() => {
                    setText(getPullStatus("complete"));
                    setStatus("complete");
                    setTimeout(() => {
                        node.current!.style.transform = "translateY(0px)";
                        node.current!.style.transition = "transform 0.5s ease 0s";
                    }, 300);
                }).catch((error) => {
                    console.error("Refresh failed:", error);
                });
            } else {
                resetNodeStyle();
            }
        }
    }, [onRefresh]);

    const handleTouchEvent = useCallback((event: TouchEvent) => {
        if (node.current === null) {
            return;
        }
        event.preventDefault();
        updateStatusBasedOnEvent(event);
    }, [updateStatusBasedOnEvent]);

    useEffect(() => {
        document.addEventListener("touchstart", handleTouchEvent, {passive: false});
        document.addEventListener("touchmove", handleTouchEvent, {passive: false});
        document.addEventListener("touchend", handleTouchEvent, {passive: false});

        return () => {
            document.removeEventListener("touchstart", handleTouchEvent);
            document.removeEventListener("touchmove", handleTouchEvent);
            document.removeEventListener("touchend", handleTouchEvent);
        };
    }, [handleTouchEvent]);

    useEffect(() => {
        if (loadingNode.current !== null) {
            intersectionObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!["refreshing", "complete"].includes(statusRef.current) && entry.isIntersecting) {
                        if (entry.intersectionRatio >= 1) {
                            setText(getPullStatus("refresh"));
                            setStatus("refresh");
                        } else {
                            setText(getPullStatus("pulling"));
                            setStatus("pulling");
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: "0px",
                threshold: [0.8, 1]
            });
            intersectionObserver.observe(loadingNode.current);
        }

        return () => {
            if (intersectionObserver) {
                intersectionObserver.disconnect();
            }
        };
    }, [onRefresh]);

    return (
        <div ref={node}>
            <div className="h-64 f-c-c fixed w-full -translate-y-64" ref={loadingNode}>
                <span>{text}</span>
                {/* <span className="i-mdi-loading animate-spin animate-duration-600"></span> */}
            </div>
            <div className="max-h-full overflow-auto">
                {children}
            </div>
        </div>
    );
};

export default PullToRefresh;
