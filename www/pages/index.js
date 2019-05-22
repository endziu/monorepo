import Link from "next/link"
import Header from "../components/header"

const mr2 = { marginRight: "1em" }

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a style={mr2}>a page</a>
        </Link>
        <Link href="/api">
          <a style={mr2}>an api</a>
        </Link>
      </section>
    </main>
  )
}

export default Index
