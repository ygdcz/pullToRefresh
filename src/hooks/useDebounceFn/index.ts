import {useMemo, useRef} from "react";
import useLatest from "../useLatest";

type noop = (...args: any[]) => any;

export type DebouncedFunc<T extends noop> = T & {
  cancel: () => void;
  flush: () => void;
  pending: () => boolean;
};

export type DebounceSettings = {
  leading?: boolean;
  trailing?: boolean;
};

export type DebounceOptions = DebounceSettings & {
  maxWait?: number;
};

export function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
    const fnRef = useLatest(fn);
    const schedule = useRef<number>();

    const wait = options?.maxWait ?? 1000;

    const debounced = useMemo(() => {
        return (...args: Parameters<T>) => {
            clearTimeout(schedule.current);
            schedule.current = setTimeout(() => {
                fnRef.current(...args);
            }, wait);
        }
    }, [wait]);

    return debounced;
}