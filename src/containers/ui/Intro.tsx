import { Suspense, useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { useStore } from '../../store'

function Ready({ setReady }: { setReady: Dispatch<SetStateAction<boolean>> }) {
    useEffect(() => () => void setReady(true), [])
    return null
}

function Loader() {
    const { progress } = useProgress()
    return <div>loading {progress.toFixed()} %</div>
}

interface IntroProps {
    children: ReactNode
}

export function Intro({ children }: IntroProps): JSX.Element {
    const [ready, setReady] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [session,set] = useStore((state) => [state.session, state.set])

    useEffect(() => {
        console.log(clicked,ready)
        if (clicked && ready) set({ ready: true })
    }, [ready, clicked])
    console.log(ready);
    return (
        <>
            <Suspense fallback={<Ready setReady={setReady} />}>{children}</Suspense>
            <div className={`text-center fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
                <div className="stack">
                    <div className="intro-keys">
                        <h1 className="text-5xl">
                            Openforge Builder
                        </h1>
                        <a className="continue-link" href="#" onClick={() => ready && setClicked(true)}>
                            {!ready ? <Loader /> : 'Click to continue'}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
