import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
    render() {
        return (
            <>
                <Link href='/'>
                    <a>Accueil</a>
                </Link>
                <Link href='/about'>
                    <a>A propos</a>
                </Link>
                <Link href='/portfolio'>
                    <a>Portfolio</a>
                </Link>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
                <Link href='/cv'>
                    <a>CV</a>
                </Link>
            </>
        )
    }
}
