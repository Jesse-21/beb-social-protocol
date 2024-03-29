import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">BEBverse 1.0 Protocol</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://sdk.beb.xyz"
            style={{ marginLeft: "1rem" }}
          >
            SDK
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://beb.xyz"
            style={{ marginLeft: "1rem" }}
          >
            Go to BEBverse
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="We're the first Super NFT representing communities (dimensions)."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <img src="/img/6LbmbnX.jpg" alt="beb.xyz client" />
      </main>
    </Layout>
  );
}
