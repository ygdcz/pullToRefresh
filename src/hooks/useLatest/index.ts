import {MutableRefObject, useRef} from "react";

export type UseLatest = <T>(value: T) => MutableRefObject<T>;

export default function useLatest<T>(value: T): MutableRefObject<T>{
    const ref = useRef<T>(value);    
    ref.current = value;
    return ref;
}