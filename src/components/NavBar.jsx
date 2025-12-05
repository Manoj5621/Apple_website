import { navLinks } from "../constants/index";
const NavBar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo" />

            <ul>
                {navLinks.map((item) => (
                <li key={item.lable}>
                    <a href={item.lable}>{item.lable}</a>
                </li>
                ))}

            </ul>

            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar