import Layout from "@components/Layout";
import Meta from "@components/Meta";
import Image from "next/image";
import Link from "next/link";

import modelViewerImg from "../../public/database/model-viewer.jpg";
import storiesImg from "../../public/database/stories.jpg";
import assetsImg from "../../public/database/assets.jpg";
import artworksImg from "../../public/database/artworks.jpg";

export default function Database(): JSX.Element {
  return (
    <Layout>
      <Meta
        title="Database"
        description="3D Model viewer, Stories, Assets and Artworks"
        cover="https://nierrein.guide/cover-database.jpg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Link href="/database/model-viewer">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-4 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={modelViewerImg}
              alt="3D Model viewer thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              3D Model Viewer
            </h3>
          </a>
        </Link>

        <Link href="/database/stories">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-4 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={storiesImg}
              alt="Stories thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Stories
            </h3>
          </a>
        </Link>

        <Link href="/database/assets">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-4 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={assetsImg}
              alt="Assets thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Assets
            </h3>
          </a>
        </Link>

        <Link href="/database/artworks">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-4 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={artworksImg}
              alt="Artworks thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Artworks
            </h3>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
