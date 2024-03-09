'use client'

import { useEffect, useRef } from 'react'
import Balancer from 'react-wrap-balancer'
import { Box, Button, Flex, Grid, Heading, Text, Image } from 'theme-ui'
import Sparkles from './components/spackles'

export default function Home() {
    const spotlightRef = useRef()
    useEffect(() => {
        const handler = (event: { pageX: any; pageY: any }) => {
            //@ts-ignore
            spotlightRef.current.style.background = `radial-gradient(
				circle at ${event.pageX}px ${event.pageY}px,
				rgba(0, 0, 0, 0) 10px,
				rgba(0, 0, 0, 0.8) 80px
			)`
        }
        window.addEventListener('mousemove', handler)
        return () => window.removeEventListener('mousemove', handler)
    }, [])
    return (
        <>
            <Box
                className="quicksand antialiased"
                as="header"
                sx={{
                    bg: '#000000',
                    backgroundImage: `
						linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
						url('https://cloud-dst3a9oz5-hack-club-bot.vercel.app/0image.png')
					`,
                    color: '#ffffff',
                    position: 'relative',
                }}
            >
                <Box
                    ref={spotlightRef}
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bg: '#000000',
                        pointerEvents: 'none',
                    }}
                />
                <Flex
                    sx={{
                        p: 4,
                        pt: 10,
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 5,
                        position: 'relative',
                    }}
                >
                    <Flex
                        sx={{
                            pt: [3, 1],
                            width: '100%',
                            maxWidth: '1024px',
                            alignItems: 'center',
                        }}
                    >
                        <Flex
                            sx={{ flex: 1, flexDirection: 'column', gap: 25 }}
                        >
                            <Heading
                                className="quicksand text-4xl sm:text-6xl"
                                as="h1"
                                sx={{
                                    marginTop: '120px',
                                    textAlign: 'center',
                                    textShadow:
                                        '0 0 30px rgba(42, 252, 88, 0.6)',
                                    color: '#87ffa1',
                                }}
                            >
                                <Balancer ratio={0.3}>HackGriffith</Balancer>
                            </Heading>
                            <Heading
                                className="quicksand"
                                as="div"
                                sx={{
                                    fontSize: 4,
                                    fontWeight: 400,
                                    maxWidth: '1024px',
                                    textAlign: 'center',
                                }}
                            >
                                <Balancer ratio={0.3}>
                                    Griffith College Computing & Engineering
                                    Society
                                </Balancer>
                            </Heading>
                            <Flex
                                sx={{
                                    mt: 16,
                                    gap: 10,
                                    flexDirection: ['column', 'row'],
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    variant="ctaLg"
                                    as="a"
                                    // @ts-ignore
                                    href="https://github.com/HackGriffith"
                                    target="_blank"
                                    sx={{
                                        background:
                                            'linear-gradient(90deg, #60cc38 0%, #113b11 100%)',
                                    }}
                                >
                                    Get Started On GitHub
                                </Button>

                                <Button
                                    variant="outlineLg"
                                    as="a"
                                    sx={{
                                        borderColor: '#113b11',
                                        color: '#60cc38',
                                    }}
                                >
                                    {/* @ts-ignore */}
                                    <Sparkles>Build, Break & Do Magic</Sparkles>
                                </Button>
                            </Flex>
                            <Heading
                                className="quicksand"
                                as="h2"
                                sx={{
                                    pt: 60,
                                    pb: 35,
                                    fontSize: 36,
                                    fontWeight: 500,
                                    textAlign: 'center',
                                }}
                            >
                                <Balancer ratio={0.8}>
                                    Join the HackGriffith community, design,
                                    code and build with friends and mentors.
                                </Balancer>
                            </Heading>
                            <Grid
                                width={300}
                                gap={4}
                                sx={{
                                    fontSize: 2,
                                    h3: { fontSize: 2 },
                                    width: '100%',
                                    maxWidth: 'layout',
                                    pb: 40,
                                }}
                            >
                                <Flex
                                    as="article"
                                    sx={{ flexDirection: 'column', gap: 2 }}
                                >
                                    <Text className="quicksand" as="h3">
                                        Community & Friends
                                    </Text>
                                    <Text as="p" className="quicksand">
                                        Meet other students who are passionate
                                        about electronics and programming. Build
                                        projects together and have fun!
                                    </Text>
                                </Flex>

                                <Flex
                                    as="article"
                                    sx={{ flexDirection: 'column', gap: 2 }}
                                >
                                    <Text as="h3">Hackathons</Text>
                                    <Text as="p">
                                        Compete in hackathons and win prizes.
                                        Tinker with hardware and software to
                                        build
                                    </Text>
                                </Flex>
                            </Grid>
                            <Flex
                                as="div"
                                sx={{
                                    flexDirection: 'row',
                                    gap: 3,
                                    alignItems: 'end',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    padding: '0.8rem 1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px dashed white',
                                    background: '#000000',
                                }}
                            >
                                <Flex
                                    as="div"
                                    sx={{
                                        flexDirection: 'column',
                                        gap: 1,
                                        width: '100%',
                                    }}
                                >
                                    <Text as="p" sx={{ fontSize: 20 }}>
                                        <Balancer>
                                            In-person communication is
                                            high-bandwidth and offers feedback
                                            that is difficult to replicate
                                            elsewhere, allowing the use of
                                            shorthand for concepts and a two-way
                                            conversation that autodidactic
                                            education lacks.
                                        </Balancer>
                                    </Text>
                                    <Text
                                        as="p"
                                        sx={{
                                            fontSize: 20,
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        <Balancer>
                                            -
                                            <span
                                                style={{
                                                    textDecoration: 'underline',
                                                }}
                                            >
                                                The Small Group
                                            </span>{' '}
                                            An Essay on community by James
                                            Mulholland
                                        </Balancer>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
