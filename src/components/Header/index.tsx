"use client"

import Logo from "./Logo"
import Menu from "./Menu"

export default function Header(props: any) {
    return <header>
        {props.name}
        {props.age}
        {props.isMan ? "is a man": "is a women"}
        {/* <Logo />
        <Menu /> */}
    </header>
}