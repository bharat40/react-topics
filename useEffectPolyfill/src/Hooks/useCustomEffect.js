import { useRef } from "react"

const useCustomEffect = (callbfn, depdns) => {
    // first render
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);
    if (isFirstRender.current) {
        isFirstRender.current = false;
        callbfn();
        return;
    }
    // dependencies changes and no dependency array
    const depsChange = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true
    if (depsChange) {
        callbfn();
    }
    // cleanup functon


    prevDeps.current = deps || [];
}
export default useCustomEffect;