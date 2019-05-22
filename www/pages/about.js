import { Component } from "react"
import Link from "next/link"
import Header from "../components/header"

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined"
    return { isServer }
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            page was rendered{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>

            <a href="/about">reload</a>

          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    )
  }
}

export default AboutPage
