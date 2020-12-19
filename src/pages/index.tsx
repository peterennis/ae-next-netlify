import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moonbeam Development!</title>
        <link rel="icon" href="/assets/icon/favicon.png" />
      </Head>

      <main>
        <Header title="Welcome to moonbeam!" />
        <p className="description">
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <ion-grid>
          <ion-row>
            {new Array(8).fill("").map((k, i) => (
              <ion-col key={i} size="3">
                <ion-card>
                  <Image
                    src="/ae-octocat-red.png"
                    alt="cool katze"
                    width={500}
                    height={500}
                  />
                  <ion-card-header>
                    <ion-card-subtitle>Location</ion-card-subtitle>
                    <ion-card-title>Kool Katze, CA</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-icon name="glasses" slot="start"></ion-icon>
                    No matter what you say, we'll take that challenge any day.
                    We're the cool, cool, coolest cats in town.
                  </ion-card-content>
                </ion-card>
              </ion-col>
            ))}
          </ion-row>
        </ion-grid>
      </main>

      <Footer />
    </div>
  );
}
