import logo from '../assets/investment-logo.webp'

export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="" />
            <h1>Investment Calculator</h1>
        </header>
    )
}