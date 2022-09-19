// import React from 'react'
// import {Canvas, Group, TextPath, Skia, useFont, vec, Fill} from "@shopify/react-native-skia";
//  
// const size = 128;
// const path = Skia.Path.Make();
// path.addCircle(size, size, size/2);
//  
// export const HelloWorld = () => {
//   const font = useFont(require("../assets/fonts/AlumniSansPinstripe-Italic.ttf"), 24);
//   if (font === null) {
//     return null;
//   }
//   return (
//     <Canvas>
//       <Fill color="white" />
//       <Group transform={[{ rotate: Math.PI }]} origin={vec(size, size)}>
//         <TextPath font={font} path={path} text="Hello World!" />
//       </Group>
//     </Canvas>
//   );
// };
// export default HelloWorld;