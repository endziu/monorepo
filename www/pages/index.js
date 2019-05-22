import Link from "next/link"
import Header from "../components/header"

const linkStyle = {
  marginRight: "1em",
  borderBottom: "solid 2px bisque",
  textDecoration: "none"
}

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a style={linkStyle}>a page</a>
        </Link>
        <Link href="/api?id=0x5f36da21&foo=bar">
          <a style={linkStyle}>an api</a>
        </Link>
        <Link href="https://github.com/endziu/monorepo">
          <a style={linkStyle}>git</a>
        </Link>
      </section>
    </main>
  )
}

export default Index
