import { ImageResponse } from "next/og";
import { loadOperator } from "./helpers/loadOperator";

export const runtime = "edge";

// Image metadata
export const alt = "Online booking by mybookr.io";
export const size = {
  // lets us our files for now
  width: 1465,
  height: 824,
  // Default:
  // width: 1200,
  // height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const operator = await loadOperator();

  if (!operator) {
    // Image
    const mybookrDefaultImage = await fetch(
      new URL("../assets/social-share/default-image.png", import.meta.url),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            // @ts-ignore this works, no worries :)
            src={mybookrDefaultImage}
            style={{
              objectFit: "cover",
              objectPosition: "top",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      ),
      {
        ...size,
      },
    );
  }

  // Font
  const interSemiBold = fetch(
    new URL("../assets/social-share/Inter_28pt-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  // Images
  let operatorLogo;
  if (operator.logo) {
    operatorLogo = await fetch(
      new URL(operator.logo?.url, import.meta.url),
    ).then((res) => res.arrayBuffer());
  }
    

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 48,
          padding: "0 128px",
          lineHeight: 1.618,
        }}
      >
        {operatorLogo && (
          <img
            //@ts-ignore
            src={operatorLogo}
            // height="100"
            // width="100"
            style={{ objectFit: "contain", height: "128", maxWidth: "61.8%" }}
          />
        )}
        <p style={{ fontSize: 48, opacity: 0.7 }}>
          Online booking by mybookr.io
        </p>
        <p style={{ fontSize: 38 }}>{operator.description}</p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}

// // "use server";

// import { ImageResponse } from "next/og";
// import { loadOperator } from "./helpers/loadOperator";
// import { readFile } from "node:fs/promises";
// import { join } from "node:path";

// export const runtime = "edge";

// // // Image metadata
// // export const alt = "About Acme";
// // export const size = {
// //   width: 1200,
// //   height: 630,
// // };

// // export const contentType = "image/png";

// // Image generation
// export default async function Image() {
//   const operator = await loadOperator();

//   if (true || !operator) {
//     const logoData = await readFile(
//       join(process.cwd(), "src", "assets", "social-share-image.png"),
//     );
//     const logoSrc = Uint8Array.from(logoData).buffer;
//     return new ImageResponse(
//       (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src={logoSrc}
//             height="100"
//             style={{ objectFit: "cover", height: "100%", width: "100%" }}
//           />
//         </div>
//       ),
//     );

//     const defaultImageResponse = await fetch(
//       new URL("../assets/social-share-image.png", import.meta.url),
//     );

//     return defaultImageResponse.arrayBuffer();
//   }

//   // // Font
//   // const interSemiBold = fetch(
//   //   new URL("./Inter-SemiBold.ttf", import.meta.url),
//   // ).then((res) => res.arrayBuffer());

//   // return new ImageResponse(
//   //   (
//   //     // ImageResponse JSX element
//   //     <div
//   //       style={{
//   //         fontSize: 128,
//   //         background: "white",
//   //         width: "100%",
//   //         height: "100%",
//   //         display: "flex",
//   //         alignItems: "center",
//   //         justifyContent: "center",
//   //       }}
//   //     >
//   //       <Logo />
//   //       <p>{operator.description}</p>
//   //       <p>{operator.name} online booking by mybookr.io</p>
//   //     </div>
//   //   ),
//   //   // ImageResponse options
//   //   {
//   //     // For convenience, we can re-use the exported opengraph-image
//   //     // size config to also set the ImageResponse's width and height.
//   //     ...size,
//   //     fonts: [
//   //       {
//   //         name: "Inter",
//   //         data: await interSemiBold,
//   //         style: "normal",
//   //         weight: 400,
//   //       },
//   //     ],
//   //   },
//   // );
// }
