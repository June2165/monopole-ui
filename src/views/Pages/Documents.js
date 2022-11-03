import React from "react";
// Chakra imports
import {
  Flex,
  //  CircularProgress,
  //  CircularProgressLabel,
  Button,
  Link,
  //useColorModeValue,
} from "@chakra-ui/react";

//import { Viewer, Worker } from "@react-pdf-viewer/core";

//import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

//import "@react-pdf-viewer/core/lib/styles/index.css";
//import "@react-pdf-viewer/default-layout/lib/styles/index.css";

//import paper from "../../assets/pdf/litepaper.pdf";

function Documents() {
  //  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  //const color = useColorModeValue("white", "dark");

  return (
    <Flex justifyContent="center" w="100%" mt="88px" mb="500px" align="center" gap="25px">
      <Link
        href={
          "https://www.canva.com/design/DAFDVSW3u-E/YW5sORfEBsp5uDiCQijpcQ/view?utm_content=DAFDVSW3u-E&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
        }
        isExternal
        target="_blank"
        _focus={{ boxShadow: "none" }}
      >
        <Button
          borderRadius="16px"
          width="200px"
          minWidth="160px"
          height="64px"
          background="#8235FF"
          color="white"
          _active={{
            background: "#03CB88",
          }}
        >
          View our Lite Paper
        </Button>
      </Link>
      <Link
        href={
          "https://www.canva.com/design/DAFHw1xIngo/2lHwJIuOlLPHEQ0oDdD5bQ/view?utm_content=DAFHw1xIngo&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
        }
        isExternal
        target="_blank"
        _focus={{ boxShadow: "none" }}
      >
        <Button
          borderRadius="16px"
          width="200px"
          minWidth="160px"
          height="64px"
          background="#8235FF"
          color="white"
          _active={{
            background: "#03CB88",
          }}
        >
          View our Pitch Deck
        </Button>
      </Link>

      {/*<Worker
        workerUrl={"https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js"}
      >
        <Viewer
          theme={color}
          fileUrl={documents}
          plugins={[defaultLayoutPluginInstance]}
          renderLoader={(percentages) => (
            <CircularProgress value={percentages} color="green.400">
              <CircularProgressLabel>{percentages}%</CircularProgressLabel>
            </CircularProgress>
          )}
        />
      </Worker>*/}
    </Flex>
  );
}

export default Documents;
