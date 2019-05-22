import Link from "next/link"
import Header from "../components/header"

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <hr />
        <Link href="/api">
          <a>get data from api</a>
        </Link>
      </section>
    </main>
  )
}

export default Index
