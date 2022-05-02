import { Suspense, useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { useStore } from '../../store'

function Ready({ setReady }: { setReady: Dispatch<SetStateAction<boolean>> }) {
    useEffect(() => () => void setReady(true), [])
    return null
}

function Loader() {
    const { progress, loaded,total } = useProgress()
    return (<div className={`text-center fullscreen bg ${loaded ? 'ready' : 'notready'}`}>
        <div className="stack">
            <div className="intro-keys">
                <h1 className="text-5xl">
                    Openforge Builder
                </h1>
                <a className="continue-link" href="#" >
                    {loaded ?` loading ${progress.toFixed()}%` : 'Click to continue'}
                </a>
            </div>
        </div>
    </div>)
}


interface IntroProps {
    children: ReactNode
}

export function Intro({ children }: IntroProps): JSX.Element {
    return (
        <>
            <Suspense fallback={<Loader/>}>{children}</Suspense>
        </>
    )
}
