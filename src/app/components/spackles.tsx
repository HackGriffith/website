import { useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { range, sample, random } from 'lodash'
import { Text } from 'theme-ui'
import React from 'react'

const theme = {
    colors: {
        darker: '#121217',
        dark: '#17171d',
        darkless: '#252429',

        black: '#1f2d3d',
        steel: '#273444',
        slate: '#3c4858',
        muted: '#8492a6',
        smoke: '#e0e6ed',
        snow: '#f9fafc',
        white: '#ffffff',

        red: '#ec3750',
        orange: '#ff8c37',
        yellow: '#f1c40f',
        green: '#33d6a6',
        cyan: '#5bc0de',
        blue: '#338eda',
        purple: '#a633d6',

        twitter: '#1da1f2',
        facebook: '#3b5998',
        instagram: '#e1306c',
    },
}

//  @ts-ignore
const generateSparkle = color => {
    const sparkle = {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: random(0, 100) + '%',
            left: random(0, 100) + '%',
        },
    }
    return sparkle
}

const Sparkles = ({
    colors = ['orange', 'yellow', 'green'],
    //  @ts-ignore
    children,
    //  @ts-ignore
    sx,
    //  @ts-ignore
    props,
    ...delegated
}) => {
    //  @ts-ignore
    const allColors = colors.map(n => theme.colors[n])
    const getColor = () => sample(allColors)
    const [sparkles, setSparkles] = useState(() => {
        return range(3).map(() => generateSparkle(getColor()))
    })
    useRandomInterval(
        () => {
            const sparkle = generateSparkle(getColor())
            const now = Date.now()
            // @ts-ignore
            const nextSparkles = sparkles.filter(sp => {
                const delta = now - sp.createdAt
                return delta < 750
            })
            nextSparkles.push(sparkle)
            setSparkles(nextSparkles)
        },
        50,
        450
    )

    return (
        <Wrapper {...delegated}>
            {/* @ts-ignore */}
            {sparkles.map(sparkle => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <ChildWrapper as="strong" sx={sx} {...props}>
                {children}
            </ChildWrapper>
        </Wrapper>
    )
}

//  @ts-ignore
const Sparkle = ({ size, color, style }) => {
    const path =
        'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
    return (
        <SparkleWrapper style={style}>
            <SparkleSvg
                width={size}
                height={size}
                viewBox="0 0 68 68"
                fill="none"
            >
                <path d={path} fill={color} />
            </SparkleSvg>
        </SparkleWrapper>
    )
}

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.span`
    display: inline-block;
    position: relative;
`
const SparkleWrapper = styled.span`
    position: absolute;
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${comeInOut} 1000ms forwards;
    }
`
const SparkleSvg = styled.svg`
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${spin} 1250ms linear;
    }
`
const ChildWrapper = styled(Text)`
    position: relative;
    z-index: 1;
    font-weight: bold;
`

const randomer = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min

//@ts-ignore
const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = React.useRef(null)
    const savedCallback = React.useRef(callback)
    React.useEffect(() => {
        savedCallback.current = callback
    })
    React.useEffect(() => {
        let isEnabled =
            typeof minDelay === 'number' && typeof maxDelay === 'number'
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = randomer(minDelay, maxDelay)
                // @ts-ignore
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current()
                    handleTick()
                }, nextTickAt)
            }
            handleTick()
        }
        // @ts-ignore
        return () => window.clearTimeout(timeoutId.current)
    }, [minDelay, maxDelay])
    const cancel = React.useCallback(function () {
        // @ts-ignore
        window.clearTimeout(timeoutId.current)
    }, [])
    return cancel
}
export default Sparkles
