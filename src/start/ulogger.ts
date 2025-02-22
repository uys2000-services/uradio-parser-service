import { setULogger } from "u-logger";

setULogger(
  true,
  (name) => console.log(`CALL : ${name}`),
  (name) => console.log(`FRES : ${name} : true`),
  (name) => console.log(`PRES : ${name} : true`),
  (name) => console.log(`FERR : ${name} : false`),
  (name) => console.log(`PERR : ${name} : false`)
);
